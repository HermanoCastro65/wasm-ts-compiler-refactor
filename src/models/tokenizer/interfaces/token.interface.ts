import { TToken } from '../type.exports'

export interface IToken {
  type: TToken
  value: string
  line?: number
  char?: number
}
