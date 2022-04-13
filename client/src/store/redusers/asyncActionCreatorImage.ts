import { createAsyncThunk } from "@reduxjs/toolkit";
import {generateUploadURL} from "../../services/AWS/s3";
import axios from "axios";
const server = process?.env.REACT_APP_SERVER

export const fetchImages = createAsyncThunk(
    'task/add',
    async (payloadForThank, thunkAPI: any) => {
        try {
            console.log("generatedUrl", await generateUploadURL())
            let generatedUrl = await generateUploadURL()
            console.log('generatedUrl', generatedUrl)
            if(generatedUrl){
                const resAws = await axios.put( generatedUrl, payloadForThank)
                console.log("resAws resAws", resAws)
                return resAws.data
            }

        } catch (error) {
            return thunkAPI.rejectWithValue("Данные не получены")
        }
})

export const fetchAddTask = createAsyncThunk(
    'tasks/getAll',
    async (payloadForThank, thunkAPI: any) => {
        try {
            console.log('payloadForThank', payloadForThank)
            return await axios.post(`${server}/add-task`, payloadForThank)
        } catch (error) {
            return thunkAPI.rejectWithValue("Данные не получены")
        }
    })