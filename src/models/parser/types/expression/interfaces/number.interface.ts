import { IProgram } from '@models/parser.exports'

export interface INumber extends IProgram {
  type: 'numberLiteral'
  value: number
}
