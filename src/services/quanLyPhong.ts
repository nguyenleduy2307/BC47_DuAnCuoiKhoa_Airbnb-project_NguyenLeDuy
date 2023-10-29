import { apiInstance } from "constant";
import { DanhSachPhong } from "type";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_PHONG_API,
})

export const quanLyPhongServices = {
    getDanhSachPhong: () => api.get<ApiResponse<DanhSachPhong[]>>(' '),
    getChiTietPhong: (query = '') => api.get<ApiResponse<DanhSachPhong>>(`/${query}`),
    deletePhong: (id='') => api.delete<ApiResponse<DanhSachPhong[]>>(`/${id}`),

    addPhong: (data: DanhSachPhong) => api.post<ApiResponse<DanhSachPhong>>('', data),
}