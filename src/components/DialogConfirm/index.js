import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'

export default function ConfirmDialog({
  open,
  handleClose,
  handleClickConfirm,
  title = '',
  content = '',
  labelBtnConfirm = '',
  labelBtnClose = ''
}) {

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickConfirm} color="primary">
          {labelBtnConfirm}
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          {labelBtnClose}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
