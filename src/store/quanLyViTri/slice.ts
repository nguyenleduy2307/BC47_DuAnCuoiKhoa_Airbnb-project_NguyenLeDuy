import { createSlice } from "@reduxjs/toolkit";
import { PhanTrangTimKiem, ViTri } from "type";
import { getPhanTrangTimKiemThunk, getViTriThunk } from ".";

type QuanLyViTriInitialState = {
   phanTrangTimKiem?: PhanTrangTimKiem
   viTri?: ViTri[]
}

const initialState: QuanLyViTriInitialState = {}

const quanLyViTriSlice = createSlice({
    name: 'quanLyViTri',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getPhanTrangTimKiemThunk.fulfilled, (state, {payload}) => {
            state.phanTrangTimKiem = payload
        })

        .addCase(getViTriThunk.fulfilled, (state, {payload}) => {
            state.viTri = payload
        })
    },
})

export const {actions: quanLyViTriActions, reducer: quanLyViTriReducer} = quanLyViTriSlice