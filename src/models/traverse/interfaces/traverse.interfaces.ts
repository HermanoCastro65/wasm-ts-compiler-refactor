import { IProgram } from '../../parser/program.exports'

interface IVisitor {
  (node: IProgram): void
}

export interface ITraverse {
  (nodes: IProgram[] | IProgram, visitor: IVisitor): void
}
