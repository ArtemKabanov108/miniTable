import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  useSliceTasksAdd  from "./redusers/tasksSlice";
import useTableSlice from "./redusers/tableSlice"

const rootReduser = combineReducers({
    useReducer: useSliceTasksAdd, useTableSlice
})

export const  setupeStore = () => {
    return configureStore({
        reducer: rootReduser,
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupeStore>
export type AppDispatch = AppStore['dispatch']