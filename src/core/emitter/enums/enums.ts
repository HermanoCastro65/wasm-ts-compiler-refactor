// https://webassembly.github.io/spec/core/binary/modules.html#sections
export enum Section {
  custom = 0,
  type = 1,
  import = 2,
  func = 3,
  table = 4,
  memory = 5,
  global = 6,
  export = 7,
  start = 8,
  element = 9,
  code = 10,
  data = 11,
}

// https://webassembly.github.io/spec/core/binary/types.html
export enum Valtype {
  i32 = 0x7f,
  f32 = 0x7d,
}

// https://webassembly.github.io/spec/core/binary/types.html#binary-blocktype
export enum Blocktype {
  void = 0x40,
}

// http://webassembly.github.io/spec/core/binary/modules.html#export-section
export enum ExportType {
  func = 0x00,
  table = 0x01,
  mem = 0x02,
  global = 0x03,
}
