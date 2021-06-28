import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { About } from "./components/routes/About"; //debemos intalar esto antes npm i react-router-dom bootswatch
import { Processes } from "./components/routes/Market";
import { Navbar } from "./components/navbar/Navbar";
import { Alert } from "./components/alerts/Alert";



function App() {

  return (
    <Router>
    <Alert/>
    <Navbar/>
    <div className="container p-3"></div>
    <div>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/" component={Processes}/>
      </Switch>
    </div>
  </Router>
  )
}

export default App;


