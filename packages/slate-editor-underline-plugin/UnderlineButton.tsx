import classnames from 'classnames';
import { Button } from '../slate-editor-components';
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import { hasMark, underlineMarkStrategy } from './UnderlineUtils';


const UnderlineButton = ({ value, onChange, changeState, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(underlineMarkStrategy(value.change()))}
    className={classnames(
      'slate-underline-plugin--button',
      { active: hasMark(value) },
      className
    )}
  >
    <FontAwesome name="underline" />
  </Button>
)

export default UnderlineButton
