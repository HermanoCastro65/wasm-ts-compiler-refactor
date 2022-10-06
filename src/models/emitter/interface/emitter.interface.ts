import { TProgram } from '../../parser/program.exports'

export interface IEmitter {
  (ast: TProgram): Uint8Array
}
