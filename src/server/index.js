import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import routes, { RouteWithSubRoutes } from 'server/route'
import Header from 'layout/header'
import Footer from 'layout/footer'
import { providers, firebaseAppAuth } from 'firebaseConfig'
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth'
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core'
import When from 'components/Condition/When'

function Server(props) {
  const classes = useStyles()
  const { user } = props
  return (
    <Fragment>
      <When condition={typeof (user) !== 'undefined'}>
        <Router>
          <When condition={typeof (user) !== 'undefined' && user !== null}>
            <Header {...props} />
          </When>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}{...props} />
            ))}
          </Switch >
          <Footer />
        </Router >
      </When>
      <When condition={typeof (user) === 'undefined'}>
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </When>
    </Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Server)
