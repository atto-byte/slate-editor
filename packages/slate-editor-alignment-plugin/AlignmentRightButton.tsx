import classnames from 'classnames';
import { Button } from '../slate-editor-components';
import * as React from 'react';
import { alignmentMarkStrategy, getMark, hasMark } from './AlignmentUtils';
import FormatAlignRight from '@material-ui/icons/FormatAlignRight';

const AlignmentRightButton = ({ value, onChange, changeState, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(alignmentMarkStrategy(value.change(), 'right'))}
    className={classnames(
      'slate-alignment-plugin--button',
      { active: hasMark(value) && getMark(value).data.get('align') === 'right' },
      className,
    )}
  >
    <FormatAlignRight />
  </Button>
)

export default AlignmentRightButton
