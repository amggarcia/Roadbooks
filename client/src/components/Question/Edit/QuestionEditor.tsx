import React, { useReducer, useEffect } from 'react';
import IQuestion from '../../../../../shared/src/types/IQuestion';
import { TextField, Grid, makeStyles, Theme, createStyles, DialogContent, Dialog, DialogActions, Button, InputLabel, Select, MenuItem, FormControl, GridList, GridListTile, fade } from '@material-ui/core';
import Action from '../../../../../shared/src/types/Action';
import IQuestionType from '../../../../../shared/src/types/IQuestionType';
import QuestionList from './QuestionList';
import IQuestionImage from '../../../../../shared/src/types/IQuestionImage';

interface QuestionEditorProps {
    EditQuestion?: IQuestion
}
type State = {
    Question: IQuestion,
    QuestionTypes: IQuestionType[],
    OpenUploadDialog: boolean,
    UploadedImagePath: string
}

var InitialState: State = {
    Question: { ...{} as IQuestion, Images: [] as IQuestionImage[] },
    QuestionTypes: [] as IQuestionType[],
    OpenUploadDialog: false,
    UploadedImagePath: ''
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case ('changeQuestionProp'):
            return { ...state, Question: { ...state.Question, [action.targetProp!]: action.payload } };
        case ('changeQuestionType'):
            return { ...state, Question: { ...state.Question, Type: state.QuestionTypes.find(type => type._id === action.payload) || {} as IQuestionType } };
        case ('setQuestionTypes'):
            return { ...state, QuestionTypes: action.payload };
        case ('toggleUploadModal'):
            return { ...state, UploadedImagePath: '', OpenUploadDialog: !state.OpenUploadDialog };
        case ('pushUploadedImage'):
            {
                var newImages = state.Question.Images;
                newImages.push({ ImagePath: state.UploadedImagePath } as IQuestionImage);
                return { ...state, Question: { ...state.Question, Images: newImages }, OpenUploadDialog: false, UploadedImagePath: '' };
            }
        case ('changeUploadPath'):
            return { ...state, UploadedImagePath: action.payload }
        default:
            return state;
    }
}

export default function QuestionEditor(props: QuestionEditorProps) {

    if (props.EditQuestion)
        InitialState.Question = props.EditQuestion;

    const [state, dispatch] = useReducer(reducer, InitialState);
    useEffect(() => {
        fetch('http://localhost:4000/QuestionType')
            .then(response => response.json())
            .then(json => dispatch({ type: 'setQuestionTypes', payload: json }))
    }, []);
    const classes = useStyles();
    return (
        <Grid container>
            <DialogContent>
                <Grid item xs={12}>
                    <FormControl variant="filled" fullWidth>
                        <InputLabel id="questionTypeLabel">Question Type</InputLabel>
                        <Select labelId="questionTypeLabel" fullWidth value={state.Question.Type ? state.Question.Type._id : ''} onChange={(e) => dispatch({ type: 'changeQuestionType', payload: e.target.value })}>
                            {state.QuestionTypes.map((type: IQuestionType) => <MenuItem value={type._id}>{type.Name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="filled" fullWidth className={classes.filledInput} id="questionTitle"
                        label="Title" onChange={(e) => dispatch({ type: 'changeQuestionProp', payload: e.target.value, targetProp: 'Title' })}
                        value={state.Question.Title} />
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="filled" fullWidth className={classes.filledInput} id="questionDescription"
                        label="Description" onChange={(e) => dispatch({ type: 'changeQuestionProp', payload: e.target.value, targetProp: 'Description' })}
                        value={state.Question.Description} />
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="filled" fullWidth className={classes.filledInput} id="questionQuestion"
                        label="Question" onChange={(e) => dispatch({ type: 'changeQuestionProp', payload: e.target.value, targetProp: 'Question' })}
                        value={state.Question.Question} />
                </Grid>
                <Grid item xs={12} style={{ marginTop: 24 }}>
                    <GridList cols={2.5} cellHeight={240} className={classes.gridList}>
                        {state.Question.Images.map((image, index) => (
                            <GridListTile key={index}><img src={image.ImagePath}></img></GridListTile>
                        ))}
                    </GridList>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' color='primary' className={classes.paddedButton} onClick={() => dispatch({ type: 'toggleUploadModal' })}>Add picture</Button>
                </Grid>
            </DialogContent>
            <Grid item xs={12}>
                <DialogActions>
                    <Button color="primary">Save</Button>
                    <Button color="primary">Close</Button>
                </DialogActions>
            </Grid>
            <Dialog open={state.OpenUploadDialog} fullWidth>
                <DialogContent>
                    <TextField variant="filled" fullWidth className={classes.filledInput} id="imageUploadPath"
                        label="Image link" onChange={(e) => dispatch({ type: 'changeUploadPath', payload: e.target.value })}
                        value={state.UploadedImagePath} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => dispatch({ type: 'toggleUploadModal' })} color="primary">Cancel</Button>
                    <Button onClick={() => dispatch({ type: 'pushUploadedImage' })} color="primary">Upload</Button>
                </DialogActions>

            </Dialog>
        </Grid >

    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    filledInput: { marginTop: theme.spacing(2) },
    paddedButton: { marginTop: theme.spacing(), marginRight: theme.spacing() },
    gridList: { marginTop: theme.spacing(2), backgroundColor: fade(theme.palette.common.white, 0.15), minHeight: 240 }
}));