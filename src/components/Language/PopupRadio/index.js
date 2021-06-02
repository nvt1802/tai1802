import React, { Fragment, useMemo, useState } from "react"
import {
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Tooltip,
} from "@material-ui/core"
import { useTranslation } from "react-i18next"
import LanguageIcon from "@material-ui/icons/LanguageRounded"

const LanguagePopup = () => {
  const { t, i18n } = useTranslation("common")
  const [language, setLanguage] = useState(localStorage.getItem("lng") || "vn")
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(
    localStorage.getItem("lng") || "vn"
  )

  const handleChangeLanguage = (event) => {
    setSelectedValue(event.target.value)
  }

  const handleConfirm = () => {
    setLanguage(selectedValue)
    i18n.changeLanguage(selectedValue || "vn")
    localStorage.setItem("lng", selectedValue)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const arrLanguage = useMemo(
    () => [
      { label: t("common:language.cn"), value: "cn" },
      { label: t("common:language.en"), value: "en" },
      { label: t("common:language.jp"), value: "jp" },
      { label: t("common:language.kr"), value: "kr" },
      { label: t("common:language.vn"), value: "vn" },
    ],
    [t]
  )

  return (
    <Fragment>
      <Tooltip title={t("common:tooltip_language")}>
        <Button
          style={{ position: "fixed", bottom: "0.2em", right: "0.2em" }}
          onClick={handleClickOpen}
        >
          <Badge style={{ color: "brown" }} badgeContent={language}>
            <LanguageIcon style={{ color: "green" }} />
          </Badge>
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          {t("common:dialog_title_language")}
        </DialogTitle>
        <DialogContent style={{ width: "440px" }}>
          <DialogContentText>
            {t("common:title_change_language")}
          </DialogContentText>
          <FormControl>
            <RadioGroup
              aria-label="language"
              name="language"
              value={selectedValue}
              onChange={handleChangeLanguage}
            >
              {arrLanguage.map((item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={item?.value}
                    control={<Radio />}
                    label={item?.label}
                  />
                )
              })}
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button color="secondary" variant="outlined" onClick={handleConfirm}>
            {t("common:btn_confirm")}
          </Button>
          <Button onClick={handleClose} color="primary" variant="outlined">
            {t("common:lbl_close")}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default LanguagePopup
