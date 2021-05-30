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
import Sidebar from 'layout/sidebar'
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
  const [isOpenSidebar, setOpenSidebar] = React.useState(false)
  const maxMm = useMediaQuery('(max-width:768px)')
  const minLg = useMediaQuery('(min-width:768px)')

  useEffect(() => {
    const headerElement = document.getElementsByTagName('header')[0]
    headerElement.style.backgroundColor = 'transparent'
    headerElement.style.boxShadow = 'unset'
    headerElement.style.color = 'white'
    window.addEventListener("scroll", headerColorChange)
  })

  const headerColorChange = () => {
    const headerElement = document.getElementsByTagName('header')[0]
    const windowsScrollTop = window.pageYOffset
    if (windowsScrollTop > 150) {
      headerElement.style.backgroundColor = 'white'
      headerElement.style.boxShadow = '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
      headerElement.style.color = 'black'
      headerElement.style.borderRadius = '0 0 10px 10px'
    } else {
      headerElement.style.backgroundColor = 'transparent'
      headerElement.style.boxShadow = 'unset'
      headerElement.style.color = 'white'
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
          <When condition={maxMm}>
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

          <When condition={minLg}>
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
      <AppBar
        position={'fixed'}
        style={{
          color: 'blue',
          backgroundColor: 'white',
        }}
      >
        {renderToolBar()}
      </AppBar>
      <Sidebar isOpen={isOpenSidebar} toggleDrawer={toggleDrawer} />
    </div>
  )
}