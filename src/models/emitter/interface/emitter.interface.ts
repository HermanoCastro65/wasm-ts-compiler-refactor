import { TProgram } from '../../parser/type.exports'

export interface IEmitter {
  (ast: TProgram): Uint8Array
}
