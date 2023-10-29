import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyBinhLuanServices} from "services";


export const getBinhLuanThunk = createAsyncThunk(
    'quanLyBinhLuan/getBinhLuan',
    async (payload: string, { rejectWithValue }) => {
        try {
            const data = await quanLyBinhLuanServices.getBinhLuan(payload)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getBinhLuanAllThunk = createAsyncThunk(
    'quanLyBinhLuan/getBinhLuanAll',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyBinhLuanServices.getBinhLuanAll()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


