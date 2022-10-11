import { TProgram } from '../../parser/type.exports'
import { TTransformer } from '../type.export'

export interface ITransformer {
  (ast: TProgram): TTransformer
}
