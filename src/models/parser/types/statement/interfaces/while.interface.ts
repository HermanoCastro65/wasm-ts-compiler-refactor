import { IProgram } from '../../../program.exports'
import { TExpression } from '../../expression/types.exports'
import { TStatement } from '../statement.export'

export interface IWhile extends IProgram {
  type: 'whileStatement'
  expression: TExpression
  statements: TStatement[]
}
