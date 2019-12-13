
import React from 'react'
import Rosters from '../signedIn/Rosters'

const Landing = (props) => (
	<div className='container landing'>
		<Rosters {...props} />
	</div>
)
export default Landing