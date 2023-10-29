import { isAxiosError } from "axios"
import { toast } from "react-toastify"

/**
 * 
 * @param error - `any`
 * @param message - `string`
 * @description Show toast message or erroe
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error?: any, message?: string) => {
    if (isAxiosError<{content: string}>(error)) {
        toast.error(message || error.response.data.content)
        // truyền vào message thì show message, nếu không truyền thì lấy lỗi của backend trả về
    }
}
