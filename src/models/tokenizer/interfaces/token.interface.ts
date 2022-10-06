import { TToken } from '../types/token.type'

export interface IToken {
  type: TToken
  value: string
  line?: number
  char?: number
}
