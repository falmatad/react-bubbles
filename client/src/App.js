import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BubblePage from './components/BubblePage';

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login}/>
        <Switch>
          <PrivateRoute exact path="/" component={BubblePage}/>
          <Route exact path="/login" component={Login}/>
          {/* <Route exact path="/student/:id" component={Student}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
