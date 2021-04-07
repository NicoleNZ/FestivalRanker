import { useEffect } from "react";
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/core/Icon/Icon';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router'; 

    const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    title: {
        flex: 1
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    }));

const Festival = () => {
    
    const classes = useStyles();
    const history = useHistory();
    const token = window.localStorage.getItem('token')
    
    useEffect((history, token) => {
            // console.log(token) here to check what 'no token' returns
        if (token === null) {
            history.replace('/')
            }
    }, []);

    const logoutButtonClick = () => {
        window.localStorage.removeItem('token');
        history.replace('/');
    };

    if (token === null) {
        return null
    };

    const addNewFestivalClick = () => {
        
    };

    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" className={classes.title} color="inherit" noWrap>
                Festival Bucket List
            </Typography>
            <Button variant="contained" color="secondary" onClick={logoutButtonClick}>
                Logout
            </Button>
            </Toolbar>
        </AppBar>
        <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Festival Bucket List
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Keep track of your bucket-list festivals!
                </Typography>
                <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                    <Button variant="contained" color="primary" onClick={addNewFestivalClick}>
                        Add New Festival
                    </Button>
                    </Grid>
                </Grid>
                </div>
            </Container>
            </div>
        </main>
        </React.Fragment>
    );
}

export { Festival }


