import {
  Opcodes,
  ieee754,
  unsignedLEB128,
  Blocktype,
  signedLEB128,
  encodeLocal,
  Valtype,
  encodeVector,
} from '@core/emitter.exports'
import { traverse } from '@core/traverse.export'
import { IProgram } from '@models/parser.exports'
import { TExpression, TOperator } from '@parser-types/expression.exports'
import { IProc, TStatement } from '@parser-types/statement.exports'
import { TTransformer } from '@models/transformer.exports'
import binaryOpcode from '@core/emitter/constants/binary'

export const codeFromProc = (node: IProc, program: TTransformer) => {
  const code: number[] = []

  const symbols = new Map<string, number>(node.args.map((arg, index) => [arg.value, index]))

  const localIndexForSymbol = (name: string) => {
    if (!symbols.has(name)) {
      symbols.set(name, symbols.size)
    }
    return symbols.get(name)
  }

  const emitExpression = (node: TExpression) =>
    traverse(node as IProgram, (node) => {
      switch (node.type) {
        case 'numberLiteral':
          code.push(Opcodes.f32_const)
          code.push(...(ieee754(node.value as unknown as number) as unknown as [number]))
          break
        case 'identifier':
          code.push(Opcodes.get_local)
          code.push(
            ...unsignedLEB128(localIndexForSymbol(node.value as unknown as string) as number)
          )
          break
        case 'binaryExpression':
          code.push(binaryOpcode[node.operator as TOperator])
          break
      }
    })

  const emitStatements = (statements: TStatement[]) =>
    statements.forEach((statement) => {
      switch (statement.type) {
        case 'printStatement':
          emitExpression(statement.expression)
          code.push(Opcodes.call)
          code.push(...unsignedLEB128(0))
          break
        case 'variableDeclaration':
          emitExpression(statement.initializer)
          code.push(Opcodes.set_local)
          code.push(...unsignedLEB128(localIndexForSymbol(statement.name) as number))
          break
        case 'variableAssignment':
          emitExpression(statement.value)
          code.push(Opcodes.set_local)
          code.push(...unsignedLEB128(localIndexForSymbol(statement.name) as number))
          break
        case 'whileStatement':
          code.push(Opcodes.block)
          code.push(Blocktype.void)
          code.push(Opcodes.loop)
          code.push(Blocktype.void)
          emitExpression(statement.expression)
          code.push(Opcodes.i32_eqz)
          code.push(Opcodes.br_if)
          code.push(...signedLEB128(1))
          emitStatements(statement.statements)
          code.push(Opcodes.br)
          code.push(...signedLEB128(0))
          code.push(Opcodes.end)
          code.push(Opcodes.end)
          break
        case 'ifStatement':
          code.push(Opcodes.block)
          code.push(Blocktype.void)
          emitExpression(statement.expression)
          code.push(Opcodes.i32_eqz)
          code.push(Opcodes.br_if)
          code.push(...signedLEB128(0))
          emitStatements(statement.consequent)
          code.push(Opcodes.end)
          code.push(Opcodes.block)
          code.push(Blocktype.void)
          emitExpression(statement.expression)
          code.push(Opcodes.i32_const)
          code.push(...signedLEB128(1))
          code.push(Opcodes.i32_eq)
          code.push(Opcodes.br_if)
          code.push(...signedLEB128(0))
          emitStatements(statement.alternate)
          code.push(Opcodes.end)
          break
        case 'callStatement':
          if (statement.name === 'setpixel') {
            emitExpression(statement.args[0])
            code.push(Opcodes.set_local)
            code.push(...unsignedLEB128(localIndexForSymbol('x') as number))

            emitExpression(statement.args[1])
            code.push(Opcodes.set_local)
            code.push(...unsignedLEB128(localIndexForSymbol('y') as number))

            emitExpression(statement.args[2])
            code.push(Opcodes.set_local)
            code.push(...unsignedLEB128(localIndexForSymbol('color') as number))

            code.push(Opcodes.get_local)
            code.push(...unsignedLEB128(localIndexForSymbol('y') as number))
            code.push(Opcodes.f32_const)
            code.push(...(ieee754(100) as unknown as [number]))
            code.push(Opcodes.f32_mul)

            code.push(Opcodes.get_local)
            code.push(...unsignedLEB128(localIndexForSymbol('x') as number))
            code.push(Opcodes.f32_add)

            code.push(Opcodes.i32_trunc_f32_s)

            code.push(Opcodes.get_local)
            code.push(...unsignedLEB128(localIndexForSymbol('color') as number))
            code.push(Opcodes.i32_trunc_f32_s)

            code.push(Opcodes.i32_store_8)
            code.push(...[0x00, 0x00])
          } else {
            statement.args.forEach((arg) => {
              emitExpression(arg)
            })
            const index = program.findIndex((f) => f.name === statement.name)
            code.push(Opcodes.call)
            code.push(...unsignedLEB128(index + 1))
          }
          break
      }
    })

  emitStatements(node.statements)

  const localCount = symbols.size
  const locals = localCount > 0 ? [encodeLocal(localCount, Valtype.f32)] : []

  return encodeVector([...encodeVector(locals), ...code, Opcodes.end])
}
