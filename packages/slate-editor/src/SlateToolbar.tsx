import classnames from 'classnames';
import { react } from 'packages/slate-editor-utils';
import * as React from 'react';

export default ({ children, style, className, ...rest }) => (
  <div className={classnames('editor--toolbar', className)} style={style}>
    {react.cloneElement(children, rest)}
  </div>
)
