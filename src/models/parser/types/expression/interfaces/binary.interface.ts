import { IProgram } from '../../..'
import { TExpression, TOperator } from '..'

export interface IBinary extends IProgram {
  type: 'binaryExpression'
  left: TExpression
  right: TExpression
  operatorO: TOperator
}
