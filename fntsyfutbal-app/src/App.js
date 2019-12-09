import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'

import Home from './components/routes/Home'
import SignUpIn from './components/routes/SignUpIn'
import Info from './components/routes/Info'
import Roster from './components/routes/Roster'
import Players from './components/routes/Players'

const App = (props) => (
  <React.Fragment>
    <div className="App">
      <h1>hello</h1>
      {/* <h3>{props.location.state ? props.location.state.msg : null}</h3> */}
    </div>
  </React.Fragment>  
    

)

export default App;
