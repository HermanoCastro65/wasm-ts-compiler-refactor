export const locationForIndex = (input: string, index: number) => ({
  char: index - input.lastIndexOf('\n', index) - 1,
  line: input.substring(0, index).split('\n').length - 1,
})
