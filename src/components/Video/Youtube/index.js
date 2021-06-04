import React, { Fragment, useState } from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { data } from "model/data"
import { removeVietnameseTones } from "common/ConvertVie"
import clsx from "clsx"
import When from "components/Condition/When"
import PopupVideo from "components/Video/PopupVideo"

const Youtube = () => {
  const matches = useMediaQuery("(min-width:700px)")
  const classes = useStyles(matches)
  const { t } = useTranslation(["videos"])
  const [listVideo, setListVideo] = useState(data || [])
  const [keySearch, setKeySearch] = useState("")
  const [info, setInfo] = useState({
    songNameVN: "",
    songNameCN: "",
    singNameVN: "",
    singNameCN: "",
    url: "",
  })
  const [isShowPopup, setShowPopup] = useState(false)

  const handleOnChange = (event) => {
    setKeySearch(removeVietnameseTones(event.target.value) || "")
  }

  const handleOnKeyUp = () => {
    if (keySearch === "") {
      setListVideo(data)
    }
  }

  const handleOnClickShowPopup = () => {
    setShowPopup(!isShowPopup)
  }

  const handleOnKeyPress = (e) => {
    if (e.charCode === 13) {
      if (keySearch === "") {
        setListVideo(data)
      } else {
        setListVideo(
          data.filter((item) => {
            const songNameCN = item?.songNameCN || ""
            const songNameVN = removeVietnameseTones(item?.songNameVN || "")
            const singNameCN = item?.singNameCN || ""
            const singNameVN = removeVietnameseTones(item?.singNameVN || "")

            return (
              songNameCN
                ?.toLocaleLowerCase()
                ?.includes(keySearch?.toLocaleLowerCase()) ||
              songNameVN
                ?.toLocaleLowerCase()
                ?.includes(keySearch?.toLocaleLowerCase()) ||
              singNameCN
                ?.toLocaleLowerCase()
                ?.includes(keySearch?.toLocaleLowerCase()) ||
              singNameVN
                ?.toLocaleLowerCase()
                ?.includes(keySearch?.toLocaleLowerCase())
            )
          })
        )
      }
    }
  }

  return (
    <Fragment>
      <div className={classes.row}>
        <div className={clsx(classes.colSize, classes.mb1)}>
          <FormControl fullWidth style={{ marginBottom: "2em" }}>
            <TextField
              fullWidth
              label={t("videos:lbl_search")}
              onChange={handleOnChange}
              onKeyPress={handleOnKeyPress}
              onKeyUp={handleOnKeyUp}
            />
          </FormControl>
          <List
            style={{
              maxHeight: 300,
              maxWidth: "100%",
              position: "relative",
              overflow: "auto",
            }}
          >
            {listVideo.length !== 0 &&
              listVideo.map((item, index) => (
                <ListItem
                  key={index}
                  className={classes.item}
                  onClick={() => {
                    setInfo(item)
                  }}
                >
                  <ListItemText primary={item?.songNameVN} />
                </ListItem>
              ))}
          </List>
        </div>
        <div className={clsx(classes.colSize, classes.mr1)}>
          <When condition={info?.songNameVN !== ""}>
            <Card style={{ width: "100%" }}>
              <CardContent>
                <Typography
                  color="textSecondary"
                  style={{ marginBottom: "1em" }}
                >
                  <span style={{ fontWeight: "bold" }}>
                    {`${t("videos:lbl_song_name")}: `}{" "}
                  </span>
                  <span>{`${info?.songNameVN} (${info?.songNameCN})`}</span>
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{ marginBottom: "1em" }}
                >
                  <span style={{ fontWeight: "bold" }}>{`${t(
                    "videos:lbl_singer_name"
                  )}: `}</span>
                  <span>{`${info?.singNameVN} (${info?.singNameCN})`}</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  style={{ margin: "auto" }}
                  onClick={handleOnClickShowPopup}
                >
                  {t("videos:lbl_play_video")}
                </Button>
              </CardActions>
            </Card>
          </When>
        </div>
      </div>
      <PopupVideo item={info} open={isShowPopup} setOpen={setShowPopup} />
    </Fragment>
  )
}

const useStyles = makeStyles((matches) => ({
  row: {
    display: "flex",
    flexWrap: "wrap",
  },
  colSize: {
    flex: (matches) => `0 0 ${matches ? "48%" : "100%"}`,
    maxWidth: (matches) => `${matches ? "48%" : "100%"}`,
  },
  mb1: {
    marginBottom: "1em",
  },
  mr1: {
    marginLeft: "1em",
  },
  item: {
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: "#e4e0e0",
    },
  },
}))

export default Youtube
