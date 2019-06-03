import * as React from 'react'
import { IconButton } from '@material-ui/core';
import { FormatAlignRight, FormatAlignCenter, FormatAlignLeft } from '@material-ui/icons';
import { BlockPlugin, MarkButtonProps } from '../editor/types';
import AlignmentNode from './AlignmentNode';
import { Menu } from '../components';


const type = 'align'
const AlignLeftButton: React.SFC<MarkButtonProps> = ({hasMark, editor}) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    editor.setBlocks({
      type,
      data: { align: 'right', currentBlockType: editor.value.blocks.first().type }
    })
    .focus()
  }
  const isActive = hasMark(type)
  return(
    <IconButton
      focusRipple={isActive}
      onMouseDown={handleClick}
    >
      <FormatAlignRight />
    </IconButton>
  )
}
const AlignButtons: React.SFC<MarkButtonProps> = ({hasMark, editor}) => {
  const handleClick = (event: React.MouseEvent, align: 'center' | 'right' | 'left') => {
    event.preventDefault()
    editor.setBlocks({
      type,
      data: { align: align, currentBlockType: editor.value.blocks.first().type }
    })
    .focus()
  }
  const isActive = hasMark(type)
  return(
    <Menu>
      <IconButton
        focusRipple={isActive}
        onMouseDown={(e) => handleClick(e, 'left')}
      >
      <FormatAlignLeft />
      </IconButton>
      <IconButton
        focusRipple={isActive}
        onMouseDown={(e) => handleClick(e, 'center')}
      >
      <FormatAlignCenter />
      </IconButton>
      <IconButton
        focusRipple={isActive}
        onMouseDown={(e) => handleClick(e, 'right')}
      >
      <FormatAlignRight />
      </IconButton>
    </Menu>
  )
}
const AlignLeftPlugin: BlockPlugin = {
  type,
  Button: AlignLeftButton,
  render: ({ children, node, attributes }) => <AlignmentNode node={node} {...attributes}>{children}</AlignmentNode>
}

const AlignPlugin: BlockPlugin = {
  type,
  Button: AlignButtons,
  render: ({ children, node, attributes }) => <AlignmentNode node={node} {...attributes}>{children}</AlignmentNode>
}

export { AlignLeftButton, AlignLeftPlugin, AlignPlugin }