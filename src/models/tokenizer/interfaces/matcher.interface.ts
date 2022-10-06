import { IToken } from '../token.exports'

export interface IMatcher {
  (input: string, index: number): IToken | null
}
