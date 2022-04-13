import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const server = process?.env.REACT_APP_SERVER

export const fetchTasks = createAsyncThunk(
    'tasks/getAll',
    async (payloadForThank, thunkAPI: any) => {
        try {
          return await axios.get(`${server}/tasks/getAll`)
        } catch (error) {
            return thunkAPI.rejectWithValue("Данные не получены")
        }
    })