import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
	<nav className='navbar navbar-expand-lg navbar-light bg-light'>
		<a className='navbar-brand' href='#'>
			Navbar
		</a>
		<button
			className='navbar-toggler'
			type='button'
			data-toggle='collapse'
			data-target='#navbarSupportedContent'
			aria-controls='navbarSupportedContent'
			aria-expanded='false'
			aria-label='Toggle navigation'
		>
			<span className='navbar-toggler-icon' />
		</button>

		<div className='collapse navbar-collapse' id='navbarSupportedContent'>
			<ul className='navbar-nav mr-auto'>
				<li className='nav-item'>
					<NavLink
						to='/'
						className='nav-link'
						activeClassName='nav-link active'
						exact={true}
					>
						Dashboard
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						to='/add'
						className='nav-link'
						activeClassName='nav-link active'
					>
						Add
					</NavLink>
				</li>
			</ul>
		</div>
	</nav>
)

export default Header
