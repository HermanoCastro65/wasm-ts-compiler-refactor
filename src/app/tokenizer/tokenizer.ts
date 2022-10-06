import { ITokenizer } from '../../models/tokenizer/interfaces/tokenizer.interface'
import { IToken } from '../../models/tokenizer/token.exports'
import { TokenizerError } from './class/tokenizer.class'
import { matchers, locationForIndex } from './constants/constants.exports'

export const tokenize: ITokenizer = (input) => {
  const tokens: IToken[] = []
  let index = 0
  while (index < input.length) {
    const matches = matchers.map((m) => m(input, index)).filter((f) => f)
    if (matches.length > 0) {
      // take the highest priority match
      const match = matches[0]

      if (!match) throw Error
      if (match.type !== 'whitespace') {
        tokens.push({ ...match, ...locationForIndex(input, index) })
      }
      index += match.value.length
    } else {
      throw new TokenizerError(`Unexpected token ${input.substring(index, index + 1)}`, index)
    }
  }
  return tokens
}
