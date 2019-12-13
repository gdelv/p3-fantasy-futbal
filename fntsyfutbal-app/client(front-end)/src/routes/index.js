import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/signedIn/HomeSignedIn' //user home (commented out previous home/currently using same layout as solution branch)
import Landing from '../screens/signedOut/Home' //non-user home (commented out previous home/currently using same layout as solution branch)
import SignIn from '../screens/signedOut/LogIn'  //login page (complete)
import SignOut from '../screens/signedOut/SignOut'//(complete)
import SignUp from '../screens/signedOut/Join' //sign-up page (complete)
import Roster from '../screens/signedIn/Roster'//(complete)
import Rosters from '../screens/signedIn/Rosters'//(complete)
import RosterCreate from '../screens/signedIn/CreateRoster'//needs to be created
import RosterEdit from '../screens/signedIn/RosterEdit' //(complete)
import CreatePlayer from '../screens/signedIn/CreatePlayers'

import Player from '../screens/signedIn/Player'//(complete)
import Players from '../screens/signedIn/Players'// (complete)

import AuthenticatedRoute from './AuthenticatedRoute' //(complete)


const Routes = ({ user, rosters, players, setUser, clearUser, addRoster, addPlayer }) => (
    <Switch>
        <Route
            exact
            path='/'
            // render={props => (user ? <Landing /> : <Home {...props} rosters={rosters} players={players} />  )}
            render={props => (user ?  <Home {...props} rosters={rosters} players={players} /> : <Landing />  )}

//             render={props => (user ? <Home {...props} rosters={rosters} players={players} /> : <Landing />)}

        // render={() => <Landing/>}
        // render={() => <Home/>}

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
            // render={() => <SignUp setUser={setUser}/>}
        />
        <Route
            exact
            path='/sign-out'
            render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
        />
        <AuthenticatedRoute
            exact
            path='/rosters'
            user={user}
            render={props => <Rosters {...props} user={user} rosters={rosters} />}
        />
        <AuthenticatedRoute
            exact
            path='/rosters/:id'
            user={user}
            render={props => <Roster {...props} />}
        />
        <AuthenticatedRoute
            exact
            user={user}
            path="/rosters/:id/edit"
            render={props => <RosterEdit {...props} />}
        />
        <AuthenticatedRoute
            user={user}
            path="/create"
            render={props => <RosterCreate {...props} addRoster={addRoster} />}
        />
        <AuthenticatedRoute
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
        />

    </Switch>

)

export default Routes