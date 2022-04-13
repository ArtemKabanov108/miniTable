import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ITableState, ITask} from "../../constants/ITask";
import {fetchTasks} from "./asyncActionCreatorTable";
import {fetchAddTask} from "./asyncActionCreatorImage";

const initialState: ITableState = {
    tasks:[
        {
            task: '',
            url: ''
        }
    ],
    isLoading: false,
    error: '',
    count: 0,
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchTasks.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchTasks.fulfilled.type]: (state, action: PayloadAction<Array<ITask>>) => {
            state.isLoading = false
            state.tasks =  action.payload
            state.error = ''
        },
        [fetchTasks.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        [fetchAddTask.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchAddTask.fulfilled.type]: (state, action: PayloadAction<Array<ITask>>) => {
            state.isLoading = false
            state.tasks =  action.payload
            state.error = ''
        },
        [fetchAddTask.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
})
export default tableSlice.reducer;