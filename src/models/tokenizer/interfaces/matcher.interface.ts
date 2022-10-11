import { IToken } from '@models/tokenizer.exports'

export interface IMatcher {
  (input: string, index: number): IToken | null
}
