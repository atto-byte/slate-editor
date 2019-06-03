import * as React from 'react';
import { Popper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    zIndex: 1300,
    backgroundColor: 'white',
    boxShadow: '0px 0px 4px #8080804a'
  }
})
interface PopUpProps {
  anchorEl: Element | (() => Element)| any;
}
export const PopUp: React.FC<PopUpProps> = ({children, anchorEl}) => {
  const classes = useStyles({});
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : null;
  return(
    <Popper
      id={id}
      open={open} 
      anchorEl={anchorEl}
      placement="bottom"
      disablePortal={true}
      className={classes.root}
      modifiers={{
        flip: {
          enabled: true,
        },
        preventOverflow: {
          enabled: true,
          boundariesElement: 'scrollParent',
        },
        arrow: {
          enabled: true,
        },
      }}
    >
      {children}
    </Popper>
  )
}
  