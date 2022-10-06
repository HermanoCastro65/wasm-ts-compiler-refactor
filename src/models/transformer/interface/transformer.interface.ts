import { TProgram } from '../../parser/program.exports'
import { TTransformer } from '../transformer.exports'

export interface ITransformer {
  (ast: TProgram): TTransformer
}
