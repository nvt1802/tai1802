import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core"
import {
  ExitToApp as LogoutIcon,
  Settings as SettingsIcon,
  VideoLibrary as VideoLibraryIcon,
} from "@material-ui/icons"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

export default function Sidebar({ user, handleLogout, isOpen, toggleDrawer }) {
  const classes = useStyles()
  const { t } = useTranslation(["header", "common"])

  const handlePushPageSettings = () => {
    document.getElementById("pushSettings").click()
  }

  const handlePushPageVideos = () => {
    document.getElementById("pushVideos").click()
  }

  const handlePushPageAbout = () => {
    document.getElementById("pushAbout").click()
  }

  const list = (props) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <Avatar alt={user?.displayName} src={user?.photoURL} />
          </ListItemIcon>
          <ListItemText primary={user?.displayName} />
        </ListItem>
      </List>

      <Divider />

      <List onClick={handlePushPageVideos}>
        <ListItem button>
          <ListItemIcon>
            <VideoLibraryIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("header:btn_videos")} />
        </ListItem>
      </List>

      <List onClick={handlePushPageSettings}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("header:btn_setting")} />
        </ListItem>
      </List>

      <List onClick={handlePushPageAbout}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("header:btn_about")} />
        </ListItem>
      </List>

      <List onClick={handleLogout}>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("header:btn_logout")} />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <SwipeableDrawer
        anchor={"right"}
        open={isOpen}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
      >
        {list()}
      </SwipeableDrawer>
      <Link to="/settings" id="pushSettings" style={{ display: "none" }} />
      <Link to="/videos" id="pushVideos" style={{ display: "none" }} />
      <Link to="/about" id="pushAbout" style={{ display: "none" }} />
    </div>
  )
}
