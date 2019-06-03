import * as React from 'react';

import { Block, Inline } from 'slate';

import { RenderAttributes } from 'slate-react';

import { Editor as CoreEditor } from 'slate';

interface NodeProps {

    node: Block | Inline;

    attributes: RenderAttributes;

    isFocused: boolean;

    editor: CoreEditor;

}

declare const ImageNode: React.ForwardRefExoticComponent<NodeProps & React.RefAttributes<HTMLImageElement>>;

export default ImageNode;

