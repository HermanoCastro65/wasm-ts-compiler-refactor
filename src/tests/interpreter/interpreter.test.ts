import { interpreter } from '@core/interpreter.export'
import mock from '../mock/test.mock'

const executeCode = async (code: string) => {
  const output: any[] = []
  const pixels: any[] = []
  const display = new Uint8Array(10000)

  const tick = await interpreter(code, {
    print: (d) => output.push(d),
    display,
  })
  tick()

  display.forEach((value, index) => {
    if (value !== 0) {
      pixels.push([index, value])
    }
  })

  return {
    output,
    pixels,
  }
}

describe('interpreter', () => {
  mock.forEach((app) => {
    test(app.name, async () => {
      const result = await executeCode(app.input)
      expect(result.output).toEqual(app.output)
      if (app.pixels || result.pixels.length) {
        expect(result.pixels).toEqual(app.pixels)
      }
    })
  })
})
