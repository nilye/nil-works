import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './pages/route'

export default function App(){
	return (
		<Router>
			<Switch>
				{ routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						exact={route.exact}
						component={route.component}
					></Route>
				))}
			</Switch>
		</Router>
	)
}
