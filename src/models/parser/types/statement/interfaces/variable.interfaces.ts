import { IProgram } from '../../../interfaces.exports'
import { TExpression } from '../../expression/types.exports'

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
