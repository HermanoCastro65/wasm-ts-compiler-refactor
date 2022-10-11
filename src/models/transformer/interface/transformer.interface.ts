import { TProgram } from '@models/parser.exports'
import { TTransformer } from '@models/transformer.exports'

export interface ITransformer {
  (ast: TProgram): TTransformer
}
