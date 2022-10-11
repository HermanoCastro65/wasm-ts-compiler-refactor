import { TProgram } from '@models/parser.exports'

export interface IEmitter {
  (ast: TProgram): Uint8Array
}
