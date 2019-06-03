import * as React from 'react'
import { Block, Inline } from 'slate';

interface NodeProps {
  node: Block | Inline
}
const AlignmentNode = React.forwardRef<any, any>(
  ({ children, node }, ref) => {
    let Element: React.ElementType = 'div'
    if (node.data.get('currentBlockType') === 'grid-cell') Element = 'td'

    return (
      <Element style={{ textAlign: `${node.data.get('align')}` as any }} ref={ref as any}>
        {children}
      </Element>
    )
  }
)

export default AlignmentNode
