import { IRuntime } from '../../../models/runtime/interfaces.export'
import { parse } from '../../parse/parser.export'
import { tokenize } from '../../tokenizer/tokenizer.export'
import { transformer } from '../../transformer/transformer.export'
import { executeProc } from '../constants.exports'

export const runtime: IRuntime = async (src, env) => () => {
  const tokens = tokenize(src)
  const program = parse(tokens)
  const transformedProgram = transformer(program)

  const main = transformedProgram.find((f) => f.name === 'main')
  if (!main) throw Error
  executeProc(main, env, transformedProgram)
}
