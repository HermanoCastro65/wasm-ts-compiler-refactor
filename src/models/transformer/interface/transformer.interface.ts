import { TProgram } from '../../parser/program.exports'
import { TTransformer } from '../type.export'

export interface ITransformer {
  (ast: TProgram): TTransformer
}
