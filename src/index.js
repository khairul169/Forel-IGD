import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NotFound from './NotFound';

const App = () => (
  <Router>
    <CssBaseline />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
