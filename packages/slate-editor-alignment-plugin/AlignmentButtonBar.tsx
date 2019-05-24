import * as React from 'react'

import { AlignmentLeftButton, AlignmentCenterButton, AlignmentRightButton } from './'
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles({
  root:{
    display: 'inline-block'
  }
});
const AlignmentButtonBar = props => {
  const classes = useStyles();
  return(
  <div className={classes.root}>
    <AlignmentLeftButton {...props} />
    <AlignmentCenterButton {...props} />
    <AlignmentRightButton {...props} />
  </div>
)}

export default AlignmentButtonBar
