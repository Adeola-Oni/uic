import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing } from './components/Landing/Landing';
import { Apply } from './components/Apply';
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Landing}></Route>
          <Route exact path={'/apply'} component={Apply}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
