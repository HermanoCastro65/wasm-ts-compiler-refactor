import { IProgram } from '../../..'
import { TExpression } from '../../expression'

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
