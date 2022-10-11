import { IProgram } from '@models/parser.exports'
import { TExpression } from '@parser-types/expression.exports'
import { TStatement } from '@parser-types/statement.exports'

export interface IIf extends IProgram {
  type: 'ifStatement'
  expression: TExpression
  consequent: TStatement[]
  alternate: TStatement[]
}
