import { apiInstance } from "constant";
import { PhanTrangTimKiem, ViTri } from "type";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_VI_TRI_API,
})

export const quanLyViTriServices = {
    getViTri: () => api.get<ApiResponse<ViTri[]>>(''),

    getPhanTrangTimKiem: () => api.get<ApiResponse<PhanTrangTimKiem>>('/phan-trang-tim-kiem?pageIndex=2&pageSize=5'),

    deleteViTri: (id = '') => api.delete<ApiResponse<ViTri[]>>(`/${id}`),

    addViTri: (data:ViTri) => api.post<ApiResponse<ViTri>>('', data),

}
