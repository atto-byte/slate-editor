import * as React from 'react'
import { IconButton } from '@material-ui/core';
import { FormatBold } from '@material-ui/icons';
import { MarkPlugin, MarkButtonProps } from '../editor/types';


const type = 'bold'
const BoldButton: React.SFC<MarkButtonProps> = ({hasMark, editor}) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    editor.toggleMark(type)
  }
  const isActive = hasMark(type)
  return(
    <IconButton
      focusRipple={isActive}
      onMouseDown={handleClick}
    >
      <FormatBold />
    </IconButton>
  )
}
const BoldPlugin: MarkPlugin = {
  type,
  Button: BoldButton,
  render: ({ children, mark, attributes }) => <strong {...attributes}>{children}</strong>
}
export { BoldButton, BoldPlugin }