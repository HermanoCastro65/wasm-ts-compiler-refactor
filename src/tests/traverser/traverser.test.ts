import { traverse } from '@core/traverse.export'
import { IVisitor } from '@models/traverser.export'

test('traverses post order - visiting leaves first', () => {
  const ast = {
    type: 'foo',
    bar: {
      type: 'baz',
    },
  }

  const visited: string[] = []
  const visitor: IVisitor = (node) => visited.push(node.type)
  traverse(ast, visitor)

  expect(visited).toEqual(['baz', 'foo'])
})

test('traverses array properties', () => {
  const ast = {
    type: 'foo',
    bar: [
      {
        type: 'baz',
      },
      {
        type: 'bar',
      },
    ],
  }

  const visited: string[] = []
  const visitor: IVisitor = (node) => visited.push(node.type)
  traverse(ast, visitor)

  expect(visited).toEqual(['baz', 'bar', 'foo'])
})

test('traverses array root', () => {
  const ast = [
    {
      type: 'baz',
    },
    {
      type: 'bar',
    },
  ]

  const visited: string[] = []
  const visitor: IVisitor = (node) => visited.push(node.type)
  traverse(ast, visitor)

  expect(visited).toEqual(['baz', 'bar'])
})
