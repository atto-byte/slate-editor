import * as React from 'react'
import { MenuItem, Select } from '@material-ui/core';
import { MarkPlugin, MarkButtonProps } from '../editor';
import FontFamilyList from './FontFamilyList'

const type = 'font-family'

import { fontFamilyMarkStrategy, hasMark, getMark } from './FontFamilyUtils'

const FontFamilyDropdown: React.SFC<MarkButtonProps> = ({ editor }) => {
  let fontFamilyDefault = 0
  if (editor && hasMark(editor.value)) {
    fontFamilyDefault = getMark(editor.value).data.get('fontFamilyIndex')
  }
  return (
    <Select
      onChange={({ target: { value } }) => {
        fontFamilyMarkStrategy(editor, value as number )
      }}
      value={fontFamilyDefault}
    >
      {FontFamilyList.map((font, index) => (
        <MenuItem  key={`slate-font-family-${index}`} value={index}>
          {font.name}
        </MenuItem >
      ))}
    </Select>
  )
}



const FontFamilyPlugin: MarkPlugin = {
  type,
  Button: FontFamilyDropdown,
  render: ({ children, mark, attributes }) => (
    <span style={{ fontFamily: FontFamilyList[mark.data.get('fontFamilyIndex')].name }}>
      {children}
    </span>
  )
}
export { FontFamilyDropdown, FontFamilyPlugin }