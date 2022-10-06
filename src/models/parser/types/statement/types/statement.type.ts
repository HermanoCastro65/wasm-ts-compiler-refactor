import { ICall } from '../interfaces/call.interface'
import { IIf } from '../interfaces/if.interface'
import { IPrint } from '../interfaces/print.interface'
import { IProc } from '../interfaces/proc.interface'
import { IVariableAssignment, IVariableDeclaration } from '../interfaces/variable.interfaces'
import { IWhile } from '../interfaces/while.interface'

export type TStatement =
  | IPrint
  | IVariableDeclaration
  | IVariableAssignment
  | IWhile
  | ICall
  | IIf
  | IProc
