import * as React from 'react'
import { IconButton } from '@material-ui/core';
import { FormatUnderlined } from '@material-ui/icons';
import { MarkPlugin, MarkButtonProps } from '../editor';


const type = 'underline'
const UnderlineButton: React.SFC<MarkButtonProps> = ({hasMark, editor}) => {
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
      <FormatUnderlined />
    </IconButton>
  )
}
const UnderlinePlugin: MarkPlugin = {
  type,
  Button: UnderlineButton,
  render: ({ children, mark, attributes }) => <u {...attributes}>{children}</u>
}
export { UnderlineButton, UnderlinePlugin }