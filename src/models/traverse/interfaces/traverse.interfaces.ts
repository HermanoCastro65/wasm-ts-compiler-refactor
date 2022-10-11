import { TProgram } from '../../parser/program.exports'

interface IVisitor {
  (node: TProgram): void
}

export interface ITraverse {
  (nodes: TProgram[] | TProgram, visitor: IVisitor): void
}
