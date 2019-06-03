import { EventHook, Editor as SlateReact } from 'slate-react'
import { Value, Mark, Node, Block , Editor as CoreEditor} from 'slate'

import * as React from 'react'
import initialValue from './value.json'
import { isKeyHotkey } from 'is-hotkey'
import { Button, Icon, Toolbar } from '../components'
import { MarkPlugin, MarkButtonProps, BlockPlugin } from './types';

const DEFAULT_NODE = 'paragraph'


const isBoldHotkey = isKeyHotkey('mod+b')
const isItalicHotkey = isKeyHotkey('mod+i')
const isUnderlinedHotkey = isKeyHotkey('mod+u')
const isCodeHotkey = isKeyHotkey('mod+`')


interface EditorProps {
  markPlugins: MarkPlugin[];
  blockPlugins: BlockPlugin[];
}
const Editor: React.SFC<EditorProps> = ({markPlugins, blockPlugins}) =>  {
  const [value, setValue] = React.useState(Value.fromJSON(initialValue))
  const editor = React.useRef<SlateReact>(null)
  const hasMark = (type: string): boolean => {
    return value.activeMarks.some((mark: Mark) => mark.type === type)
  }


  const hasBlock = (type: string): boolean => {
    return value.blocks.some((node: Block) => node.type === type)
  }

  const renderBlock = (props: any, editor: CoreEditor, next: () => void): void | JSX.Element => {
    const plugin = blockPlugins.find( plugin => (plugin.type === props.node.type)) 
    if(plugin){
      return plugin.render(props, editor, next)
    } else {
      return next()
    }
  }

  const renderMark = (props: any, editor: CoreEditor, next: () => void): void | JSX.Element => {
    const plugin = markPlugins.find( plugin => (plugin.type === props.mark.type)) 
    if(plugin){
      return plugin.render(props, editor, next)
    } else {
      return next()
    }
  
  }
  const onPaste: EventHook = (event, editor, next) => {
    blockPlugins.forEach(plugin => {
      if(plugin.onPaste) plugin.onPaste(event, editor, next)
    });
  }
  const onDrop: EventHook = (event, editor, next) => {
    blockPlugins.forEach(plugin => {
      if(plugin.onDrop) plugin.onDrop(event, editor, next)
    });
  }
  const onChange = (editor: SlateReact) => {
    setValue(editor.value)
  }


  const onKeyDown: EventHook = (event: any, editor, next) => {
    let mark

    if (isBoldHotkey(event)) {
      mark = 'bold'
    } else if (isItalicHotkey(event)) {
      mark = 'italic'
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined'
    } else if (isCodeHotkey(event)) {
      mark = 'code'
    } else {
      return next()
    }

    event.preventDefault()
    editor.toggleMark(mark)
  }


  const onClickMark = (event: React.MouseEvent, type: string) => {
    event.preventDefault()
    editor.current && editor.current.toggleMark(type)
  }


  const onClickBlock = (event: React.MouseEvent, type: string) => {
    event.preventDefault()
    const { document } = value

    // Handle everything but list buttons.
    if (type !== 'bulleted-list' && type !== 'numbered-list') {
      const isActive = hasBlock(type)
      const isList = hasBlock('list-item')

      if (isList) {
        editor.current && editor.current
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else {
        editor.current && editor.current.setBlocks(isActive ? DEFAULT_NODE : type)
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = hasBlock('list-item')
      const isType = value.blocks.some((block: Block) => {
        return !!document.getClosest(block.key, (parent: any) => parent.type === type)
      })

      if (isList && isType) {
        editor.current && editor.current
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else if (isList) {
        editor.current && editor.current
          .unwrapBlock(
            type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type)
      } else {
        editor.current && editor.current.setBlocks('list-item').wrapBlock(type)
      }
    }
  }
  return (
    <div>
      <Toolbar>
        {markPlugins.map(plugin => (
          <plugin.Button editor={editor.current && editor.current} hasMark={hasMark}/>
        ))}
        {blockPlugins.map(plugin => (
          <plugin.Button editor={editor.current && editor.current} hasMark={hasBlock}/>
        ))}
      </Toolbar>
      <SlateReact
        spellCheck
        autoFocus
        placeholder="Enter some rich text..."
        ref={editor}
        value={value}
        onDrop={onDrop}
        onPaste={onPaste}
        onChange={onChange as any}
        onKeyDown={onKeyDown}
        renderBlock={renderBlock}
        renderMark={renderMark as any}
      />
    </div>
  )
}

/**
 * Export.
 */
// {renderMarkButton('italic', 'format_italic')}
// {renderMarkButton('underlined', 'format_underlined')}
// {renderMarkButton('code', 'code')}
// {renderBlockButton('heading-one', 'looks_one')}
// {renderBlockButton('heading-two', 'looks_two')}
// {renderBlockButton('block-quote', 'format_quote')}
// {renderBlockButton('numbered-list', 'format_list_numbered')}
// {renderBlockButton('bulleted-list', 'format_list_bulleted')}
export default Editor