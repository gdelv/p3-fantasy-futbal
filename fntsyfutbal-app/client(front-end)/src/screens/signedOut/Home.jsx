// import React from 'react'
// import Layout from '../../components/shared/Layout'

// import herosoccer from '../images/herosoccer.jpg'
// import  g from '../images/giphy-3.gif'
// import Button from '../../components/shared/Button'
// import { NavLink } from 'react-router-dom'

// const Home = () => (
//     <Layout>
         
//         <div className="hero">
//            <img src={herosoccer} alt="" />
         
<<<<<<< HEAD
        </div>  

        <div className="giphy">
        <h3>Welcome to Fantasy Futball</h3>
        <img src={g} alt="" />
        <h4>Think you got what it takes to win on the big stage?
            Create your Roster and work your way to the top by 
            beating the best of the best.
            Select players from all competitions to create the most
            most dominant in Futball history.
        </h4>

        {/* <NavLink to='join'> */}
            <Button title='Create Account' className='create-button' />
        {/* </NavLink> */}

        <NavLink to='login'className='sign-in'>
            Sign in
        </NavLink>

        </div>
    </Layout>
=======
//         </div>  

//         <div className="giphy">
//         <h3>Welcome to Fantasy Futball</h3>
//         <img src={g} alt="" />
//         <h4>Think you got what it takes to win on the big stage?
//             Creat your Roster and work your way to the top by 
//             beating the best of the best.
//             Select players from all competitions to create the most
//             most dominant in Futball history.
//         </h4>

//         <NavLink to='join'>
//             <Button title='Create Account' className='create-button' />
//         </NavLink>

//         <NavLink to='login'className='sign-in'>
//             Sign in
//         </NavLink>

//         </div>
//     </Layout>
>>>>>>> 5599fa65120b447a8fb24791ef1254b3d378634d
   
// )


// export default Home

import React from 'react'
import Rosters from '../signedIn/Rosters'

const Landing = (props) => (
	<div className='container landing'>
		<Rosters {...props} />
	</div>
)
export default Landing