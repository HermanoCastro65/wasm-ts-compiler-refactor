import { emitter } from '@core/emitter.exports'
import { tokenize } from '@core/tokenizer.export'
import { transformer } from '@core/transformer.export'
import { ICompiler } from '@models/compiler.export'
import { parse } from '@core/parser.export'

export const compile: ICompiler = (src) => {
  const tokens = tokenize(src)
  const ast = parse(tokens)
  const transformedAst = transformer(ast)
  const wasm = emitter(transformedAst)
  return wasm
}
