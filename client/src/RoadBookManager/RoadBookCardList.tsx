import React, { useState, useEffect } from 'react';
import { Toolbar, Button, InputBase, Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles, fade } from '@material-ui/core/styles';
import RoadBookCard from './RoadBookCard';
import { IRoadBook } from '../../../shared/src/types/IRoadBook';
export default function RoadBookCardList() {
    const classes = useStyles();
    const [roadBooks, setRoadBooks] = useState<IRoadBook[]>([]);
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:4000/RoadBook")
            .then(response => response.json())
            .then(json => {
                setLoading(false);
                setRoadBooks(json);
            }).catch(err => {
                setLoading(false);
                console.log(err);
                setFetchError(err);
            })
    }, []);

    if (loading) return <div>Loading.....</div>
    else if (fetchError) return <div>Fodeu</div>
    else {
        return (
            <Grid container justify="space-evenly">
                <Grid item xs={12}>
                    <Toolbar>
                        <Grid item xs={6}>
                            <div >
                                <InputBase className={classes.searchBar} placeholder="Search" />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{ float: "right" }}>
                                <Button className={classes.paddedButton} variant="contained" color="primary">New RoadBook</Button>
                                <Button className={classes.paddedButton} variant="contained" color="default">Edit RoadBook</Button>
                                <Button variant="contained" color="secondary">Delete RoadBook</Button>
                            </div>
                        </Grid>
                    </Toolbar>
                </Grid>

                {roadBooks.map(roadBook => {
                    return (<Grid item xs={3} style={{ margin: 24 }}>
                        <RoadBookCard RoadBook={roadBook}></RoadBookCard>
                    </Grid>)
                })
                }
            </Grid >
        )
    }
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    paddedButton: { marginRight: theme.spacing() },
    searchBar: { width: '100%', backgroundColor: fade(theme.palette.common.white, 0.15), paddingLeft: 10 },
}));