
// import React from "react"
// import Nav from "./Nav"
// import Footer from './Footer'

// const Layout = props => (
//         <div>
//             {/* <h3>Fantasy Futball</h3> */}
//            <Nav />

//            {props.children}
//         <Footer />
          
//         </div>
    
// )

// export default Layout

import React from 'react'

import Nav from './Nav'
import Footer from './Footer'

const Layout = (props) => (
	<div className='layout'>
		<div className='content'>
			<Nav />
			<div className='main'>
				<h1>Fantasy Futbal!</h1>
				{props.children}
			</div>
		</div>
		<Footer />
	</div>
)

export default Layout