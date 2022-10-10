import { IProgram } from '../../../interfaces.exports'
import { TExpression } from '../../expression/types.exports'

export interface ICall extends IProgram {
  type: 'callStatement'
  name: string
  args: TExpression[]
}
