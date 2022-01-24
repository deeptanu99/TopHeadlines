import React from 'react'
import NavBar from './components/Navbar.js'
import Newsbatch from './components/Newsbatch.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = ()=> {
  
 
  return (
    <div>
      <Router>
      <NavBar/> 
      <Switch>
        <Route exact path="/"><Newsbatch key="general" pageSize={pageSize}  category="general"/></Route> 
        <Route exact path="/business"><Newsbatch key="business" pageSize={pageSize} category="business"/></Route> 
        <Route exact path="/entertainment"><Newsbatch   key="entertainment" pageSize={pageSize}  category="entertainment"/></Route> 
        <Route exact path="/general"><Newsbatch key="general" pageSize={pageSize} category="general"/></Route> 
        <Route exact path="/health"><Newsbatch key="health" pageSize={pageSize} category="health"/></Route> 
        <Route exact path="/science"><Newsbatch key="science" pageSize={pageSize} category="science"/></Route> 
        <Route exact path="/sports"><Newsbatch key="sports" pageSize={pageSize} category="sports"/></Route> 
        <Route exact path="/technology"><Newsbatch key="technology" pageSize={pageSize} category="technology"/></Route> 
      </Switch>
      </Router>
    </div>
  )

}

export default App;