import classnames from 'classnames';
import { Button } from '../slate-editor-components';
import * as React from 'react';
import { alignmentMarkStrategy, getMark, hasMark } from './AlignmentUtils';
import FormatAlignCenter from '@material-ui/icons/FormatAlignCenter';

const AlignmentCenterButton = ({ value, onChange, changeState, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(alignmentMarkStrategy(value.change(), 'center'))}
    className={classnames(
      'slate-alignment-plugin--button',
      { active: hasMark(value) && getMark(value).data.get('align') === 'center' },
      className,
    )}
  >
    <FormatAlignCenter />
  </Button>
)

export default AlignmentCenterButton
