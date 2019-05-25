import classnames from 'classnames';
import { Button } from '../slate-editor-components';
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import { hasLinks, insertLinkStrategy } from './LinkUtils';


const LinkButton = ({ value, onChange, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onMouseDown={e => onChange(insertLinkStrategy(value.change()))}
    className={classnames(
      'slate-link-plugin--button',
      { active: hasLinks(value) },
      className,
    )}
  >
    <FontAwesome name="link" />
  </Button>
)

export default LinkButton
