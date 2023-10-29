import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung";
import { quanLyViTriReducer } from "./quanLyViTri";
import { quanLyPhongReducer } from "./quanLyPhong";
import { quanLyBinhLuanReducer } from "./quanLyBinhLuan";
import { quanLyDatPhongReducer } from "./quanLyDatPhong";
import { quanLyUserReducer } from "./quanLyUser";

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyViTri: quanLyViTriReducer,
    quanLyPhong: quanLyPhongReducer,
    quanLyBinhLuan: quanLyBinhLuanReducer,
    quanLyDatPhong: quanLyDatPhongReducer,
    quanLyUser: quanLyUserReducer,
})