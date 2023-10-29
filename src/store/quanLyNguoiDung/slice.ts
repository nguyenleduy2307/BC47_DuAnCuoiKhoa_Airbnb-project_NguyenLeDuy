import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserByAccessToken, getUser, userLogin } from "type";
import { getUserByAccessTokenThunk, loginThunk } from ".";
import { getAccessToken } from "utils";


// Trong TypeScript cần xây dựng kiểu dữ liệu của InitialState:

type QuanLyNguoiDungInitialState = {

    // Chỉ cần lưu accessToken xuống Localstorage, lưu nhiều sẽ bị lộ
    // Sử dụng lại accessToken để get lại thông tin của user

    accessToken?: string

    // User đã login chưa:
    userLogin?: userLogin | UserByAccessToken

    // Hiệu ứng Loading:
    isFetchingLogin?: boolean

    userAdmin?: getUser
}

const initialState: QuanLyNguoiDungInitialState = {
    // Giá trị mặc định của accessToken lấy từ local storage
    // nếu localStorage k có accessToken sẽ trả về undefined

    accessToken: getAccessToken()
}

const quanLyNguoiDungSlice = createSlice ({
    name: 'quanLyNguoiDung',
    initialState,

    // Xử lý action đồng bộ
    reducers: {
        logOut: (state, action: PayloadAction<string>) => {
            console.log("action: ", action);
            state.accessToken = undefined
            state.userLogin = undefined
            localStorage.removeItem('ACCESSTOKEN')
            localStorage.removeItem('USER')
        }
    }, 

    // Xử lý action bất đồng bộ (call API)
    extraReducers(builder) {

        builder

        // pending
        .addCase(loginThunk.pending, (state) => {
            state.isFetchingLogin = true
        })

        // fulfilled
        .addCase(loginThunk.fulfilled, (state, {payload}) => {

            // hàm loginThunk trong thunk.ts return về cái gì thì payload bên đây nhận về cái đó

            // Lưu accessToken xuống Local Storage:

            // 1: 
            localStorage.setItem('ACCESSTOKEN', payload.token)

            localStorage.setItem('USER', JSON.stringify(payload.user))


            // localStorage.setItem('ACCESSTOKEN', payload.accessToken)

            // 2:
            // set lại state
            state.accessToken = payload.token

            // state.accessToken = payload.accessToken



            // set lại user:
            state.userLogin = payload
            state.isFetchingLogin = false
            
            // console.log("payload: ", payload);
        })


        // rejected:
        .addCase(loginThunk.rejected, (state) => {
            state.isFetchingLogin = false
        })

        .addCase(getUserByAccessTokenThunk.fulfilled, (state, {payload}) => {
            state.userLogin = payload
        })

    } 
})

export const {actions: quanLyNguoiDungActions, reducer: quanLyNguoiDungReducer} = quanLyNguoiDungSlice