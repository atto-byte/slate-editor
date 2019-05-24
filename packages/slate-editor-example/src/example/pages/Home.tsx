import { AlignmentButtonBar, AlignmentPlugin } from 'packages/slate-editor-alignment-plugin';
import { BoldButton, BoldPlugin } from 'packages/slate-editor-bold-plugin';
import { ColorButton, ColorPlugin, ColorStateModel } from 'packages/slate-editor-color-plugin';
import { EmbedButton, EmbedPlugin } from 'packages/slate-editor-embed-plugin';
import { FontFamilyDropdown, FontFamilyPlugin } from 'packages/slate-editor-font-family-plugin';
import { FontSizeInput, FontSizePlugin } from 'packages/slate-editor-font-size-plugin';
import { GridButtonBar, GridPlugin } from 'packages/slate-editor-grid-plugin';
import { ImageButton, ImagePlugin } from 'packages/slate-editor-image-plugin';
import { ItalicButton, ItalicPlugin } from 'packages/slate-editor-italic-plugin';
import { LinkButton, LinkPlugin } from 'packages/slate-editor-link-plugin';
import { ListButtonBar, ListPlugin } from 'packages/slate-editor-list-plugin';
import { StateLoggerButton } from 'packages/slate-editor-state-logger';
import { StrikethroughButton, StrikethroughPlugin } from 'packages/slate-editor-strikethrough-plugin';
import { ToggleReadOnlyButton } from 'packages/slate-editor-toggle-readonly';
import { UnderlineButton, UnderlinePlugin } from 'packages/slate-editor-underline-plugin';
import * as React from 'react';
import { SlateContent, SlateEditor, SlateToolbar } from 'slate-editor';
import './Home.css';


const fontSizePluginOptions = { initialFontSize: 16 }
const colorPluginOptions = new ColorStateModel().rgba({ r: 100, g: 100, b: 100, a: 1 }).gen()

const plugins = [
  AlignmentPlugin(),
  BoldPlugin(),
  ColorPlugin(),
  EmbedPlugin(),
  FontFamilyPlugin(),
  FontSizePlugin(fontSizePluginOptions),
  GridPlugin(),
  ImagePlugin(),
  ItalicPlugin(),
  LinkPlugin(),
  ListPlugin(),
  StrikethroughPlugin(),
  UnderlinePlugin()
]

const classNames = {
  button: 'btn btn-primary not-rounded border border-gray',
  dropdown: 'select col-3 inline-block mx1 not-rounded',
  input: 'input col-3 inline-block mr1',
  lastButton: 'btn btn-primary not-rounded border border-gray linebreak'
}
const styles = {
  button: {
    borderRight: '1px solid #fff'
  },
  dropdown: {
    position: 'relative',
    top: 1,
    backgroundColor: 'white',
    height: 38,
    paddingLeft: 20,
    border: '3px solid #0275d8',
    color: '#0275d8',
    margin: '0',
    WebkitAppearance: 'none',
    padding: '0 10px 0 15px'
  },
  input: {
    position: 'relative',
    top: 1,
    backgroundColor: 'white',
    borderRadius: 0,
    height: 16,
    margin: 0,
    color: '#0275d8',
    border: '3px solid #0275d8'
  }
}

const Version = ({ version }) => (
  <div style={{ textAlign: 'right' }}>
    <small>v{version}</small>
  </div>
)

const Home = ({ title, version }) => {
  return (
    <div className='page--home'>
      <div className='header'>
        <h1>{title}</h1>
        <p>A rich text editor based on SlateJS</p>
      </div>
      <SlateEditor plugins={plugins}>
        <Version version={version} />
        <SlateToolbar>
          <BoldButton className={classNames.button} />
          <ItalicButton className={classNames.button} />
          <UnderlineButton className={classNames.button} />
          <StrikethroughButton className={classNames.button} />
          <AlignmentButtonBar className={classNames.button} />
          <LinkButton className={classNames.button} />
          <ListButtonBar className={classNames.button} />
        </SlateToolbar>

        <SlateToolbar>
          <FontFamilyDropdown className={classNames.dropdown} style={styles.dropdown} />
          <FontSizeInput
            {...fontSizePluginOptions}
            className={classNames.input}
            style={styles.input}
          />
          <ImageButton
            className={classNames.button}
            signingUrl={
              process.env.REACT_APP_API_URL +
              process.env.REACT_APP_SIGNING_URL_ENDPOINT
            }
          />
          <ColorButton
            className={classNames.button}
            initialState={colorPluginOptions}
            pickerDefaultPosition={{ x: -520, y: 17 }}
          />
          <GridButtonBar className={classNames.button} />
          <EmbedButton className={classNames.button} />
        </SlateToolbar>

        <SlateContent />

        <SlateToolbar className='toolbar--footer'>
          <StateLoggerButton className={classNames.button} />
          <ToggleReadOnlyButton className={classNames.button} />
        </SlateToolbar>
      </SlateEditor>

      <div className='editor--root'>
        <p>
          You had a problem?!
          Report click <a
            href="https://github.com/nossas/slate-editor/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>.
        </p>
      </div>
    </div>
  )
}

export default Home
