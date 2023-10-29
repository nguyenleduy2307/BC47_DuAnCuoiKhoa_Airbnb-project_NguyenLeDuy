import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useDispatch } from "react-redux";
import { getUserByAccessTokenThunk } from "./quanLyNguoiDung";

export const store = configureStore({
    reducer: rootReducer,
})


// dispatch action khi client vào trang web, không cần nhấn button
store.dispatch(getUserByAccessTokenThunk())



// Trong TypeScript không sử dụng được useDispatch,
// Nên trong Store, index.ts phải tạo useAppDispatch

type AppDispatch = typeof store['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<(typeof store)['getState']>