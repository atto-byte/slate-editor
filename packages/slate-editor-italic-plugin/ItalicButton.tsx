import classnames from 'classnames';
import { Button } from '../slate-editor-components';
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import { hasMark, italicMarkStrategy } from './ItalicUtils';


const ItalicButton = ({ value, onChange, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(italicMarkStrategy(value.change()))}
    className={classnames(
      'slate-italic-plugin--button',
      { active: hasMark(value) },
      className,
    )}
  >
    <FontAwesome name="italic" />
  </Button>
)

export default ItalicButton
