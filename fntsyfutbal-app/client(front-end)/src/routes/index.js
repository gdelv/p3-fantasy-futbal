import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/signedIn/HomeSignedIn'
import Landing from '../screens/signedOut/Home' 
import SignIn from '../screens/signedOut/LogIn'  
import SignOut from '../screens/signedOut/SignOut'
import SignUp from '../screens/signedOut/Join' 
import Roster from '../screens/signedIn/Roster'
import Rosters from '../screens/signedIn/Rosters'
import RosterCreate from '../screens/signedIn/CreateRoster'
import RosterEdit from '../screens/signedIn/RosterEdit' 
// import CreatePlayer from '../screens/signedIn/CreatePlayers'

// import Player from '../screens/signedIn/Player'
// import Players from '../screens/signedIn/Players'

// import AuthenticatedRoute from './AuthenticatedRoute'


const Routes = ({ user, rosters, players, setUser, clearUser, addRoster }) => (
    <Switch>
        <Route
            exact
            path='/'

            render={props => (user ?  <Home {...props} rosters={rosters} players={players} /> : <Landing />  )}

        />
        <Route
            exact
            path='/sign-in'
            render={props => <SignIn {...props} setUser={setUser} user={user} />}
        />
        <Route
            exact
            path='/sign-up'
            render={props => <SignUp {...props} setUser={setUser} />}
        />
        <Route
            exact
            path='/sign-out'
            render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
        />
        <Route
            exact
            path='/rosters'
            // user={user}
            render={props => <Rosters {...props} user={user} rosters={rosters}  user={user}/>}
        />
        <Route
            exact
            path='/rosters/:id'
            // user={user}
            render={props => <Roster {...props}  user={user} />}
        />
        <Route
            exact
            // user={user}
            path="/rosters/:id/edit"
            render={props => <RosterEdit {...props}  user={user} />}
        />
        <Route
            // user={user}
            path="/create"
            render={props => <RosterCreate {...props} addRoster={addRoster}  user={user} />}
        />
        {/* <AuthenticatedRoute
            exact
            path='/players'
            user={user}
            render={props => <Players {...props} user={user} players={players} />}
        />

        <AuthenticatedRoute
            exact
            path='/players/:id'
            user={user}
            render={props => <Player {...props} />}
        />

        <AuthenticatedRoute
            exact
            path='/createplayer'
            user={user}
            render={props => <CreatePlayer {...props} addPlayer={addPlayer} />}
        /> */}

    </Switch>

)

export default Routes