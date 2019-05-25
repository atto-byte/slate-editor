import * as React from 'react'
import { IconButton } from '@material-ui/core';
import { FormatItalic } from '@material-ui/icons';
import { MarkPlugin, MarkButtonProps } from '../editor';


const type = 'italic'
const ItalicButton: React.SFC<MarkButtonProps> = ({hasMark, editor}) => {
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
      <FormatItalic />
    </IconButton>
  )
}
const ItalicPlugin: MarkPlugin = {
  type,
  Button: ItalicButton,
  render: ({ children, mark, attributes }) => <i {...attributes}>{children}</i>
}
export { ItalicButton, ItalicPlugin }