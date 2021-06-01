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

  const handleSetting = () => {
    document.getElementById("pushSettings").click()
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

      <List onClick={handleSetting}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("header:btn_setting")} />
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
      <Link
        to="/settings"
        id="pushSettings1"
        style={{ position: "absolute", top: "50%", left: "50%" }}
      >
        CLICK
      </Link>
    </div>
  )
}
