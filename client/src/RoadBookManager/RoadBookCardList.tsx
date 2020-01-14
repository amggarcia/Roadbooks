import React, { useState, useEffect, createContext, useReducer } from 'react';
import { Toolbar, Button, InputBase, Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles, fade } from '@material-ui/core/styles';
import RoadBookCard from './RoadBookCard';
import { IRoadBook } from '../../../shared/src/types/IRoadBook';
import { Link } from 'react-router-dom';

type State = {
    roadBooks: IRoadBook[],
    loading: boolean,
    fetchError: any,
    refetchList: boolean
}
type Action = {
    type: string,
    payload?: any,
    target: string
}
const initialState: State = {
    roadBooks: [],
    loading: false,
    fetchError: null,
    refetchList: false
}

function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case ('SET_VALUE'):
            {
                return { ...state, [action.target]: action.payload };
            }
        case ('REFRESH_LIST'):
            {
                return { ...state, refetchList: !state.refetchList }
            }
        default:
            return state;
    }
}
export const RoadBookCardListContext = React.createContext<{
    state: typeof initialState;
    dispatch: (action: Action) => void;
}>({
    state: initialState,
    dispatch: () => { }
});;


export default function RoadBookCardList() {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    useEffect(() => {
        dispatch({ type: 'SET_VALUE', payload: true, target: 'loading' });
        fetch("http://localhost:4000/RoadBook")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: 'SET_VALUE', payload: false, target: 'loading' });
                dispatch({ type: 'SET_VALUE', payload: json, target: 'roadBooks' });
            }).catch(err => {
                dispatch({ type: 'SET_VALUE', payload: false, target: 'fetchError' });
                dispatch({ type: 'SET_VALUE', payload: err, target: 'fetchError' });
            })
    }, [state.refetchList]);

    if (state.loading) return <div>Loading.....</div>
    else if (state.fetchError) return <div>Fodeu</div>
    else {
        return (
            <RoadBookCardListContext.Provider value={value}>
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
                                    <Button className={classes.paddedButton} variant="contained" color="primary"
                                        component={Link} to='RoadBookManager/Create'>New RoadBook</Button>
                                </div>
                            </Grid>
                        </Toolbar>
                    </Grid>

                    {state.roadBooks.map(roadBook => {
                        return (<Grid item xs={3} style={{ margin: 24 }}>
                            <RoadBookCard RoadBook={roadBook}></RoadBookCard>
                        </Grid>)
                    })
                    }
                </Grid >
            </RoadBookCardListContext.Provider>
        )
    }
}


const useStyles = makeStyles((theme: Theme) => createStyles({
    paddedButton: { marginRight: theme.spacing() },
    searchBar: { width: '100%', backgroundColor: fade(theme.palette.common.white, 0.15), paddingLeft: 10 },
}));