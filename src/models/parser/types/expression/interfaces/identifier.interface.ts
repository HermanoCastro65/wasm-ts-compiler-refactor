import { IProgram } from '@models/parser.exports'

export interface IIdentifier extends IProgram {
  type: 'identifier'
  value: string
}
