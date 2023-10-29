import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatPhongServices} from "services";


export const getDanhSachDatPhongThunk = createAsyncThunk(
    'quanLyDatPhong/getDanhSachDatPhong',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyDatPhongServices.getDanhSachDatPhong()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getDSPTheoNguoiDungThunk = createAsyncThunk(
    'quanLyDatPhong/getDSPTheoNguoiDung',
    async (payload: string, { rejectWithValue }) => {
        try {
            const data = await quanLyDatPhongServices.getDSPTheoNguoiDung(payload)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)



