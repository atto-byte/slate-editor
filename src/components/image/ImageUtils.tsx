import { Editor as SlateReact, EventHook } from 'slate-react'
import { ImageData }  from '.'
import { Range } from 'slate';
import imageExtensions from 'image-extensions'


export const insertImage = (editor: SlateReact, src: string, target?: Range) =>  {
  if (target) {
    editor.select(target)
  }

  editor.insertBlock({
    type: 'image',
    data: { src },
  })
}


export const updateInlineImage = (
  editor: SlateReact,
  data: ImageData
  ) => {
  return editor.setBlocks({
        type: 'image',
        data: { ...data}
      })
}

export const deleteInlineImage = (editor: SlateReact) => {
  return editor.deleteBackward(1)
}


/**
 * A function to determine whether a URL has an image extension.
 *
 * @param {String} url
 * @return {Boolean}
 */

export function isImage(url: string) {
  return imageExtensions.includes(getExtension(url))
}

/**
 * Get the extension of the URL, using the URL API.
 *
 * @param {String} url
 * @return {String}
 */

export function getExtension(url: string) {
  return new URL(url).pathname.split('.').pop() || ''
}