import { createSlice } from "@reduxjs/toolkit";

import {DSPTheoNguoiDung, DatPhong } from "type";
import {getDSPTheoNguoiDungThunk, getDanhSachDatPhongThunk} from ".";

type QuanLyDatPhongInitialState = {
    danhSachDatPhong?: DatPhong
    dspTheoNguoiDung?: DSPTheoNguoiDung
}

const initialState: QuanLyDatPhongInitialState = {}

const quanLyDatPhongSlice = createSlice({
    name: 'quanLyDatPhong',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getDanhSachDatPhongThunk.fulfilled, (state, {payload}) => {
            state.danhSachDatPhong = payload
        })

        .addCase(getDSPTheoNguoiDungThunk.fulfilled, (state, {payload}) => {
            state.dspTheoNguoiDung = payload
        })
    },

})

export const {actions: quanLyDatPhongActions, reducer: quanLyDatPhongReducer} = quanLyDatPhongSlice