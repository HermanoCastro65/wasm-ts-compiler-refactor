import { TProgram } from '@models/parser.exports'
import { IProc } from '@parser-types/statement.exports'
import { ITransformer } from '@models/transformer.exports'

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
