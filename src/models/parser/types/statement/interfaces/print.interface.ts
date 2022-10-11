import { IProgram } from '@models/parser.exports'
import { TExpression } from '@parser-types/expression.exports'

export interface IPrint extends IProgram {
  type: 'printStatement'
  expression: TExpression
}
