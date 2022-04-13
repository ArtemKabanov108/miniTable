import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';
import UploadButtons from "../InputData/InputData";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redax";
import addTask from "../../../../store/redusers/tasksSlice"
import {useState} from "react";
import {fetchAddTask} from "../../../../store/redusers/asyncActionCreatorImage";

export const CustomizedInputBase = () => {

    const { task } = useAppSelector(state => state.useReducer)
    const dispatch = useAppDispatch()

    const [inputValue, setInputValue] = useState('')

    const handleAddTask = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        event.preventDefault()
        setInputValue(event.target.value)
    }
    const handleSubmit = () => {
        // @ts-ignore
        dispatch(addTask(inputValue))
        // @ts-ignore
        dispatch(fetchAddTask(task))
    }

    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
        >
            <UploadButtons />
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Please add the text task"
                inputProps={{'aria-label': 'search google maps'}}
                onChange={(e) => handleAddTask(e) }
            />
            <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
            <IconButton
                color="primary"
                sx={{p: '10px'}}
                aria-label="directions"
                onClick={handleSubmit}
            >
                <DirectionsIcon />
            </IconButton>
        </Paper>
    );
}