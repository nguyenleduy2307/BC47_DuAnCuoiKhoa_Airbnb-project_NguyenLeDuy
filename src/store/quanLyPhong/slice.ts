import { createSlice } from "@reduxjs/toolkit";

import { DanhSachPhong } from "type";
import { getChiTietPhongThunk, getDanhSachPhongThunk } from ".";

type QuanLyPhongInitialState = {
   danhSachPhong?: DanhSachPhong[]
   chiTietPhong?: DanhSachPhong

}

const initialState: QuanLyPhongInitialState = {}

const quanLyPhongSlice = createSlice({
    name: 'quanLyPhong',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getDanhSachPhongThunk.fulfilled, (state, {payload}) => {
            state.danhSachPhong = payload
        })

        .addCase(getChiTietPhongThunk.fulfilled, (state, {payload}) => {
            state.chiTietPhong = payload
        })
    },

})

export const {actions: quanLyPhongActions, reducer: quanLyPhongReducer} = quanLyPhongSlice