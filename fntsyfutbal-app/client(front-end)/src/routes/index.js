import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/signedIn/HomeSignedIn' //user home (needs to be double checked)
import Landing from '../screens/signedOut/Home' //non-user home (needs to be double checked)
import SignIn from '../screens/signedOut/LogIn'  //login page (complete)
import SignOut from '../screens/signedOut/SignOut'//(complete)
import SignUp from '../screens/signedOut/Join' //sign-up page (complete)
// import Roster from '../screens/Roster'//needs to be created
import Rosters from '../screens/Rosters'//(complete)
// import RosterCreate from '../screens/RosterCreate'//needs to be created
// import RosterEdit from '../screens/RosterEdit'//needs to be created

// import Player from '../screens/Player'//needs to be created
// import Rosters from '../screens/Rosters'//needs to be created

import AuthenticatedRoute from './AuthenticatedRoute' //(complete)

const Routes = ({ user, rosters, players, setUser, clearUser, addRoster, addPlayer }) => (
    <Switch>
        <Route
            exact
            path='/'
            render={props => (user ? <Home/> : <Landing {...props} rosters={rosters} players={players} />)}
            // render={() => <Landing/>}
            // render={() => <Home/>}

        />
        <Route
            exact
            path='/sign-in'
            render={props => <SignIn {...props} setUser={setUser} user={user}/>}
        />
        <Route
            exact
            path='/sign-up'
            render={props => <SignUp {...props} setUser={setUser}/>}
            // render={() => <SignUp/>}
        />
        <Route
            exact
            path='/sign-out'
            render={props => <SignOut {...props} clearUser={clearUser} user={user}/>}
        />
        <AuthenticatedRoute
            exact
            path='/rosters'
            user={user}
            render={props => <Rosters {...props} user={user} rosters={rosters}/>}
        />

    </Switch>

)

export default Routes