import { apiInstance } from "constant";
import { BinhLuan, PostBinhLuan} from "type";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_BINH_LUAN_API,
})

export const quanLyBinhLuanServices = {
    getBinhLuan: (query='') => api.get<ApiResponse<BinhLuan[]>>(`/lay-binh-luan-theo-phong/${query}`),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    postBinhLuan: (data: any) => api.post<ApiResponse<PostBinhLuan>>('/', data),

    getBinhLuanAll: () => api.get<ApiResponse<BinhLuan[]>>(''),

    deleteBinhLuan: (id='') => api.delete<ApiResponse<BinhLuan[]>>(`/${id}`),
}
