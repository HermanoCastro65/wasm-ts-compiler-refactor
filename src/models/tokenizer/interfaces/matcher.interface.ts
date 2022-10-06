import { IToken } from '../interfaces.exports'

export interface IMatcher {
  (input: string, index: number): IToken | null
}
