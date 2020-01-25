import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import NotFound from './NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
