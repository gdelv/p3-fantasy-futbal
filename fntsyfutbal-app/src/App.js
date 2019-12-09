import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'

import Home from './components/routes/Home'
import Join from './components/routes/Join'
import LogIn from './components/routes/LogIn'
import CreateRoster from './components/routes/CreateRoster'
import Roster from './components/routes/Roster'
import Player from './components/routes/Player'
import HomeSignedIn from './components/routes/HomeSignedIn'

const App = (props) => (
  <React.Fragment>
    <div className="App">
      <h3>{props.location.state ? props.location.state.msg : null}</h3>
      <Route exact path ='/' component={Home} />
      <Route exact path ='/userhome' component={HomeSignedIn} />

      <Route exact path ='/join' component={Join} />
      <Route exact path ='/login' component={LogIn} />
      <Route exact path ='/create' component={CreateRoster} />
      <Route exact path ='/login/:id/roster' component={Roster} />
      <Route exact path ='/login/:id/roster/player' component={Player} />

      
    </div>
  </React.Fragment>  
    

)

export default withRouter(App);
