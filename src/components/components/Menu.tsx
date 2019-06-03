import * as React from 'react'
import { cx, css } from 'emotion'

export const Menu = React.forwardRef<{}, any>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `
    )}
  />
))