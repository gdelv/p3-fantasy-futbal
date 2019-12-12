import React from 'react';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom'

import Home from './screens/signedOut/Home'
import Join from './screens/signedOut/Join'
import LogIn from './screens/signedOut/LogIn'
import CreateRoster from './screens/signedIn/CreateRoster'
import Roster from './screens/signedIn/Roster'
import Player from './screens/signedIn/Player'
import HomeSignedIn from './screens/signedIn/HomeSignedIn'

const App = (props) => (
  <>

    <Switch>
      {/* <h3>{props.location.state ? props.location.state.msg : null}</h3>  */}
      <Route exact path='/' component={Home} />
      <Route exact path='/userhome' component={HomeSignedIn} />
      <Route exact path='/join' component={Join} />
      <Route exact path='/login' component={LogIn} />
      <Route exact path='/create' component={Roster} />
      <Route exact path='/login/:id/roster' component={Roster} />
      <Route exact path='/login/:id/roster/player' component={Player} />
    </Switch>
  </>


)

export default App;
