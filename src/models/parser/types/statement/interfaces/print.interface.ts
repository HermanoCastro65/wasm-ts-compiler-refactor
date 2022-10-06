import { IProgram } from '../../..'
import { TExpression } from '../../expression'

export interface IPrint extends IProgram {
  type: 'printStatement'
  expression: TExpression
}
