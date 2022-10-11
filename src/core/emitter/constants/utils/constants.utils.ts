import { unsignedLEB128, Valtype, Section, flatten } from '@core/emitter.exports'

// https://webassembly.github.io/spec/core/binary/conventions.html#binary-vec
export const encodeVector = (data: any[]) => [...unsignedLEB128(data.length), ...flatten(data)]

// https://webassembly.github.io/spec/core/binary/modules.html#code-section
export const encodeLocal = (count: number, type: Valtype) => [...unsignedLEB128(count), type]

// https://webassembly.github.io/spec/core/binary/modules.html#sections
export const createSection = (sectionType: Section, data: any[]) => [
  sectionType,
  ...encodeVector(data),
]
