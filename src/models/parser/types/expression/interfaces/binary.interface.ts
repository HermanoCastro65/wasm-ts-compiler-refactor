import { IProgram } from '@models/parser.exports'
import { TExpression, TOperator } from '@parser-types/expression.exports'

export interface IBinary extends IProgram {
  type: 'binaryExpression'
  left: TExpression
  right: TExpression
  operator: TOperator
}
