import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import routes, { RouteWithSubRoutes } from 'server/route'
import { connect } from 'react-redux'
import Header from 'layout/header'
import Footer from 'layout/footer'

function Server() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch >
      <Footer />
    </Router >
  );
}

const mapDispatchToProps = () => ({})

export default connect(null, mapDispatchToProps)(Server)
