
import React from "react"
import Nav from "./Nav"
import Footer from './Footer'

const Layout = props => (
        <div>
            {/* <h3>Fantasy Futball</h3> */}
           <Nav />

           {props.children}
        <Footer />
          
        </div>
    
)

export default Layout