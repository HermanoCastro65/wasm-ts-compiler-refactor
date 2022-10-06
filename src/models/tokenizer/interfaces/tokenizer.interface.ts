import { IToken } from './token.interface'

export interface ITokenizer {
  (input: string): IToken[]
}
