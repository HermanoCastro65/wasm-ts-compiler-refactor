import { IProgram } from '@models/parser.exports'

export interface IVisitor {
  (node: IProgram): void
}

export interface ITraverse {
  (nodes: IProgram[] | IProgram, visitor: IVisitor): void
}
