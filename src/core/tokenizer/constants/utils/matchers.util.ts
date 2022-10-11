import { IMatcher } from '../../../../models/tokenizer/interfaces/matcher.interface'
import { TToken } from '../../../../models/tokenizer/token.exports'
import { keywords, operators } from '../tokenizer.constants'

const escapeRegEx = (text: string) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')

const regexMatcher =
  (regex: string, type: TToken): IMatcher =>
  (input, index) => {
    const match = input.substring(index).match(regex)
    return (
      match && {
        type,
        value: match[0],
      }
    )
  }

export const matchers = [
  regexMatcher('^-?[.0-9]+([eE]-?[0-9]{2})?', 'number'),
  regexMatcher(`^(${keywords.join('|')})`, 'keyword'),
  regexMatcher('^\\s+', 'whitespace'),
  regexMatcher(`^(${operators.map(escapeRegEx).join('|')})`, 'operator'),
  regexMatcher(`^[a-zA-Z]+`, 'identifier'),
  regexMatcher(`^=`, 'assignment'),
  regexMatcher('^[()]{1}', 'parens'),
]
