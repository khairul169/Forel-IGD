import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link as RouteLink } from 'react-router-dom';

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

const Drawer = () => {
  const styles = useStyles();
  const [collapsedMenu, setCollapedMenu] = useState(0);

  const toggleMenu = (id) => {
    if (id === collapsedMenu) {
      setCollapedMenu(0);
    } else {
      setCollapedMenu(id);
    }
  };

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
        <ListItem button onClick={() => toggleMenu(1)}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText>Pendaftaran</ListItemText>
          {collapsedMenu === 1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={collapsedMenu === 1}>
          <List disablePadding>
            <ListItem dense button component={RouteLink} to="/daftar-baru">
              <ListItemIcon><div /></ListItemIcon>
              <ListItemText>Daftar Baru</ListItemText>
            </ListItem>
            <ListItem dense button component={RouteLink} to="/daftar-lama">
              <ListItemIcon><div /></ListItemIcon>
              <ListItemText>Pasien Lama</ListItemText>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => toggleMenu(2)}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
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

        <ListItem button onClick={() => toggleMenu(3)}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText>Pemeriksaan Dokter</ListItemText>
          {collapsedMenu === 3 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={collapsedMenu === 3}>
          <List disablePadding>
            <ListItem dense button component={RouteLink} to="/pengkajian">
              <ListItemIcon><div /></ListItemIcon>
              <ListItemText>Pengkajian Medis</ListItemText>
            </ListItem>
            <ListItem dense button component={RouteLink} to="/ringkasan">
              <ListItemIcon><div /></ListItemIcon>
              <ListItemText>Ringkasan Pasien</ListItemText>
            </ListItem>
            <ListItem dense button component={RouteLink} to="/rtl">
              <ListItemIcon><div /></ListItemIcon>
              <ListItemText>Rencana Tindak Lanjut</ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </List>

      <div style={{ flex: 1 }} />
      <Divider />
      <List>
        <ListItem button component={RouteLink} to="/logout">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText>Keluar</ListItemText>
        </ListItem>
      </List>
    </MaterialDrawer>
  );
};

export default Drawer;
