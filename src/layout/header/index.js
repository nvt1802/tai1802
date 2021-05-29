import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Grid,
  Avatar,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {
  Menu as MenuIcon,
  ExitToApp,
  ListAlt,
  Settings,
  AccountBox as AccountBoxICon
} from '@material-ui/icons'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTranslation } from 'react-i18next'
import Sidebar from '../sidebar'
import When from 'components/Condition/When'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

export default function Header(props) {
  const {
    user,
    signOut
  } = props
  const classes = useStyles()
  const { t } = useTranslation('header')
  const [anchorEl, setAnchorEl] = useState(null)
  const [position, setPosition] = useState('relative')
  const [isOpenSidebar, setOpenSidebar] = React.useState(false)
  const sizeMm = useMediaQuery('(max-width:768px)')
  const sizeLg = useMediaQuery('(min-width:768px)')

  useEffect(() => {
    window.addEventListener("scroll", headerColorChange)
  })

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset
    if (windowsScrollTop > 150) {
      setPosition('fixed')
    } else {
      setPosition('relative')
    }
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleDrawer = () => () => {
    setOpenSidebar(!isOpenSidebar)
  }

  const handleLogout = () => {
    handleClose()
    signOut()
  }

  const renderMenu = () => (
    <StyledMenu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <StyledMenuItem>
        <ListItemIcon>
          <AccountBoxICon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </StyledMenuItem>
      <StyledMenuItem>
        <ListItemIcon>
          <ExitToApp fontSize="small" />
        </ListItemIcon>
        <ListItemText
          onClick={handleLogout}
          primary={t('header:btn_logout')}
        />
      </StyledMenuItem>
    </StyledMenu>
  )

  const renderToolBar = () => (
    <Toolbar>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer()}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        {t('header:title_page')}
      </Typography>
      <When condition={typeof (user) !== 'undefined' && user !== null}>
        <div>
          <When condition={sizeMm}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <ListAlt />
            </IconButton>
            {renderMenu()}
          </When>

          <When condition={sizeLg}>
            <Grid container>
              <Grid style={{ margin: 'auto' }}>
                <MenuItem onClick={handleClose}>
                  <Settings />
                  <span style={{ marginLeft: '0.5em' }}>{t('header:btn_setting')}</span>
                </MenuItem>
              </Grid>
              <Grid style={{ margin: 'auto' }}>
                <MenuItem onClick={handleMenu}>
                  <Avatar alt={user?.displayName} src={user?.photoURL} />
                  <span style={{ marginLeft: '0.5em' }}>
                    {user?.displayName}
                  </span>
                </MenuItem>
                {renderMenu()}
              </Grid>
            </Grid>
          </When>
        </div>
      </When>
    </Toolbar>
  )

  return (
    <div>
      <AppBar position={position} style={{ color: 'blue', backgroundColor: 'white' }}>
        {renderToolBar()}
      </AppBar>
      <Sidebar isOpen={isOpenSidebar} toggleDrawer={toggleDrawer} />
    </div>
  )
}