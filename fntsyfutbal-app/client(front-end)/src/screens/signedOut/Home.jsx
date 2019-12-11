import React from 'react'
import Layout from '../../components/shared/Layout'

import herosoccer from '../images/herosoccer.jpg'
import  g from '../images/giphy-3.gif'
// import Button from '../shared/Button'
// import { NavLink } from 'react-router-dom'

const Home = () => (
    <Layout>
         
        <div className="hero">
           <img src={herosoccer} alt="" />
         
        </div>  

        <div className="giphy">
        <h3>Welcome to Fantasy Futball</h3>
        <img src={g} alt="" />

        </div>
    </Layout>
   
)


export default Home