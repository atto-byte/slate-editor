import * as React from 'react'
import { Block, Inline } from 'slate';
import { RenderAttributes, getEventRange } from 'slate-react';
import { css } from 'emotion';
import { PopUp } from '../components';
import { FormatAlignCenter, FormatAlignLeft, FormatAlignRight } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Editor as CoreEditor } from 'slate';

interface NodeProps  {
  node: Block | Inline;
  attributes: RenderAttributes;
  isFocused: boolean;
  editor: CoreEditor;
}
const ImageNode = React.forwardRef<HTMLImageElement, NodeProps>(
  ({ node, attributes, isFocused, editor }, ref) => {
    const src = node.data.get('src')
    const align = node.data.get("align") || 'center';
    const handleData = (newAlign: 'center' | 'left' | 'right') => {
      editor.setNodeByKey(node.key, {
        type: 'image',
        data: {
          src: src,
          align: newAlign
        }
      })
    }
    const genAlign = () => {
      if(align === 'right'){
        return(`
        margin-left: auto;
        margin-right: 10px;
        `)
      } else if( align === 'left'){
        return(`
        margin-left: 10px;
        margin-right: auto;
        `)
      } else {
        return(`
        margin-left: auto;
        margin-right: auto;
        `)
      }
    }
    const [anchorEl, setAnchorEl] = React.useState()
    console.log()
      return (
        <div
          onMouseEnter={(e) => setAnchorEl(e.target)}
          onMouseLeave={(e) => setAnchorEl(null)}
        >
          <PopUp anchorEl={anchorEl}>
            <IconButton onClick={() => handleData('left')}>
              <FormatAlignLeft/>
            </IconButton>
            <IconButton onClick={() => handleData('center')}>
              <FormatAlignCenter/>
            </IconButton>
            <IconButton onClick={() => handleData('right')}>
              <FormatAlignRight/>
            </IconButton>
          </PopUp>
          <img
            {...attributes}
            src={src}
            
            ref={ref}
            className={css`
              display: block;
              max-width: 100%;
              cursor: pointer;
              max-height: 20em;
              ${genAlign()}
              box-shadow: ${isFocused ? '0 0 0 2px blue;' : 'none'};
            `}
          />
        </div>
      )
  }
)


export default ImageNode
