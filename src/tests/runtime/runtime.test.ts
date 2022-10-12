import { runtime } from '@core/runtime.export'
import mock from '../mock/test.mock'

type TResult =
  | {
      output: any[]
      pixels: any[]
    }
  | undefined

const executeCode = async (code: string, done: jest.DoneCallback) => {
  const output: any[] = []
  const display = new Uint8Array(10000)
  const pixels: any[] = []

  try {
    const tick = await runtime(code, {
      print: (d) => output.push(d),
      display,
    })
    tick()

    display.forEach((value, index) => {
      if (value !== 0) {
        pixels.push([index, value])
      }
    })

    done()
    return { output, pixels }
  } catch (e) {
    console.error(e)
    done.fail()
  }
}

describe('runtime', () => {
  mock.forEach((app) => {
    test(app.name, (done) => {
      const result = executeCode(app.input, done) as unknown as TResult
      if (result?.pixels && result?.output) {
        expect(result?.output).toEqual(app.output)
        expect(result?.pixels).toEqual(app.pixels)
      }
    })
  })
})
