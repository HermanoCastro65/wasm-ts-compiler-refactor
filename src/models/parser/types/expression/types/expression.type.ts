import { IBinary } from '../interfaces/binary.interface'
import { IIdentifier } from '../interfaces/identifier.interface'
import { INumber } from '../interfaces/number.interface'

export type TExpression = INumber | IBinary | IIdentifier
