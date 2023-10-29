import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhongServices } from "services";


export const getDanhSachPhongThunk = createAsyncThunk(
    'quanPhong/getDanhSachPhong',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyPhongServices.getDanhSachPhong()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getChiTietPhongThunk = createAsyncThunk(
    'quanPhong/getChiTietPhong',
    async (payload: string, { rejectWithValue }) => {
        try {
            const data = await quanLyPhongServices.getChiTietPhong(payload)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


