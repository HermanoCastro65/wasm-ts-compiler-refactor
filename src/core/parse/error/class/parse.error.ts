import { IToken } from '@models/tokenizer.exports'

export class ParserError extends Error {
  token: IToken
  constructor(message: string, token: IToken) {
    super(message)
    this.token = token
  }
}
