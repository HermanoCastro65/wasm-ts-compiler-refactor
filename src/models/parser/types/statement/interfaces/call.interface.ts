import { IProgram } from '@models/parser.exports'
import { TExpression } from '@parser-types/expression.exports'

export interface ICall extends IProgram {
  type: 'callStatement'
  name: string
  args: TExpression[]
}
