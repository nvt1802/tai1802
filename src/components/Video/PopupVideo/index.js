import React from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@material-ui/core"
import ReactPlayer from "react-player"
import { useTranslation } from "react-i18next"

export default function PopupVideo({ item, open = false, setOpen }) {
  const { t } = useTranslation(["videos"])
  const matches = useMediaQuery("(min-width:750px)")

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xl"
      disableBackdropClick
    >
      <DialogTitle id="alert-dialog-title">
        <span style={{ marginRight: "0.5em" }}>{item?.songNameVN}</span>
        <span>-</span>
        <span style={{ marginLeft: "0.5em" }}>{item?.singNameVN}</span>
      </DialogTitle>
      <DialogContent>
        <ReactPlayer
          url={item?.url}
          controls={true}
          width={matches ? "100vh" : "70vw"}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          {t("videos:lbl_close")}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
