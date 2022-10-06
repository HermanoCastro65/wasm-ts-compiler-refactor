import { TProgram } from '../../parser/types/program.type'

export interface IEmitter {
  (ast: TProgram): Uint8Array
}
