import { TExpression, TOperator } from '@parser-types/expression.exports'

export interface IProgram {
  type: string
  operator?: TOperator
  value?: TExpression | string | number
}
