import { createSlice } from "@reduxjs/toolkit";

import { BinhLuan} from "type";
import {getBinhLuanAllThunk, getBinhLuanThunk} from ".";

type QuanLyBinhLuanInitialState = {
   binhLuan?: BinhLuan[]
   binhLuanAll?: BinhLuan[]
}

const initialState: QuanLyBinhLuanInitialState = {}

const quanLyBinhLuanSlice = createSlice({
    name: 'quanLyBinhLuan',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getBinhLuanThunk.fulfilled, (state, {payload}) => {
            state.binhLuan = payload
        })
        .addCase(getBinhLuanAllThunk.fulfilled, (state, {payload}) => {
            state.binhLuanAll = payload
        })
    },

})

export const {actions: quanLyBinhLuanActions, reducer: quanLyBinhLuanReducer} = quanLyBinhLuanSlice