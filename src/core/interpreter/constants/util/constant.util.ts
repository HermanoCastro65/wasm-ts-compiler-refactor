export const applyOperator = (operator: string, left: number, right: number) => {
  switch (operator) {
    case '+':
      return left + right
    case '-':
      return left - right
    case '*':
      return left * right
    case '/':
      return left / right
    case '==':
      return left == right ? 1 : 0
    case '>':
      return left > right ? 1 : 0
    case '<':
      return left < right ? 1 : 0
    case '&&':
      return left && right
  }
  throw Error(`Unknown binary operator ${operator}`)
}
