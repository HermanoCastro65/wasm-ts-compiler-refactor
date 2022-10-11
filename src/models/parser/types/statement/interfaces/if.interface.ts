import { IProgram } from '../../../interfaces.exports'
import { TExpression } from '../../expression/types.exports'
import { TStatement } from '../type.export'

export interface IIf extends IProgram {
  type: 'ifStatement'
  expression: TExpression
  consequent: TStatement[]
  alternate: TStatement[]
}
