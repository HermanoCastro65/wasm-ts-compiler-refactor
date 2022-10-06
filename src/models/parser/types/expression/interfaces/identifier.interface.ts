import { IProgram } from '../../..'

export interface IIdentifier extends IProgram {
  type: 'identifier'
  value: string
}
