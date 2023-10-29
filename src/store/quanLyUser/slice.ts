import { createSlice } from "@reduxjs/toolkit";

import { getUserThunk } from ".";
import { getUserToken } from "type";


type QuanLyUserInitialState = {
   userList?: getUserToken

}

const initialState: QuanLyUserInitialState = {}

const quanLyUserSlice = createSlice({
    name: 'quanLyUser',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getUserThunk.fulfilled, (state, {payload}) => {
            state.userList = payload
        })
    },
})

export const {actions: quanLyUserActions, reducer: quanLyUserReducer} = quanLyUserSlice