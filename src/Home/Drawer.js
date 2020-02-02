import React, { useState } from 'react';
import { connect } from 'react-redux';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link as RouteLink, Redirect } from 'react-router-dom';

// Components
import Typography from '@material-ui/core/Typography';
import MaterialDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import NoteAdd from '@material-ui/icons/NoteAdd';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import ExitToApp from '@material-ui/icons/ExitToApp';

// Etc
import Actions from '../Redux/Actions';

export const DrawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: DrawerWidth,
    display: 'flex',
  },
  drawerPaper: {
    width: DrawerWidth,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Drawer = ({ setAuthToken, userData }) => {
  const styles = useStyles();
  const [collapsedMenu, setCollapedMenu] = useState(0);
  const [redirectLogin, setRedirectLogin] = useState(false);

  const toggleMenu = (id) => {
    if (id === collapsedMenu) {
      setCollapedMenu(0);
    } else {
      setCollapedMenu(id);
    }
  };

  let accountType = 0;

  if (userData) {
    const { type } = userData;
    accountType = parseInt(type, 10);
  }

  return (
    <MaterialDrawer className={styles.drawer} classes={{ paper: styles.drawerPaper }} open variant="permanent" anchor="left">
      <div className={styles.drawerHeader}>
        <Typography variant="h6" align="center">Forel IGD</Typography>
      </div>
      <Divider />
      <List subheader={<ListSubheader>Navigasi</ListSubheader>}>
        <ListItem button component={RouteLink} to="/utama">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText>Halaman Utama</ListItemText>
        </ListItem>
      </List>

      <Divider />
      <List subheader={<ListSubheader>Menu</ListSubheader>}>
        {accountType === 0 && (
        <div>
          <ListItem button onClick={() => toggleMenu(1)}>
            <ListItemIcon><NoteAdd /></ListItemIcon>
            <ListItemText>Pendaftaran</ListItemText>
            {collapsedMenu === 1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={collapsedMenu === 1}>
            <List disablePadding>
              <ListItem dense button component={RouteLink} to="/daftar">
                <ListItemIcon><div /></ListItemIcon>
                <ListItemText>Daftar Baru</ListItemText>
              </ListItem>
              <ListItem dense button component={RouteLink} to="/pasien-lama">
                <ListItemIcon><div /></ListItemIcon>
                <ListItemText>Pasien Lama</ListItemText>
              </ListItem>
            </List>
          </Collapse>
        </div>
        )}

        <ListItem button onClick={() => toggleMenu(2)}>
          <ListItemIcon><PeopleAlt /></ListItemIcon>
          <ListItemText>Pasien</ListItemText>
          {collapsedMenu === 2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={collapsedMenu === 2}>
          <List disablePadding>
            <ListItem dense button component={RouteLink} to="/pasien-ponek">
              <ListItemIcon><div /></ListItemIcon>
              <ListItemText>Ponek</ListItemText>
            </ListItem>
            <ListItem dense button component={RouteLink} to="/pasien-non-ponek">
              <ListItemIcon><div /></ListItemIcon>
              <ListItemText>Non Ponek</ListItemText>
            </ListItem>
          </List>
        </Collapse>

        {accountType === 1 && (
        <div>
          <ListItem button onClick={() => toggleMenu(3)}>
            <ListItemIcon><AssignmentInd /></ListItemIcon>
            <ListItemText>Pemeriksaan Dokter</ListItemText>
            {collapsedMenu === 3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={collapsedMenu === 3}>
            <List disablePadding>
              <ListItem dense button component={RouteLink} to="/pengkajian">
                <ListItemIcon><div /></ListItemIcon>
                <ListItemText>Pengkajian Medis</ListItemText>
              </ListItem>
            </List>
          </Collapse>
        </div>
        )}
      </List>

      <div style={{ flex: 1 }} />
      <Divider />
      <List>
        <ListItem
          button
          onClick={() => {
            sessionStorage.clear();
            setAuthToken(null);
            setRedirectLogin(true);
          }}
        >
          <ListItemIcon><ExitToApp /></ListItemIcon>
          <ListItemText>Keluar</ListItemText>
        </ListItem>
      </List>
      {redirectLogin && <Redirect to="/login" />}
    </MaterialDrawer>
  );
};


const mapStateToProps = ({ userData }) => ({
  userData,
});

const mapDispatchToProps = {
  setAuthToken: Actions.setAuthToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
