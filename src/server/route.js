import React from 'react'
import HomePage from 'pages/HomePage'
import LoginPage from 'pages/LoginPage'
import { Route } from 'react-router-dom'

const routes = [
	{
		path: "/",
		exact: true,
		component: HomePage
	},
	{
		path: "/login",
		exact: true,
		component: LoginPage
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
			render={props => (<>
				<route.component {...props} routes={route.routes} />
			</>)}
		/>
	</>)
}