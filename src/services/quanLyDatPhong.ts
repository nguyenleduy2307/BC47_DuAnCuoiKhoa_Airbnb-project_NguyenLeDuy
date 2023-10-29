import { apiInstance } from "constant";
import {DSPTheoNguoiDung, DatPhong} from "type";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_DAT_PHONG_API,
})

export const quanLyDatPhongServices = {
    getDanhSachDatPhong: () => api.get<ApiResponse<DatPhong>>(' '),

    getDSPTheoNguoiDung: (query= '') => api.get<ApiResponse<DSPTheoNguoiDung>>(`/lay-theo-nguoi-dung/${query}`),

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    datPhong: (data: any) => api.post<ApiResponse<DatPhong>>('/', data),

    deleteDatPhong: (id='') => api.delete<ApiResponse<DatPhong>>(`/${id}`),
}

