import {
  ICall,
  IIf,
  IPrint,
  IProc,
  IVariableAssignment,
  IVariableDeclaration,
  IWhile,
} from '../interfaces.exports'

export type TStatement =
  | ICall
  | IIf
  | IPrint
  | IProc
  | IVariableAssignment
  | IVariableDeclaration
  | IWhile
