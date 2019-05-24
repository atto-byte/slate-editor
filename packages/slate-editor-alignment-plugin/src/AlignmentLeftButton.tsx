import classnames from 'classnames';
import { Button } from 'packages/slate-editor-components';
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import { alignmentMarkStrategy, getMark, hasMark } from './AlignmentUtils';


const AlignmentLeftButton = ({ value, onChange, changeState, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(alignmentMarkStrategy(value.change(), 'left'))}
    className={classnames(
      'slate-alignment-plugin--button',
      { active: hasMark(value) && getMark(value).data.get('align') === 'left' },
      className,
    )}
  >
    <FontAwesome name="align-left" />
  </Button>
)

export default AlignmentLeftButton
