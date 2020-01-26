import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    fontSize: '1.1em',
    display: 'inline-block',
    position: 'relative',
    top: -14,
    left: -8,
    paddingLeft: 8,
    paddingRight: 8,
  },
}));

const Panel = ({ className, children, title }) => {
  const styles = useStyles();

  return (
    <Paper variant="outlined" className={className}>
      <Typography className={styles.title}>{title}</Typography>
      {children}
    </Paper>
  );
};

export default Panel;
