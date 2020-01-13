import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import RoadBookCard from './RoadBookCard';
import { IRoadBook } from '../../../shared/src/types/IRoadBook';
export default function RoadBookCardList() {

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