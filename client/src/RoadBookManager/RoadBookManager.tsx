import React from 'react';
import { Toolbar, Button, InputBase, Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles, fade } from '@material-ui/core/styles';
import RoadBookCardList from './RoadBookCardList';

export default function RoadBookManager() {
    const classes = useStyles();
    return (

        <div>
            <Toolbar>
                <Grid container>
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
                </Grid>
            </Toolbar>
            <RoadBookCardList></RoadBookCardList>

        </div >
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    paddedButton: { marginRight: theme.spacing() },
    searchBar: { width: '100%', backgroundColor: fade(theme.palette.common.white, 0.15), paddingLeft: 10 },
}));

//Another way to theme Components can be used to make an "extension" of Button component and then used instead of Button where needed
// const ToolBarButton = withStyles({
//     root: {marginRight : 10},
// })(Button);