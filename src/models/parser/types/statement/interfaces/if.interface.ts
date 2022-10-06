import { IProgram } from '../../../program.exports'
import { TExpression } from '../../expression/types.exports'
import { TStatement } from '../statement.export'

export interface IIf extends IProgram {
  type: 'ifStatement'
  expression: TExpression
  consequent: TStatement[]
  alternate: TStatement[]
}
