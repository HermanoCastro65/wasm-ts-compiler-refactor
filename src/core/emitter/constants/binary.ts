import { Opcodes } from '@core/emitter.exports'

const binaryOpcode = {
  '+': Opcodes.f32_add,
  '-': Opcodes.f32_sub,
  '*': Opcodes.f32_mul,
  '/': Opcodes.f32_div,
  '==': Opcodes.f32_eq,
  '>': Opcodes.f32_gt,
  '<': Opcodes.f32_lt,
  '&&': Opcodes.i32_and,
}

export default binaryOpcode
