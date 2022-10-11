import { TToken } from '@models/tokenizer.exports'

export interface IToken {
  type: TToken
  value: string
  line?: number
  char?: number
}
