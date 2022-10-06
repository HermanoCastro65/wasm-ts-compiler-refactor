import { IProgram } from '../../..'

export interface INumber extends IProgram {
  type: 'numberLiteral'
  value: number
}
