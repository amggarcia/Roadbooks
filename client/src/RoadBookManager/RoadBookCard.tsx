import React, { useState } from 'react';
import { Button, Card, CardHeader, CardMedia, CardContent, CardActionArea, CardActions, Typography } from '@material-ui/core';
import { IRoadBook } from '../../../shared/src/types/IRoadBook';

interface CardProps {
    RoadBook: IRoadBook
}

export default function RoadBookCard(props: CardProps) {
    const [roadBook] = useState<IRoadBook>(props.RoadBook);

    return (
        <Card>
            <CardHeader title={roadBook.Name}>
            </CardHeader>
            <CardActionArea>
                <CardMedia component="img" height="250" src="https://picsum.photos/400/250" title={roadBook.Name}>
                </CardMedia>
                <CardContent>
                    <Typography variant="body2" component="p">{roadBook.Description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button style={{ marginRight: 10 }} variant="contained" color="default">Edit RoadBook</Button>
                <Button variant="contained" color="secondary">Delete RoadBook</Button>
            </CardActions>
        </Card>
    );
}
