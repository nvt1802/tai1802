import React, { Fragment, useState } from 'react'
import {
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  Tooltip
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import LanguageIcon from '@material-ui/icons/LanguageRounded'


const Language = () => {
  const { t, i18n } = useTranslation('common')
  const [language, setLanguage] = useState(localStorage.getItem('lng') || 'vn')
  const [open, setOpen] = useState(false)

  const handleChangeLanguage = (event, language) => {
    i18n.changeLanguage(language?.props?.value)
    localStorage.setItem('lng', language?.props?.value)
    setLanguage(language?.props?.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Fragment>
      <Tooltip title={t('common:tooltip_language')}>
        <Button
          style={{ position: 'fixed', bottom: '1em', right: '1em' }}
          onClick={handleClickOpen}
        >
          <Badge style={{ color: 'brown' }} badgeContent={language} >
            <LanguageIcon style={{ color: 'white' }} />
          </Badge>
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{t('common:dialog_title_language')}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t('common:title_change_language')}
          </DialogContentText>
          <form noValidate>
            <FormControl fullWidth>
              <Select
                id="language"
                name="language"
                onChange={handleChangeLanguage}
                value={language}
              >
                <MenuItem value={'vn'}>{t('common:language.vn')}</MenuItem>
                <MenuItem value={'en'}>{t('common:language.en')}</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default Language