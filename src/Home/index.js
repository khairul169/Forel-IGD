import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';

// Icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

const sidebarWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  appBar: {
    width: `calc(100% - ${sidebarWidth}px)`,
    marginLeft: sidebarWidth,
  },
  appBarSearch: {
    flex: 1,
  },
  appBarUserName: {
    marginRight: 16,
  },
  drawer: {
    width: sidebarWidth,
    display: 'flex',
  },
  drawerPaper: {
    width: sidebarWidth,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    marginLeft: 16,
    marginTop: 12,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    marginLeft: sidebarWidth,
    padding: 16,
  },
}));

const AppNavigation = () => {
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
    <Drawer className={styles.drawer} classes={{ paper: styles.drawerPaper }} open variant="permanent" anchor="left">
      <div className={styles.drawerHeader}>
        <Typography variant="h6" align="center">Forel IGD</Typography>
      </div>
      <Divider />
      <List subheader={<ListSubheader>Navigasi</ListSubheader>}>
        <ListItem dense button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText>Halaman</ListItemText>
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
            <ListItem dense button>
              <ListItemIcon />
              <ListItemText>Daftar Baru</ListItemText>
            </ListItem>
            <ListItem dense button>
              <ListItemIcon />
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
            <ListItem dense button>
              <ListItemIcon />
              <ListItemText>Ponek</ListItemText>
            </ListItem>
            <ListItem dense button>
              <ListItemIcon />
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
            <ListItem dense button>
              <ListItemIcon />
              <ListItemText>Pengkajian Medis</ListItemText>
            </ListItem>
            <ListItem dense button>
              <ListItemIcon />
              <ListItemText>Ringkasan Pasien</ListItemText>
            </ListItem>
            <ListItem dense button>
              <ListItemIcon />
              <ListItemText>Rencana Tindak Lanjut</ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </List>

      <div style={{ flex: 1 }} />
      <Divider />
      <List>
        <ListItem dense button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText>Keluar</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

const Home = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <Typography variant="h6">Halaman Utama</Typography>
          <div className={styles.appBarSearch} />
          <Typography className={styles.appBarUserName}>Ns. Khairul Hidayat, S.Tr.Kep</Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppNavigation />

      <main className={styles.content}>
        <div className={styles.toolbar} />
        <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
      </main>
    </div>
  );
};

export default Home;
