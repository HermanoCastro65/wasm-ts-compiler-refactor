import { tokenize } from '@core/tokenizer.export'
import { transformer } from '@core/transformer.export'
import { IRuntime } from '@models/runtime.export'
import { parse } from '@core/parser.export'
import { executeProc } from '@core/interpreter.export'

export const runtime: IRuntime = async (src, env) => () => {
  const tokens = tokenize(src)
  const program = parse(tokens)
  const transformedProgram = transformer(program)

  const main = transformedProgram.find((f) => f.name === 'main')
  if (!main) throw Error
  executeProc(main, env, transformedProgram)
}
