import React from "react"
import { Route } from "react-router-dom"

// import pages
import HomePage from "pages/HomePage"
import LoginPage from "pages/LoginPage"
import RegisterPage from "pages/RegisterPage"
import SettingsPage from "pages/SettingsPage"
import VideosPage from "pages/VideosPage"

import AuthRoute from "server/AuthRoute"

const routes = [
  {
    path: "/",
    exact: true,
    component: (props) => (
      <AuthRoute {...props} component={() => <HomePage {...props} />} />
    ),
  },
  {
    path: "/login",
    exact: true,
    component: (props) => <LoginPage {...props} />,
  },
  {
    path: "/settings",
    exact: true,
    component: (props) => (
      <AuthRoute {...props} component={() => <SettingsPage {...props} />} />
    ),
  },
  {
    path: "/videos",
    exact: true,
    component: (props) => (
      <AuthRoute {...props} component={() => <VideosPage {...props} />} />
    ),
  },
  {
    path: "/register",
    exact: true,
    component: (props) => <RegisterPage {...props} />,
  },
  {
    path: "",
    exact: false,
    component: () => <div>NOT FOUND</div>,
  },
]

export default routes

export const RouteWithSubRoutes = (route) => {
  return (
    <>
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => (
          <>
            <route.component {...props} {...route} routes={route.routes} />
          </>
        )}
      />
    </>
  )
}
