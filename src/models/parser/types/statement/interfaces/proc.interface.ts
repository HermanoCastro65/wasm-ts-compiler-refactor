import { IProgram } from '../../../interfaces.exports'
import { IIdentifier } from '../../expression/interfaces.exports'
import { TStatement } from '../type.export'

export interface IProc extends IProgram {
  type: 'procStatement'
  name: string
  args: IIdentifier[]
  statements: TStatement[]
}
