import { render } from '@testing-library/react';
import { Action, RoadBookEditorContext } from '../../RoadBookManager/RoadBookEditor';
import React, { useContext, useReducer } from 'react';
import { Button, Grid, Typography, Divider, Dialog } from '@material-ui/core';
import IQuestion from '../../../../../shared/src/types/IQuestion';
import QuestionEditor from './QuestionEditor';

type State = {
    DialogOpen: boolean;
    CurrentQuestion?: IQuestion;
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case ('toggleDialog'):
            return { ...state, DialogOpen: !state.DialogOpen, CurrentQuestion: undefined };
        default:
            return state;
    }
}

export default function QuestionList() {
    const editorContext = useContext(RoadBookEditorContext);
    const [state, dispatch] = useReducer(reducer, { DialogOpen: false, CurrentQuestion: undefined });


    return (
        <Grid container>
            <div style={{ width: '100%', marginLeft: '10%', marginRight: '10%', marginTop: 24 }}>
                <Grid item xs={12}>
                    <Divider />
                    <Typography variant="h4" >Questions</Typography>
                    <div style={{ float: "right" }}>
                        <Button variant="contained" color="primary" onClick={() => dispatch({ type: 'toggleDialog' })}>Add Question</Button>
                    </div>
                </Grid>
            </div>
            <Dialog
                open={state.DialogOpen}
                onClose={() => dispatch({ type: 'toggleDialog' })}
                maxWidth='md'
                fullWidth
            >
                <QuestionEditor EditQuestion={state.CurrentQuestion}></QuestionEditor>
            </Dialog>
        </Grid >
    );
}