import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import WebApp from './components/WebApp/WebApp';
import history from './history';

class App extends Component {
  render(){
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/app" exact component={WebApp}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
 