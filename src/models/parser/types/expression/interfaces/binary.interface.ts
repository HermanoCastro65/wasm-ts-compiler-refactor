import { IProgram } from '../../../program.exports'
import { TExpression, TOperator } from '../types.exports'

export interface IBinary extends IProgram {
  type: 'binaryExpression'
  left: TExpression
  right: TExpression
  operatorO: TOperator
}
