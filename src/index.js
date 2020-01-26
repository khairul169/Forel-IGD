import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from './Redux/Store';

// Routes
import Login from './Login';
import Home from './Home';

const App = () => (
  <ReduxProvider store={reduxStore}>
    <Router>
      <CssBaseline />
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={Home} />
      </Switch>
    </Router>
  </ReduxProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
