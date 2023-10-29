import { createAsyncThunk } from "@reduxjs/toolkit";
import {  } from "services";
import { quanLyUserServices } from "services/quanLyUser";


export const getUserThunk = createAsyncThunk(
    'quanLyUser/getUser',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyUserServices.getUser()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

