import { Value } from "slate";
import { Editor } from "slate-react";

export const hasMark = (value: Value) => value.marks.some(mark => mark.type === 'font-family')
export const getMark = (value: Value) => value.marks.filter(mark => mark.type === 'font-family').first()

export const createMark = fontFamilyIndex => ({
  type: 'font-family',
  data: { fontFamilyIndex },
})

export const reapplyMark = ({ editor, fontFamilyIndex }) => editor
  .removeMark(getMark(editor.value))
  .addMark(createMark(fontFamilyIndex))

export const applyMark = ({ editor, fontFamilyIndex }) => editor
  .addMark(createMark(fontFamilyIndex))

/**
 * Strategy that decides how font family mark plugin
 * needs to be applied.
 *
 * @param {Object} attributes
 *    @property {Value} value
 *    @property {int} fontFamilyIndex
 */
export const fontFamilyMarkStrategy = (editor: Editor, fontFamilyIndex: number ) => {
  const value = editor.value
  if (hasMark(value)) {
    if (value.selection.isExpanded) {
      return reapplyMark({editor, fontFamilyIndex})
    }
    else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/ mark exists')
  }

  else {
    if (value.selection.isExpanded) {
      return applyMark({editor, fontFamilyIndex})
    }
    else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/o mark')
  }
}

