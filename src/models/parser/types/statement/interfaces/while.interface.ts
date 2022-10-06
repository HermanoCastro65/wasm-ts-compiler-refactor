import { IProgram } from '../../../interfaces/program.interface'
import { TExpression } from '../../expression'
import { TStatement } from '../types/statement.type'

export interface IWhile extends IProgram {
  type: 'whileStatement'
  expression: TExpression
  statements: TStatement[]
}
