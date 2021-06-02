import React, { Fragment, useEffect, useRef, useState } from "react"
import { messageDBRef, createMessage } from "model/realtime/chat"
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fab,
  makeStyles,
  TextField,
  Tooltip,
} from "@material-ui/core"
import {
  Message as MessageIcon,
  Send as SendIcon,
  ExpandMore as ExpandMoreIcon,
  MailOutline as MailOutlineIcon,
} from "@material-ui/icons"
import { useTranslation } from "react-i18next"

const ChatBox = ({ user }) => {
  const classes = useStyles()
  const { t } = useTranslation("home")
  const [message, setMessage] = useState([])
  const [isNotMessage, setNotMessage] = useState(true)
  const [numberOfmessages, setNumberOfmessages] = useState(8)
  const [isShowPopup, setShowPopup] = useState(false)
  const messageInputRef = useRef(null)
  const messageRef = useRef(null)

  useEffect(() => {
    if (messageRef !== null && numberOfmessages === 8) {
      messageRef.current.scrollTo(0, document.body.scrollHeight)
    } else {
      messageRef.current.scrollTo(0, 1)
    }
  })

  const handleOnSubmit = (event) => {
    event.preventDefault()
    if (messageInputRef.current?.value?.length > 0) {
      createMessage(
        user?.displayName,
        user?.email,
        user?.photoURL,
        messageInputRef.current?.value
      )
      messageRef.current.scrollTo(0, document.body.scrollHeight)
      messageInputRef.current.value = ""
    }
  }

  const handleScroll = () => {
    if (messageRef.current.scrollTop === 0) {
      if (numberOfmessages < message.length - 1) {
        setNumberOfmessages(numberOfmessages + 1)
      }
    }
  }

  useEffect(() => {
    messageDBRef.on("value", (snapshot) => {
      if (!snapshot.exists()) {
        setNotMessage(true)
      }
      if (
        snapshot.exists() &&
        message.length !== Object.values(snapshot.val()).length
      ) {
        if (isNotMessage) {
          setNotMessage(false)
        }
        let array = []
        array = Object.values(snapshot.val())
        array.sort(function (a, b) {
          const date1 = new Date(a?.createAt)
          const date2 = new Date(b?.createAt)
          if (date1 > date2) {
            return 1
          } else if (date1 < date2) {
            return -1
          } else return 1
        })
        setMessage(array)
      }
    })
  }, [message, isNotMessage, setNotMessage, setMessage])

  const renderMessage = () => {
    const list = message.slice(
      message.length - numberOfmessages,
      message.length
    )
    return (
      <div
        ref={messageRef}
        id="scrollMessage"
        onScroll={handleScroll}
        style={{
          height: "200px",
          overflowY: "auto",
          border: "1px solid",
        }}
      >
        {!isNotMessage &&
          list.map((item, index) => {
            if (item?.email === user?.email) {
              return (
                <div
                  style={{ textAlign: "right", marginRight: "0.5em" }}
                  key={index}
                >
                  <span
                    style={{
                      width: "200px",
                      display: "inline-block",
                      wordBreak: "break-word",
                    }}
                  >
                    {item?.message}
                  </span>
                </div>
              )
            } else {
              return (
                <div key={index} style={{ textAlign: "left", display: "flex" }}>
                  <Tooltip title={item?.email} aria-label="add">
                    <Avatar
                      alt={item?.email}
                      src={item?.photoURL}
                      className={classes.small}
                    />
                  </Tooltip>
                  <span
                    style={{
                      width: "200px",
                      display: "inline-block",
                      wordBreak: "break-word",
                    }}
                  >
                    {item?.message}
                  </span>
                </div>
              )
            }
          })}
      </div>
    )
  }

  const handleChangeStatusPopupMessage = () => {
    setShowPopup(!isShowPopup)
  }

  return (
    <Fragment>
      <Tooltip
        title={t("common:message_popup.title_toltip_message")}
        aria-label="add"
      >
        <Fab
          color="secondary"
          className={classes.fixed}
          style={{ display: `${isShowPopup ? "none" : "block"}` }}
          onClick={handleChangeStatusPopupMessage}
        >
          <MessageIcon />
        </Fab>
      </Tooltip>

      <div
        style={{
          display: `${isShowPopup ? "block" : "none"}`,
          position: "fixed",
          bottom: "1em",
          right: "1em",
        }}
      >
        <Card className={classes.card}>
          <form onSubmit={handleOnSubmit}>
            <CardHeader
              style={{ color: "black", height: "10px" }}
              title={<MailOutlineIcon style={{ marginTop: "12px" }} />}
              action={
                <Button onClick={handleChangeStatusPopupMessage}>
                  <ExpandMoreIcon />
                </Button>
              }
            />
            <CardContent>{renderMessage()}</CardContent>
            <CardActions style={{ marginLeft: "8px" }}>
              <div style={{ width: "80%" }}>
                <TextField
                  id="standard-basic"
                  placeholder={t("common:message_popup.plh_type_message")}
                  autoComplete="off"
                  inputRef={messageInputRef}
                  multiline={false}
                  rows={1}
                  size="small"
                  fullWidth
                  variant="outlined"
                />
              </div>
              <Button
                size="small"
                style={{ width: "20%" }}
                onClick={handleOnSubmit}
              >
                <SendIcon />
              </Button>
            </CardActions>
          </form>
        </Card>
      </div>
    </Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    width: 400,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  fixed: {
    width: "45px",
    height: "45px",
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: "0.5em",
    marginLeft: "0.5em",
  },
}))

export default ChatBox
