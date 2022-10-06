import { IProgram } from '../../../program.exports'
import { IIdentifier } from '../../expression/interfaces.exports'
import { TStatement } from '../statement.export'

export interface IProc extends IProgram {
  type: 'procStatement'
  name: string
  args: IIdentifier[]
  statements: TStatement[]
}
