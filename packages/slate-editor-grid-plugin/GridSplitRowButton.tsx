import classnames from 'classnames';
import { Button } from '../slate-editor-components';
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import { splitRow } from './GridUtils';


const GridSplitRowButton = ({ value, onChange, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(splitRow(value.change()))}
    className={classnames('slate-grid-plugin--button', className)}
  >
    <FontAwesome name='level-down' />
  </Button>
)

export default GridSplitRowButton
