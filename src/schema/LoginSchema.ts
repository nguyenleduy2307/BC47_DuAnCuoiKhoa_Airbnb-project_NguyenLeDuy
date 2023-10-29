import { z } from "zod"

export const LoginSchema = z.object({
    email: z.string().nonempty('Vui lòng nhập email').email('Vui lòng nhập đúng email'),

    password: z
        .string()
        .nonempty('Vui lòng nhập mật khẩu')
        // .regex(new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/), "Mật khẩu có từ 6 đến 10 ký tự, có ít nhất một chữ hoa & một số & một ký tự đặc biệt"),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>