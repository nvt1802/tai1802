import { makeStyles } from '@material-ui/core'
import React from 'react'

export default function PageWapper({ children }) {
  const classes = useStyles()

  return (
    <div
      className={classes.page}
    >
      {children}
    </div>
  )
}

const useStyles = makeStyles(() => ({
  page: {
    minHeight: '100vh',
    paddingTop: '5em'
  }
}))
