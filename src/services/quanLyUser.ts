import { apiInstance } from "constant"
import { getUser} from "type"

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_USER_API,
})

export const quanLyUserServices = {

    getUser: () => api.get<ApiResponse<getUser>>('/'),

    deleteUser: (id='') => api.delete<ApiResponse<getUser>>(`?id=${id}`)

}