import classnames from 'classnames';
//
// Nodes
//
import { AlignmentNode } from 'packages/slate-editor-alignment-plugin';
//
// Marks
//
import { BoldMark } from 'packages/slate-editor-bold-plugin';
import { ColorMark } from 'packages/slate-editor-color-plugin';
import { EmbedNode } from 'packages/slate-editor-embed-plugin';
import { FontFamilyMark } from 'packages/slate-editor-font-family-plugin';
import { FontSizeMark } from 'packages/slate-editor-font-size-plugin';
import { GridCellNode, GridNode, GridRowNode } from 'packages/slate-editor-grid-plugin';
import { ImageLinkNode, ImageNode } from 'packages/slate-editor-image-plugin';
import { ItalicMark } from 'packages/slate-editor-italic-plugin';
import { LinkNode } from 'packages/slate-editor-link-plugin';
import { ListItemNode, OrderedListNode, UnorderedListNode } from 'packages/slate-editor-list-plugin';
import { StrikethroughMark } from 'packages/slate-editor-strikethrough-plugin';
import { UnderlineMark } from 'packages/slate-editor-underline-plugin';
import * as React from 'react';
import { Editor } from 'slate-react';



/* eslint-disable default-case */
export const renderNode = props => {
  switch (props.node.type) {
    case 'alignment': return <AlignmentNode {...props} />
    case 'embed': return <EmbedNode {...props} />
    case 'grid': return <GridNode {...props} />
    case 'grid-row': return <GridRowNode {...props} />
    case 'grid-cell': return <GridCellNode {...props} />
    case 'image': return <ImageNode {...props} />
    case 'imageLink': return <ImageLinkNode {...props} />
    case 'link': return <LinkNode {...props} />
    case 'list-item': return <ListItemNode {...props} />
    case 'ordered-list': return <OrderedListNode {...props} />
    case 'unordered-list': return <UnorderedListNode {...props} />
  }
}

export const renderMark = props => {
  switch (props.mark.type) {
    case 'bold': return <BoldMark {...props} />
    case 'color': return <ColorMark {...props} />
    case 'font-family': return <FontFamilyMark {...props} />
    case 'font-size': return <FontSizeMark {...props} />
    case 'italic': return <ItalicMark {...props} />
    case 'strikethrough': return <StrikethroughMark {...props} />
    case 'underline': return <UnderlineMark {...props} />
  }
}
/* eslint-disable default-case */

export default ({
  className,
  wrapperStyle,
  style,
  value,
  outerState,
  plugins,
  onChange,
  children,
  ...rest
}) => {
  const { readOnly } = outerState

  return (
    <div className={classnames('editor--content', className)} style={wrapperStyle}>
      <Editor
        plugins={plugins}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        outerState={outerState}
        style={style}
        renderNode={renderNode}
        renderMark={renderMark}
        {...rest}
      />
      {children}
    </div>
  )
}
