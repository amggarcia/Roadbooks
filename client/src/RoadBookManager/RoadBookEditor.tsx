import React, { useState, useReducer, useEffect } from 'react';
import { IRoadBook } from '../../../shared/src/types/IRoadBook';
import { Grid, TextField, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';

interface RoadBookEditorProps {
    RoadBook: IRoadBook
}
type State = {
    RoadBook: IRoadBook | any;
}
type Action = {
    type: string,
    payload: string | IRoadBook
}
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case ('changeName'):
            return { ...state, RoadBook: { ...state.RoadBook, Name: action.payload } }
        case ('changeDescription'):
            return { ...state, RoadBook: { ...state.RoadBook, Description: action.payload } }
        case ('setRoadBook'):
            return { ...state, RoadBook: action.payload }
        default:
            return state;
    }
}

export default function RoadBookEditor() {
    const { objectId } = useParams();
    const [state, dispatch] = useReducer(reducer, { RoadBook: {} });

    useEffect(() => {
        if (objectId) {
            fetch("http://localhost:4000/RoadBook/" + objectId)
                .then(res => res.json())
                .then(json => {
                    dispatch({ type: 'setRoadBook', payload: json })
                })
        }
    }, []);



    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField id="roadBookName" label="Name" onChange={(e) => dispatch({ type: 'changeName', payload: e.target.value })} value={state.RoadBook.Name} />
            </Grid>
            <Grid item xs={12}>
                <TextField id="roadBookDescription" label="Description" onChange={(e) => dispatch({ type: 'changeDescription', payload: e.target.value })} value={state.RoadBook.Description} />
            </Grid>
            <Button onClick={() => { console.log(state.RoadBook) }}></Button>
        </Grid>
    )
}