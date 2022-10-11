import { flatten } from '../../constants.exports'
import { IProc } from '../../../../models/parser/types/statement/interfaces.exports'
import { TTransformer } from '../../../../models/transformer/type.export'
import { unsignedLEB128 } from '../../encode.exports'
import { Section, Valtype } from '../../enuns.exports'

// https://webassembly.github.io/spec/core/binary/conventions.html#binary-vec
export const encodeVector = (data: any[]) => [...unsignedLEB128(data.length), ...flatten(data)]

// https://webassembly.github.io/spec/core/binary/modules.html#code-section
export const encodeLocal = (count: number, type: Valtype) => [...unsignedLEB128(count), type]

// https://webassembly.github.io/spec/core/binary/modules.html#sections
export const createSection = (sectionType: Section, data: any[]) => [
  sectionType,
  ...encodeVector(data),
]

export const codeFromProc = (node: IProc, program: TTransformer) => {
  const code: number[] = []

  const symbols = new Map<string, number>(node.args.map((arg, index) => [arg.value, index]))

  const localIndexForSymbol = (name: string) => {
    if (!symbols.has(name)) {
      symbols.set(name, symbols.size)
    }
    return symbols.get(name)
  }
}
