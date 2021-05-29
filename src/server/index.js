import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import routes, { RouteWithSubRoutes } from 'server/route'
import { connect } from 'react-redux'
import Header from 'layout/header'

function Server() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch >
    </Router >
  );
}

const mapDispatchToProps = () => ({})

export default connect(null, mapDispatchToProps)(Server)
