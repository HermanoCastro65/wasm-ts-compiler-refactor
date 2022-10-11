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

// https://webassembly.github.io/spec/core/binary/instructions.html
export enum Opcodes {
  block = 0x02,
  loop = 0x03,
  br = 0x0c,
  br_if = 0x0d,
  end = 0x0b,
  call = 0x10,
  get_local = 0x20,
  set_local = 0x21,
  i32_store_8 = 0x3a,
  i32_const = 0x41,
  f32_const = 0x43,
  i32_eqz = 0x45,
  i32_eq = 0x46,
  f32_eq = 0x5b,
  f32_lt = 0x5d,
  f32_gt = 0x5e,
  i32_and = 0x71,
  f32_add = 0x92,
  f32_sub = 0x93,
  f32_mul = 0x94,
  f32_div = 0x95,
  i32_trunc_f32_s = 0xa8,
}

// http://webassembly.github.io/spec/core/binary/modules.html#export-section
export enum ExportType {
  func = 0x00,
  table = 0x01,
  mem = 0x02,
  global = 0x03,
}
