import { IProgram } from '../../../interfaces.exports'

export interface INumber extends IProgram {
  type: 'numberLiteral'
  value: number
}
