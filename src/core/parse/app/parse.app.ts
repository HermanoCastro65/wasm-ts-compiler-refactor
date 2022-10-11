import { IParser, IStep } from '../../../models/parser/interfaces/parser.interfaces'
import { IIdentifier } from '../../../models/parser/types/expression/interfaces.exports'
import { TExpression, TOperator } from '../../../models/parser/types/expression/types.exports'
import {
  ICall,
  IIf,
  IPrint,
  IProc,
  IVariableAssignment,
  IVariableDeclaration,
  IWhile,
} from '../../../models/parser/types/statement/interfaces.exports'
import { TStatement } from '../../../models/parser/types/statement/statement.export'
import { ParserError } from '../error/error.export'

const asOperator = (value: string): TOperator => {
  return value as TOperator
}

export const parse: IParser = (tokens) => {
  const tokenIterator = tokens[Symbol.iterator]()
  let currentToken = tokenIterator.next().value
  let nextToken = tokenIterator.next().value

  const currentTokenIsKeyword = (name: string) =>
    currentToken.value === name && currentToken.type === 'keyword'

  const eatToken = (value?: string) => {
    if (value && value !== currentToken.value) {
      throw new ParserError(
        `Unexpected token value, expected ${value}, received ${currentToken.value}`,
        currentToken
      )
    }
    currentToken = nextToken
    nextToken = tokenIterator.next().value
  }

  const parseExpression: IStep<TExpression> = () => {
    let node: TExpression
    switch (currentToken.type) {
      case 'number':
        node = {
          type: 'numberLiteral',
          value: Number(currentToken.value),
        }
        eatToken()
        return node
      case 'identifier':
        node = { type: 'identifier', value: currentToken.value }
        eatToken()
        return node
      case 'parens':
        eatToken('(')
        const left = parseExpression()
        const operator = currentToken.value
        eatToken()
        const right = parseExpression()
        eatToken(')')
        return {
          type: 'binaryExpression',
          left,
          right,
          operator: asOperator(operator),
        }
      default:
        throw new ParserError(`Unexpected token type ${currentToken.type}`, currentToken)
    }
  }

  const parsePrintStatement: IStep<IPrint> = () => {
    eatToken('print')
    return {
      type: 'printStatement',
      expression: parseExpression(),
    }
  }

  const parseIfStatement: IStep<IIf> = () => {
    eatToken('if')

    const expression = parseExpression()

    let elseStatements = false
    const consequent: TStatement[] = []
    const alternate: TStatement[] = []
    while (!currentTokenIsKeyword('endif')) {
      if (currentTokenIsKeyword('else')) {
        eatToken('else')
        elseStatements = true
      }
      if (elseStatements) {
        alternate.push(parseStatement())
      } else {
        consequent.push(parseStatement())
      }
    }

    eatToken('endif')

    return { type: 'ifStatement', expression, consequent, alternate }
  }

  const parseWhileStatement: IStep<IWhile> = () => {
    eatToken('while')

    const expression = parseExpression()

    const statements: TStatement[] = []
    while (!currentTokenIsKeyword('endwhile')) {
      statements.push(parseStatement())
    }

    eatToken('endwhile')

    return { type: 'whileStatement', expression, statements }
  }

  const parseVariableAssignment: IStep<IVariableAssignment> = () => {
    const name = currentToken.value
    eatToken()
    eatToken('=')
    return { type: 'variableAssignment', name, value: parseExpression() }
  }

  const parseVariableDeclarationStatement: IStep<IVariableDeclaration> = () => {
    eatToken('var')
    const name = currentToken.value
    eatToken()
    eatToken('=')
    return {
      type: 'variableDeclaration',
      name,
      initializer: parseExpression(),
    }
  }

  const parseCallStatementNode: IStep<ICall> = () => {
    const name = currentToken.value
    eatToken()

    const args = parseCommaSeperatedList(() => parseExpression())

    return {
      type: 'callStatement',
      name,
      args,
    }
  }

  function parseCommaSeperatedList<T>(foo: () => T): T[] {
    const args: T[] = []
    eatToken('(')
    while (currentToken.value !== ')') {
      args.push(foo())
      if (currentToken.value !== ')') {
        eatToken(',')
      }
    }
    eatToken(')')
    return args
  }

  const parseProcStatement: IStep<IProc> = () => {
    eatToken('proc')

    const name = currentToken.value
    eatToken()

    const args = parseCommaSeperatedList(() => {
      const arg: IIdentifier = { type: 'identifier', value: currentToken.value }
      eatToken()
      return arg
    })

    const statements: TStatement[] = []
    while (!currentTokenIsKeyword('endproc')) {
      statements.push(parseStatement())
    }
    eatToken('endproc')

    return {
      type: 'procStatement',
      name,
      args,
      statements,
    }
  }

  const parseStatement: IStep<TStatement> = () => {
    if (currentToken.type === 'keyword') {
      switch (currentToken.value) {
        case 'print':
          return parsePrintStatement()
        case 'var':
          return parseVariableDeclarationStatement()
        case 'while':
          return parseWhileStatement()
        case 'if':
          return parseIfStatement()
        case 'proc':
          return parseProcStatement()
        default:
          throw new ParserError(`Unknown keyword ${currentToken.value}`, currentToken)
      }
    } else if (currentToken.type === 'identifier') {
      if (nextToken.value === '=') {
        return parseVariableAssignment()
      } else {
        return parseCallStatementNode()
      }
    }
    throw Error
  }

  const nodes: TStatement[] = []
  while (currentToken) {
    nodes.push(parseStatement())
  }

  if (!nodes) throw Error
  return nodes
}
