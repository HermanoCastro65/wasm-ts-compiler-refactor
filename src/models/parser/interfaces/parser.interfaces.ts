import { IProgram, TProgram } from '@models/parser.exports'
import { IToken } from '@models/tokenizer.exports'

export interface IParser {
  (tokens: IToken[]): TProgram
}

export interface IStep<T extends IProgram> {
  (): T
}
