import { makeStyles } from '@material-ui/core'
import React from 'react'
import BgDefault from 'assets/image/bgHome/bg-home-1.jpg'

export default function PageWapper({ children, backgroundImage = BgDefault }) {
  const classes = useStyles()

  return (
    <div
      className={classes.page}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  )
}

const useStyles = makeStyles(() => ({
  page: {
    minHeight: '368px',
    paddingTop: '5em'
  }
}))
