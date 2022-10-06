import { IToken } from '../token.export'

export interface IMatcher {
  (input: string, index: number): IToken | null
}
