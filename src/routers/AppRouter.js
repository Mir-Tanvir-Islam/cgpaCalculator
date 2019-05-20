import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Header from './../components/Header'
import DashboardPage from './../components/DashboardPage'
import AddEntryPage from './../components/AddEntryPage'
import NotFoundPage from './../components/NotFoundPage'

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path='/' component={DashboardPage} exact={true} />
				<Route path='/add' component={AddEntryPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default AppRouter
