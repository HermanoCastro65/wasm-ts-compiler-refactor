import { IToken } from '@models/tokenizer.exports'

export interface ITokenizer {
  (input: string): IToken[]
}
