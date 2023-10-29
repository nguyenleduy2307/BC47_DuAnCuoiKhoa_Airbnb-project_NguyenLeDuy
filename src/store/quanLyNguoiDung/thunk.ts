import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import { quanLyNguoiDungServices } from "services";
import { getAccessToken, sleep } from "utils";

export const loginThunk = createAsyncThunk(
    'quanLyNguoiDung/login',

    async (payload: LoginSchemaType, { rejectWithValue }) => {
        // tham số đầu tiên là payload, nếu không sử dụng payload, thay thể bằng shift gạch _

        try {
            const data = await quanLyNguoiDungServices.login(payload)
            // console.log("data: ", data.data.content);

            // sleep 2s
            await sleep(2000)

            // return backend trả về
            return data.data.content

        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getUserByAccessTokenThunk = createAsyncThunk(
    'quanLyNguoiDung/getUserByAccessToken',
    async (_, { rejectWithValue }) => {
        try {
            // Lấy token dưới LocalStorage:
            const token = getAccessToken()

            // Nếu user đã đăng nhập (có token):
            if (token) {
                const data = await quanLyNguoiDungServices.getUserByAccessToken()
                return data.data.content
            }
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
