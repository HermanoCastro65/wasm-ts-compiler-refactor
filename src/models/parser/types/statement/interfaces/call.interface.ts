import { IProgram } from '../../..'
import { TExpression } from '../../expression'

export interface ICall extends IProgram {
  type: 'callStatement'
  name: string
  args: TExpression[]
}
