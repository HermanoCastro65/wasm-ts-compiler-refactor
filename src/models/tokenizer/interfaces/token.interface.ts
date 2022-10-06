import { TToken } from '../token.exports'

export interface IToken {
  type: TToken
  value: string
  line?: number
  char?: number
}
