import { apiInstance } from "constant"
import { LoginSchemaType, RegisterSchemaType } from "schema"
import { userLogin } from "type"

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API,
})

export const quanLyNguoiDungServices = {
    register: (data: RegisterSchemaType) => api.post('/signup', data),
    
    login: (data: LoginSchemaType) => api.post<ApiResponse<userLogin>>('/signin', data),

    getUserByAccessToken: () => api.get<ApiResponse<userLogin>>('/users'),

}