import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
	<nav className="navbar">
		<div className="nav-items">
			<NavLink to='/rosters'>Rosters</NavLink>
			<NavLink to='/create'>Create Roster</NavLink>
		</div>

	</nav>
)

export default Nav