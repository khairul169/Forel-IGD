import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Drawer, { DrawerWidth } from './Drawer';

// Routes
import Routes from './Routes';
import NotFound from './NotFound';

// Actions
import Actions from '../Redux/Actions';
import API from '../API';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  appBar: {
    width: `calc(100% - ${DrawerWidth}px)`,
    marginLeft: DrawerWidth,
  },
  appBarSearch: {
    flex: 1,
  },
  appBarUserName: {
    marginRight: 16,
  },
  navText: {
    marginLeft: 16,
    marginTop: 12,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    marginLeft: DrawerWidth,
    padding: 16,
  },
}));

const HeaderTitle = () => (
  <Switch>
    {Routes.map((item, index) => (
      <Route path={item.path} exact={item.exact} key={index}>
        <Typography variant="h6">{item.title}</Typography>
      </Route>
    ))}
    <Typography variant="h6">Formulir Elektronik IGD RSIA Puri</Typography>
  </Switch>
);

const Content = () => (
  <Switch>
    {Routes.map((item, index) => (
      <Route path={item.path} exact={item.exact} key={index}>
        {item.content}
      </Route>
    ))}
    <NotFound />
  </Switch>
);

const Home = ({ userData, setAuthToken, setUserData }) => {
  const styles = useStyles();
  const [redirectLogin, setRedirectLogin] = useState(false);

  const fetchToken = async () => {
    try {
      // Get user token from session
      const token = sessionStorage.getItem('AUTH_TOKEN');

      // Fetch user data
      if (!token || token.error) {
        throw new Error();
      }

      setAuthToken(token);
      const user = await API.getUser();

      if (!user || user.error) {
        throw new Error();
      }

      setUserData(user.result);
    } catch (error) {
      sessionStorage.clear();
      setRedirectLogin(true);
    }
  };

  const onLoad = () => {
    fetchToken();
  };

  useEffect(onLoad, []);

  return (
    <div className={styles.root}>
      {redirectLogin && <Redirect to="/login" />}
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <HeaderTitle />
          <div className={styles.appBarSearch} />
          <Typography className={styles.appBarUserName}>{userData && userData.nama}</Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer />

      <main className={styles.content}>
        <div className={styles.toolbar} />
        <Content />
      </main>
    </div>
  );
};

const mapStateToProps = ({ userData }) => ({
  userData,
});

const mapDispatchToProps = {
  setAuthToken: Actions.setAuthToken,
  setUserData: Actions.setUserData,
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
