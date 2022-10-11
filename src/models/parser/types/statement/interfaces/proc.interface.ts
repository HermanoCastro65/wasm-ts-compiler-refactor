import { IProgram } from '@models/parser.exports'
import { IIdentifier } from '@parser-types/expression.exports'
import { TStatement } from '@parser-types/statement.exports'

export interface IProc extends IProgram {
  type: 'procStatement'
  name: string
  args: IIdentifier[]
  statements: TStatement[]
}
