import * as React from 'react'
import { cx, css } from 'emotion'
import MUIButton from '@material-ui/core/Button';

export const Button = React.forwardRef<any, any>(
  ({ className, active, reversed, ...props }, ref) => (
    <MUIButton
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed
            ? active ? 'white' : '#aaa'
            : active ? 'black' : '#ccc'};
        `
      )}
    />
  )
)
