import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Switch, Route } from 'react-router-dom';

// Components
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Drawer, { DrawerWidth } from './Drawer';

// Icons

// Routes
import Routes from './Routes';
import NotFound from './NotFound';

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

const Home = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <HeaderTitle />
          <div className={styles.appBarSearch} />
          <Typography className={styles.appBarUserName}>Ns. Khairul Hidayat, S.Tr.Kep</Typography>
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

export default Home;
