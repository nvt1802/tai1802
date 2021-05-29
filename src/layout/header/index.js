import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Grid,
} from '@material-ui/core'
import { Menu as MenuIcon, ExitToApp, ListAlt, Settings } from '@material-ui/icons'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTranslation } from 'react-i18next'
import Sidebar from 'layout/sidebar'
import When from 'components/When'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function MenuAppBar() {
  const classes = useStyles()
  const { t } = useTranslation('header')
  const [anchorEl, setAnchorEl] = useState(null)
  const [position, setPosition] = useState('relative')
  const [isOpenSidebar, setOpenSidebar] = React.useState(false)
  const open = Boolean(anchorEl)
  const sizeMm = useMediaQuery('(max-width:768px)')
  const sizeLg = useMediaQuery('(min-width:768px)')

  React.useEffect(() => {
    window.addEventListener("scroll", headerColorChange)
  });

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset
    if (windowsScrollTop > 100) {
      setPosition('fixed')
    } else {
      setPosition('relative')
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleDrawer = () => () => {
    setOpenSidebar(!isOpenSidebar)
  }

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
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>{t('header:btn_setting')}</MenuItem>
            <MenuItem onClick={handleClose}>{t('header:btn_logout')}</MenuItem>
          </Menu>
        </When>

        <When condition={sizeLg}>
          <Grid container>
            <Grid>
              <MenuItem onClick={handleClose}>
                <Settings />
                <span style={{ marginLeft: '0.5em' }}>{t('header:btn_setting')}</span>
              </MenuItem>
            </Grid>
            <Grid>
              <MenuItem onClick={handleClose}>
                <ExitToApp />
                <span style={{ marginLeft: '0.5em' }}>{t('header:btn_logout')}</span>
              </MenuItem>
            </Grid>
          </Grid>
        </When>
      </div>
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