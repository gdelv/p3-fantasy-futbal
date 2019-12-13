import React from 'react'
import { NavLink } from 'react-router-dom'
import socerball from '../../screens/images/socerball.png'

const Nav = () => (
	<nav className="navbar">
		<div className="title">
			<img src={socerball} alt="" />
			<h2>Fantasy Futball</h2>

		</div>
		<div className="nav-items">
			<NavLink to='/rosters'>Rosters</NavLink>
			<NavLink to='/create'>Create Roster</NavLink>
		</div>

	</nav>
)

export default Nav