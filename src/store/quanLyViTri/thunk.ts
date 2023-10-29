import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyViTriServices } from "services";


export const getPhanTrangTimKiemThunk = createAsyncThunk(
    'quanLyViTri/getPhanTrangTimKiem',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.getPhanTrangTimKiem()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getViTriThunk = createAsyncThunk(
    'quanLyViTri/getViTri',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.getViTri()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

