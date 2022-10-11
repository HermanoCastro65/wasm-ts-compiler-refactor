import { IProgram } from '@models/parser.exports'
import { ITraverse } from '@models/traverser.export'

export const traverse: ITraverse = (nodes, visitor) => {
  nodes = Array.isArray(nodes) ? nodes : [nodes]
  nodes.forEach((node) => {
    Object.keys(node).forEach((prop) => {
      const value = node[prop as keyof IProgram]
      const valueAsArray: any[] = Array.isArray(value) ? value : [value]
      valueAsArray.forEach((childNode: any) => {
        if (typeof childNode.type === 'string') {
          traverse(childNode, visitor)
        }
      })
    })
    visitor(node)
  })
}
