import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ITask, ITaskState} from "../../constants/ITask";
import {fetchImages} from "./asyncActionCreatorImage";

const initialState: ITaskState = {
    task: {
        task: '',
        url: ''
    },
    isLoading: false,
    error: '',
    count: 0,
}

export const tasksSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask(state, {payload}){
            state.task = {
                task: `${payload}`,
                url: ''
            }
        }
    },
    extraReducers: {
        [fetchImages.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchImages.fulfilled.type]: (state, action: PayloadAction<ITask>) => {
            state.isLoading = false
            state.task.url = `${action.payload}`
            state.error = ''
        },
        [fetchImages.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    } 
})
export default tasksSlice.reducer;