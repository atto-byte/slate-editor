import * as React from 'react';
import { Editor as SlateReact, EventHook, RenderMarkProps, RenderNodeProps } from 'slate-react'
import { Value, Mark, Node, Block , Editor as CoreEditor} from 'slate'

export interface MarkPlugin {
  type: string;
  Button: React.FunctionComponent<MarkButtonProps>;
  render: (props: RenderMarkProps, editor: CoreEditor, next: () => void) => void | JSX.Element;
}

export interface MarkButtonProps {
  hasMark: (type: string) => boolean;
  editor: CoreEditor | any;
}

export interface BlockPlugin {
  type: string;
  onDrop?: EventHook;
  onPaste?: EventHook;
  Button: React.FunctionComponent<MarkButtonProps>;
  render: (props: RenderNodeProps | any, editor: CoreEditor, next: () => any) => void | JSX.Element;
}