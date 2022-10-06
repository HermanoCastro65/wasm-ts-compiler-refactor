import { IToken } from '../../tokenizer/interfaces/token.interface'
import { TProgram } from '../types/program.type'
import { IProgram } from './program.interface'

export interface Parser {
  (tokens: IToken[]): TProgram
}

export interface IParser<T extends IProgram> {
  (): T
}
