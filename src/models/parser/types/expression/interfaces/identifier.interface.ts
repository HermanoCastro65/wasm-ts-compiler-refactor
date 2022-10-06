import { IProgram } from '../../../program.exports'

export interface IIdentifier extends IProgram {
  type: 'identifier'
  value: string
}
