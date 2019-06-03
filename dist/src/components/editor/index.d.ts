import * as React from 'react';

import { MarkPlugin, BlockPlugin } from './types';

interface EditorProps {

    markPlugins: MarkPlugin[];

    blockPlugins: BlockPlugin[];

}

declare const Editor: React.SFC<EditorProps>;

/**

 * Export.

 */

export default Editor;

