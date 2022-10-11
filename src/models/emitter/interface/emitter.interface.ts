import { TProgram } from '@models/parser.exports'
import { TTransformer } from '@models/transformer.exports'

export interface IEmitter {
  (ast: TTransformer | TProgram): Uint8Array
}
