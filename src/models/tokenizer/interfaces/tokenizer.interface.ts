import { IToken } from '../interfaces.exports'

export interface ITokenizer {
  (input: string): IToken[]
}
