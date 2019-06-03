import React from 'react';
import Editor from './components/editor';
import { BoldPlugin } from './components/bold';
import { ItalicPlugin } from './components/italic';
import { UnderlinePlugin } from './components/underline';
import { StrikethroughPlugin } from './components/strikethrough';
import { FontFamilyPlugin } from './components/font-family';
import { AlignPlugin } from './components/alignment';
import { ImagePlugin } from './components/image';

export default () => (
	<Editor 
		markPlugins={[
			BoldPlugin,
			ItalicPlugin,
			StrikethroughPlugin,
			UnderlinePlugin,
			FontFamilyPlugin
		]}
		blockPlugins={[AlignPlugin, ImagePlugin]}
	/>
)