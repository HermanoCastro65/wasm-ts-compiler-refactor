import { IEmitter } from '@models/emmiter.export'
import { TTransformer } from '@models/transformer.exports'
import {
  functionType,
  encodeVector,
  emptyArray,
  createSection,
  magicModuleHeader,
  moduleVersion,
  encodeString,
  Valtype,
  Section,
  ExportType,
  codeFromProc,
} from '@core/emitter.exports'

export const emitter: IEmitter = (ast: TTransformer) => {
  const printFunctionType = [functionType, ...encodeVector([Valtype.f32]), emptyArray]

  const funcTypes = ast.map((proc) => [
    functionType,
    ...encodeVector(proc.args.map((_) => Valtype.f32)),
    emptyArray,
  ])

  const typeSection = createSection(Section.type, encodeVector([printFunctionType, ...funcTypes]))

  const funcSection = createSection(Section.func, encodeVector(ast.map((_, index) => index + 1)))

  const printFunctionImport = [
    ...encodeString('env'),
    ...encodeString('print'),
    ExportType.func,
    0x00, // type index
  ]

  const memoryImport = [
    ...encodeString('env'),
    ...encodeString('memory'),
    ExportType.mem,
    // limits https://webassembly.github.io/spec/core/binary/types.html#limits -
    0x00,
    0x01,
  ]

  const importSection = createSection(
    Section.import,
    encodeVector([printFunctionImport, memoryImport])
  )

  const exportSection = createSection(
    Section.export,
    encodeVector([
      [...encodeString('run'), ExportType.func, ast.findIndex((a) => a.name === 'main') + 1],
    ])
  )

  const codeSection = createSection(
    Section.code,
    encodeVector(ast.map((a) => codeFromProc(a, ast)))
  )

  return Uint8Array.from([
    ...magicModuleHeader,
    ...moduleVersion,
    ...typeSection,
    ...importSection,
    ...funcSection,
    ...exportSection,
    ...codeSection,
  ])
}
