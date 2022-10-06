import { TToken } from '../token.export'

export interface IToken {
  type: TToken
  value: string
  line?: number
  char?: number
}
