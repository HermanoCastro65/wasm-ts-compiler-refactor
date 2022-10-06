import { IToken } from '../token.export'

export interface ITokenizer {
  (input: string): IToken[]
}
