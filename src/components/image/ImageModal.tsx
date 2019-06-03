import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog, { WithMobileDialog } from '@material-ui/core/withMobileDialog';
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField, Button } from '@material-ui/core';
import { insertImage } from './ImageUtils';
import { Editor as SlateReact, EventHook } from 'slate-react'



const useStyles = makeStyles(theme => ({
  image: {
    height: "500px",
    width: "100%"
  }
}));

interface ImageModalProps extends WithMobileDialog {
  editor : SlateReact;
  open: boolean;
  handleClose: () => void;
}

const ImageModal:React.SFC<ImageModalProps> = ({editor, open, handleClose, fullScreen}) => {
  const [src, setSrc] = React.useState('');
  const [title, setTitle] = React.useState('');
  const classes = useStyles({});


  return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Add Image"}</DialogTitle>
        <DialogContent>
          <TextField onChange={e => setSrc(e.target.value)} value={src} label={"Link"}/>
          <img src={src} className={classes.image}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={e => insertImage(editor, src)} color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default withMobileDialog()(ImageModal);
