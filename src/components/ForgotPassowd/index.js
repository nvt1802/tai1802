import React, { Fragment, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Snackbar,
  TextField,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import * as yup from "yup"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Alert } from '@material-ui/lab'

const Language = ({ status, setStatus }) => {
  const { t } = useTranslation('common', 'forgot_password')
  const [isDisable, setDisable] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)

  const schema = yup.object().shape({
    email: yup.string()
      .required(t('common:validate.message_require', { field: 'Email' }))
      .email(t('common:validate.email_format'))
  });

  const { handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(schema)
  });

  const handleClose = () => {
    setStatus(false)
  };

  const onSubmit = data => {
    var auth = firebase.auth()
    auth.sendPasswordResetEmail(data?.email).then(function () {
      // Email sent.
      setDisable(true)
      setStatus(false);
      setOpenAlert(true)
    }).catch(function (error) {
      // An error happened.
    });
  }

  return (
    <Fragment>
      <Dialog
        open={status}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{t('forgot_password:title')}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t('forgot_password:lbl_forgot_password')}
          </DialogContentText>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth style={{ marginBottom: '1em' }}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Email"
                  type="email"
                  autoComplete="off"
                  error={errors.email ? true : false}
                  helperText={errors.email?.message}
                  disabled={isDisable}
                />
                }
              />
            </FormControl>
            <FormControl fullWidth>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isDisable}
              >
                {t('forgot_password:btn_reset_password')}
              </Button>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={() => setOpenAlert(false)}>
        <Alert onClose={() => setOpenAlert(false)} severity="success">
          {t('forgot_password:lbl_forgot_pasword_success')}
        </Alert>
      </Snackbar>
    </Fragment>
  )
}

export default Language