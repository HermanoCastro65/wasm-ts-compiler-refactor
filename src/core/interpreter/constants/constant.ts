import { TExpression } from '@parser-types/expression.exports'
import { IProc, TStatement } from '@parser-types/statement.exports'
import { IEnvironment } from '@models/runtime.export'
import { TTransformer } from '@models/transformer.exports'
import { applyOperator } from '@core/interpreter/constants.exports'

export const executeProc = (
  node: IProc,
  env: IEnvironment,
  program: TTransformer,
  args: number[] = []
) => {
  const symbols = new Map(node.args.map((arg, index) => [arg.value, args[index]]))

  const evaluateExpression = (expression: TExpression): number => {
    switch (expression.type) {
      case 'numberLiteral':
        return expression.value
      case 'binaryExpression':
        return applyOperator(
          expression.operator,
          evaluateExpression(expression.left),
          evaluateExpression(expression.right)
        )
      case 'identifier':
        return symbols.get(expression.value) as number
    }
  }

  const executeStatements = (statements: TStatement[]) => {
    statements.forEach((statement) => {
      switch (statement.type) {
        case 'printStatement':
          env.print(evaluateExpression(statement.expression))
          break
        case 'variableDeclaration':
          symbols.set(statement.name, evaluateExpression(statement.initializer))
          break
        case 'variableAssignment':
          symbols.set(statement.name, evaluateExpression(statement.value))
          break
        case 'whileStatement':
          while (evaluateExpression(statement.expression)) {
            executeStatements(statement.statements)
          }
          break
        case 'ifStatement':
          if (evaluateExpression(statement.expression)) {
            executeStatements(statement.consequent)
          } else {
            executeStatements(statement.alternate)
          }
          break
        case 'callStatement':
          if (statement.name === 'setpixel') {
            const x = evaluateExpression(statement.args[0])
            const y = evaluateExpression(statement.args[1])
            const color = evaluateExpression(statement.args[2])
            env.display[y * 100 + x] = color
          } else {
            const procName = statement.name
            const argValues = statement.args.map((arg) => evaluateExpression(arg))
            const proc = program.find((f) => f.name === procName)
            if (proc) executeProc(proc, env, program, argValues)
          }
          break
      }
    })
  }

  executeStatements(node.statements)
}
