import { IToken } from '../token.exports'

export interface ITokenizer {
  (input: string): IToken[]
}
