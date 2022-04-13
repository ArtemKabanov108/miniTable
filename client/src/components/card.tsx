import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import {CustomizedInputBase} from "./common/Inputs/InputUniversal/InputUnivesal";
import {useAppSelector} from "../hooks/redax";

export const CardTask = () => {
    const { task } = useAppSelector(state => state.useReducer)
    console.log(task)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <CustomizedInputBase />
            </CardActions>
        </Card>
    );
}