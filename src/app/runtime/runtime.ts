import { IRuntime } from '../../models/runtime/runtime.export'

/*
export const runtime: IRuntime = async (src, env) => {
  const wasm = compile(src)
  const memory = new WebAssembly.Memory({ initial: 1 })
  const result: any = await WebAssembly.instantiate(wasm, {
    env: { ...env, memory },
  })
  return () => {
    result.instance.exports.run()
    env.display.set(new Uint8Array(memory.buffer, 0, 10000))
  }
}
*/
