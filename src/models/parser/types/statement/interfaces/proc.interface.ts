import { IProgram } from '../../../interfaces/program.interface'
import { IIdentifier } from '../../expression/interfaces/identifier.interface'
import { TStatement } from '../types/statement.type'

export interface IProc extends IProgram {
  type: 'procStatement'
  name: string
  args: IIdentifier[]
  statements: TStatement[]
}
