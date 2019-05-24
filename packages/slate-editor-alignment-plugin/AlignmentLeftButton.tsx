import classnames from 'classnames';
import { Button } from '../slate-editor-components';
import * as React from 'react';
import { alignmentMarkStrategy, getMark, hasMark } from './AlignmentUtils';

import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';

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
    <FormatAlignLeft />
  </Button>
)

export default AlignmentLeftButton
