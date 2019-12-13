import React from 'react'
import Layout from '../../components/shared/Layout'
import herosoccer from '../images/herosoccer.jpg'


const Home = () => (
  <Layout>
    <h4>Welcome to the Fantasy Futbal app!</h4>
    <img src={herosoccer} alt='' />
  </Layout>
)

export default Home