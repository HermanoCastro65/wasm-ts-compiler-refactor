import { Opcodes } from '../enums/enuns.exports'

// eslint-disable-next-line prefer-spread
export const flatten = (arr: any[]) => [].concat.apply([], arr)

export const binaryOpcode = {
  '+': Opcodes.f32_add,
  '-': Opcodes.f32_sub,
  '*': Opcodes.f32_mul,
  '/': Opcodes.f32_div,
  '==': Opcodes.f32_eq,
  '>': Opcodes.f32_gt,
  '<': Opcodes.f32_lt,
  '&&': Opcodes.i32_and,
}

// http://webassembly.github.io/spec/core/binary/types.html#function-types
export const functionType = 0x60

export const emptyArray = 0x0

// https://webassembly.github.io/spec/core/binary/modules.html#binary-module
export const magicModuleHeader = [0x00, 0x61, 0x73, 0x6d]
export const moduleVersion = [0x01, 0x00, 0x00, 0x00]
