import { IProgram } from '../../../interfaces.exports'
import { TExpression } from '../../expression/types.exports'

export interface IPrint extends IProgram {
  type: 'printStatement'
  expression: TExpression
}
