import { TTransformer } from '@models/transformer.exports'

export interface IEmitter {
  (ast: TTransformer): Uint8Array
}
