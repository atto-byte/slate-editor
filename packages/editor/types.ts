import * as React from 'react';
import { Editor as SlateReact, EventHook, RenderMarkProps, RenderNodeProps } from 'slate-react'

export interface MarkPlugin {
  type: string;
  Button: React.FunctionComponent<MarkButtonProps>;
  render: (props: RenderMarkProps, editor: SlateReact, next: () => void) => void | JSX.Element;
}

export interface MarkButtonProps {
  hasMark: (type: string) => boolean;
  editor: SlateReact;
}

export interface BlockPlugin {
  type: string;
  Button: React.FunctionComponent<MarkButtonProps>;
  render: (props: RenderNodeProps, editor: SlateReact, next: () => any) => void | JSX.Element;
}