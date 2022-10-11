import { IProgram } from '@models/parser.exports'
import { TExpression } from '@parser-types/expression.exports'
import { TStatement } from '@parser-types/statement.exports'

export interface IWhile extends IProgram {
  type: 'whileStatement'
  expression: TExpression
  statements: TStatement[]
}
