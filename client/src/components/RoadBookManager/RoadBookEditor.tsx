import React, { useReducer, useEffect, FormEvent, useState, createContext } from 'react';
import { IRoadBook } from '../../../../shared/src/types/IRoadBook';
import { Grid, TextField, Button, makeStyles, createStyles, Theme } from '@material-ui/core';
import { useParams, Link, useHistory } from 'react-router-dom';
import QuestionList from 'components/Question/Edit/QuestionList';

type State = {
    RoadBook: IRoadBook | any;
    IsEdit: boolean;
}
export type Action = {
    type: string,
    payload?: any
}

interface RoadBookEditorProps {
    IsEdit: boolean;
}

export const RoadBookEditorContext = createContext<{ editorState: State, dispatch: (action: Action) => void }>({ editorState: {} as State, dispatch: () => { } });

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

export default function RoadBookEditor(props: RoadBookEditorProps) {
    const classes = useStyles();
    const { objectId } = useParams();
    const history = useHistory();
    const [state, dispatch] = useReducer(reducer, { RoadBook: { Name: '', Description: '' }, IsEdit: props.IsEdit });

    useEffect(() => {
        if (objectId && state.IsEdit) {
            fetch("http://localhost:4000/RoadBook/" + objectId)
                .then(res => res.json())
                .then(json => {
                    dispatch({ type: 'setRoadBook', payload: json })
                })
        }
    }, []);

    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
        var method: string = state.IsEdit ? 'PUT' : 'POST';
        fetch('http://localhost:4000/RoadBook',
            {
                method: method, body: JSON.stringify(state.RoadBook),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
            .then(response => {
                history.push('/RoadBookManager');
            })
            .catch(error => console.log('ERROR'));
    }

    return (
        <RoadBookEditorContext.Provider value={{ editorState: state, dispatch }}>
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField variant="filled" className={classes.filledInput} id="roadBookName"
                            label="Name" onChange={(e) => dispatch({ type: 'changeName', payload: e.target.value })}
                            value={state.RoadBook.Name} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="filled" className={classes.filledInput} id="roadBookDescription"
                            label="Description" onChange={(e) => dispatch({ type: 'changeDescription', payload: e.target.value })}
                            value={state.RoadBook.Description} />
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{ float: 'right' }}>
                            <Button variant="contained" type="submit" className={classes.paddedButton} color="primary">Save Changes</Button>
                            <Button component={Link} to="/RoadBookManager" className={classes.paddedButton} variant="contained" color="default" >Cancel</Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
            <QuestionList></QuestionList>
        </RoadBookEditorContext.Provider>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    filledInput: { margin: theme.spacing(2), width: '80%' },
    paddedButton: { marginRight: theme.spacing() },
}));