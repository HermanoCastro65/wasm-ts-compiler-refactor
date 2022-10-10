import { IToken } from '../../tokenizer/interfaces.exports'
import { TProgram } from '../program.exports'
import { IProgram } from './program.interface'

export interface IParser {
  (tokens: IToken[]): TProgram
}

export interface IStep<T extends IProgram> {
  (): T
}
