import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import {
    Typography as Text,
    makeStyles
} from '@material-ui/core'

const App = () => {
    const styles = useStyles();

    return (
        <div>
            <Text variant='h4' className={styles.test}>Hello world!</Text>
            <Text color='primary'>Test</Text>
        </div>
    );
}

const useStyles = makeStyles({
    test: {
        marginBottom: 10
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
