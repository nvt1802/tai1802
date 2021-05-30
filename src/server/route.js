import React from 'react'
import HomePage from 'pages/HomePage'
import LoginPage from 'pages/LoginPage'
import RegisterPage from 'pages/RegisterPage'
import { Route } from 'react-router-dom'
import AuthRoute from 'server/AuthRoute'

const routes = [
	{
		path: "/",
		exact: true,
		component: (props) => (
			<AuthRoute {...props} component={() => <HomePage {...props} />} />
		)
	},
	{
		path: "/login",
		exact: true,
		component: (props) => <LoginPage {...props} />
	},
	{
		path: "/register",
		exact: true,
		component: (props) => <RegisterPage {...props} />
	},
	{
		path: '',
		exact: false,
		component: () => <div>NOT FOUND</div>
	}
];

export default routes

export const RouteWithSubRoutes = (route) => {
	return (<>
		<Route
			path={route.path}
			exact={route.exact}
			render={(props) => (<>
				<route.component {...props} {...route} routes={route.routes} />
			</>)}
		/>
	</>)
}