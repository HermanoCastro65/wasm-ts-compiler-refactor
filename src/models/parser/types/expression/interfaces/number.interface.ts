import { IProgram } from '../../../program.exports'

export interface INumber extends IProgram {
  type: 'numberLiteral'
  value: number
}
