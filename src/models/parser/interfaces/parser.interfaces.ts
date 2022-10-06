import { IToken } from '../../tokenizer/token.exports'
import { IProgram, TProgram } from '../program.exports'

export interface Parser {
  (tokens: IToken[]): TProgram
}

export interface IParser<T extends IProgram> {
  (): T
}
