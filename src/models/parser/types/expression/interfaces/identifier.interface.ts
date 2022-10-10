import { IProgram } from '../../../interfaces.exports'

export interface IIdentifier extends IProgram {
  type: 'identifier'
  value: string
}
