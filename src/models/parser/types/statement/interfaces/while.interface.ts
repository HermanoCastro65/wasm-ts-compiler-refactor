import { IProgram } from '../../../interfaces.exports'
import { TExpression } from '../../expression/types.exports'
import { TStatement } from '../type.export'

export interface IWhile extends IProgram {
  type: 'whileStatement'
  expression: TExpression
  statements: TStatement[]
}
