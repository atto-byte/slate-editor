import * as React from 'react'
import { IconButton } from '@material-ui/core';
import { FormatStrikethrough } from '@material-ui/icons';
import { MarkPlugin, MarkButtonProps } from '../editor/types';


const type = 'strikethrough'
const StrikethroughButton: React.SFC<MarkButtonProps> = ({hasMark, editor}) => {
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
      <FormatStrikethrough />
    </IconButton>
  )
}
const StrikethroughPlugin: MarkPlugin = {
  type,
  Button: StrikethroughButton,
  render: ({ children, mark, attributes }) => <del {...attributes}>{children}</del>
}
export { StrikethroughButton, StrikethroughPlugin }