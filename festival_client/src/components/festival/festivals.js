import { useEffect, useState } from "react";
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
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { FestivalList } from "./FestivalList";
import { AddFestival } from "./AddFestival";
import { EditFestival } from "./EditFestival";
import { DeleteFestival } from "./DeleteFestival";


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

    const [festivalList, setFestivalList] = useState([]); //this will be used to render a list of festivals on the UI when someone is logged in
    const [festivalEdit, setFestivalEdit] = useState ({
        festival_name: "",
        location: "",
        duration: "",
        description: "",
        link: ""
    }); // this will be used to edit fesivals
    const [festivalDelete, setFestivalDelete] = useState ({
        festival_name: "",
        location: "",
        duration: "",
        description: "",
        link: ""
    }); //this will be used to delete festivals

    const handleAddFestival = (
        festival_name,
        location,
        duration,
        description,
        link) => {
            const newFestival = { 
                festival_name: festival_name,
                location: location,
                duration: duration,
                description: description,
                link: link
            };
        console.log(typeof festivalList);
        const newFestivals = [...festivalList];
        newFestivals.push(newFestival); //this is pushing the newly created festival into the array of festival objects
        setFestivalList(newFestivals); //this 'updates' the festivalList in the memory to contain the newly created festival
        
        fetch("http://localhost:3000/api/festivals", { //this is going to POST the newly created product to the MongoDB database
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(newFestival),
        })
        .then((response) => {
        console.log("response: ", response);
        });   
    };

    useEffect(() => {
    fetch("http://localhost:3000/api/festivals", { 
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
    }
    })
    .then((response) => {
        console.log("response: ", response);
        return response.json();
    })
    .then((data) => {
            console.log("Current festivalData is: ", data);
            setFestivalList(data); 
        });
    }, [token]);  
    
    const handleFestivalClick = (festivalIndex) => {
        console.log("festivalIndex: ", festivalIndex);        
        const festival = festivalIndex[festivalIndex];
        console.log("festival: ", festival);
        setFestivalEdit(festival);
        setFestivalDelete(festival);
    }

    const handleEditFestival = (festival) => {
        console.log("handleEditFestival: ", festival);
        const foundFestival = festivalList.findIndex((festivalEl) => {
            return festivalEl._id === festival._id
        });
            const allFestivals = [...festivalList];
            allFestivals[foundFestival] = festival;
            console.log("festival: ", festival)
            console.log("festival._id: ", festival._id);
        fetch(`http://localhost:3000/api/festivals/${festival._id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(festival)
        })
        .then((response) => {
            console.log('Patch response:', response);
        });

        fetch("http://localhost:3000/api/festivals", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
            })
            .then((response) => {
                console.log("Response: ", response);
                return response.json();
            })
            .then((festivalData) => {
                console.log("Current festivalData is: ", festivalData);
                setFestivalList(festivalData); 
            });    
    };

    const handleDeleteFestival = (festival) => {
        console.log("handleDeleteFestival: ", festival);
        const foundFestival = festivalList.findIndex((festivalEl) => {
            return festivalEl._id === festival._id
        });
            const allFestivals = [...festivalList];
            allFestivals[foundFestival] = festival;
            console.log("festival: ", festival)
            console.log("festival._id: ", festival._id);
        fetch(`http://localhost:3000/api/festivals/${festival._id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log('Delete response:', response);
        });  
        
        fetch("http://localhost:3000/api/festivals", { 
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
            })
            .then((response) => {
                console.log("Response: ", response);
                return response.json();
            })
            .then((festivalData) => {
                console.log("Current festivalData is: ", festivalData);
                setFestivalList(festivalData); 
            });
    };          

    if (token === null) {
        return null
    };

    return (
        <BrowserRouter>
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
                    <Link className="nav-link" to="/create">Add Festival</Link>
                    </Grid>
                    <Grid item>
                    <Link className="nav-link" colour="secondary" to="/edit">Edit Festival</Link>
                    </Grid>
                    <Grid item>
                    <Link className="nav-link" to="/delete">Delete Festival</Link> 
                    </Grid>
                    <Grid container spacing={2} justify="center">
                    <Grid item>
                    <FestivalList festivals={festivalList} handleClick={handleFestivalClick} />
                    </Grid>
                </Grid>
                </Grid>
                </div>
            </Container>
            <Switch>
                <Route path="/create">
                    <AddFestival submit={handleAddFestival}/>
                </Route>
                <Route path="/edit">
                    <EditFestival submit={handleEditFestival} festival={festivalEdit} />
                </Route>
                <Route path="/delete">
                    <DeleteFestival submit={handleDeleteFestival} festival={festivalDelete} />
                </Route>
            </Switch>
            </div>
        </main>
        </React.Fragment>
        </BrowserRouter>
    );
}

export { Festival }


