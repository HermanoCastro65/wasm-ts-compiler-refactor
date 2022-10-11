import { IProgram } from '@models/parser.exports'
import { TExpression } from '@parser-types/expression.exports'

export interface IVariableDeclaration extends IProgram {
  type: 'variableDeclaration'
  name: string
  initializer: TExpression
}

export interface IVariableAssignment extends IProgram {
  type: 'variableAssignment'
  name: string
  value: TExpression
}
