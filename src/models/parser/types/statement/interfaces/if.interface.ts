import { IProgram } from '../../..'
import { TExpression } from '../../expression'
import { TStatement } from '../types/statement.type'

export interface IIf extends IProgram {
  type: 'ifStatement'
  expression: TExpression
  consequent: TStatement[]
  alternate: TStatement[]
}
