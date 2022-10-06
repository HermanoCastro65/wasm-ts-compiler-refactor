import { IToken } from './token.interface'

export interface IMatcher {
  (input: string, index: number): IToken | null
}
