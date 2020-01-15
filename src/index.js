import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import {
    Grid,
    Typography as Text,
    makeStyles
} from '@material-ui/core'

const App = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Grid container>
                <Grid item xs={6} className={styles.test}>
                    <Text variant='h2' gutterBottom>Hello world!</Text>
                </Grid>
                <Grid item xs={6} className={styles.test1}>
                    <Text color='primary'>Test</Text>
                </Grid>
            </Grid>
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        height: '100vh',
    },
    test: {
        background: 'red'
    },
    test1: {
        background: 'blue'
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
