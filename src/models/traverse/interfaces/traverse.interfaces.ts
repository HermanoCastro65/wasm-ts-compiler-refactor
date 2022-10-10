import { IProgram } from '../../parser/interfaces.exports'

interface IVisitor {
  (node: IProgram): void
}

export interface ITraverse {
  (nodes: IProgram[] | IProgram, visitor: IVisitor): void
}
