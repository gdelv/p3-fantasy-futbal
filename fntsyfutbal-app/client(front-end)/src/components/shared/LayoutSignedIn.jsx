import React from 'react'


import NavSignedIn from './NavSignedIn'
import Footer from './Footer'

const Layout = props => (
    <div>
        <h1>Fantasy Futbal</h1> 
        <NavSignedIn />

        {props.children}

        <Footer />
    </div>
)

export default Layout