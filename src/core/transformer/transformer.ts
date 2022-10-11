import { TProgram } from '../../models/parser/program.exports'
import { IProc } from '../../models/parser/types/statement/interfaces.exports'
import { ITransformer } from '../../models/transformer/transformer.exports'

export const transformer: ITransformer = (ast: TProgram) => {
  if (!ast.find((a) => a.type === 'procStatement' && a.name === 'main')) {
    const freeStatements = ast.filter((a) => a.type !== 'procStatement')
    const mainProc: IProc = {
      type: 'procStatement',
      name: 'main',
      args: [],
      statements: freeStatements,
    }

    ast = [mainProc, ...ast.filter((a) => a.type === 'procStatement')]
  }

  return ast.map((a) => a as IProc)
}
