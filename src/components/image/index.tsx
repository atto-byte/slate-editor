import * as React from 'react'
import { IconButton } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import { BlockPlugin, MarkButtonProps } from '../editor/types';
import ImageModal from './ImageModal';
import isUrl from 'is-url'

import { EventHook, getEventTransfer } from 'slate-react';
import { insertImage, isImage } from './ImageUtils';
import ImageNode from './ImageNode';


const type = 'image'
export type ImageData = {
  src: string,
  openExternal: boolean,
  title: string
}
const ImageButton: React.SFC<MarkButtonProps> = ({editor}) => {
  const [open, setOpen] = React.useState(false);
  return(
    <>
      <ImageModal editor={editor} open={open} handleClose={() => setOpen(false)}/>
      <IconButton
        onMouseDown={() => setOpen(true)}
      >
        <Image />
      </IconButton>
    </>
  )
}

const onDropOrPaste: EventHook = (event, editor, next) => {
  const target = (editor as any).findEventRange(event)
  if (!target && event.type === 'drop') return next()

  const transfer: any = getEventTransfer(event)
  const { type, text, files } = transfer

  if (type === 'files') {
    for (const file of files) {
      const reader = new FileReader()
      const [mime] = file.type.split('/')
      if (mime !== 'image') continue

      reader.addEventListener('load', () => {
        (editor as any).command(insertImage, reader.result, target)
      })

      reader.readAsDataURL(file)
    }
    return
  }

  if (type === 'text') {
    if (!isUrl(text)) return next()
    if (!isImage(text)) return next()
    (editor as any).command(insertImage, text, target)
    return
  }

  next()
}

const ImagePlugin: BlockPlugin = {
  type,
  Button: ImageButton,
  onDrop: onDropOrPaste,
  onPaste: onDropOrPaste,
  render: (props, editor, next) => <ImageNode {...props} editor={editor}/>
}






export { ImagePlugin }