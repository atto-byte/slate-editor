import classnames from 'classnames';
import { Button } from 'packages/slate-editor-components';
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import { isOrderedList, orderedListStrategy } from './ListUtils';


const OrderedListButton = ({ value, onChange, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(orderedListStrategy(value.change(), 'ordered-list'))}
    className={classnames(
      'slate-list-plugin--button',
      { active: isOrderedList(value) },
      className,
    )}
  >
    <FontAwesome name="list-ol" />
  </Button>
)

export default OrderedListButton
