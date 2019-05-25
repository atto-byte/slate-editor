import * as React from 'react'
import { Block } from 'slate';

interface NodeProps {
  node: Block
}
const AlignmentNode = React.forwardRef<{}, NodeProps>(
  ({ children, node }, ref) => {
    let Element = 'div'
    if (node.data.get('currentBlockType') === 'grid-cell') Element = 'td'

    return (
      <Element style={{ textAlign: `${node.data.get('align')}` }} ref={ref}>
        {children}
      </Element>
    )
  }
)

export default AlignmentNode
