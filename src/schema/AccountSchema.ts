import { z } from 'zod'

export const AccountSchema = z.object({
    name: z
        .string()
        .nonempty('Vui lòng nhập họ tên')
        .regex(new RegExp(/^[a-zA-Z _ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/), "Họ tên phải là chữ")
        .min(5, "Họ tên ít nhất 5 ký tự"),

    email: z.string().nonempty('Vui lòng nhập email').email('Vui lòng nhập đúng email'),

    password: z
        .string()
        .nonempty('Vui lòng nhập mật khẩu')
        .regex(new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/), "Mật khẩu có từ 6 đến 10 ký tự, có ít nhất một chữ hoa & một số & một ký tự đặc biệt"),

    phone: z
        .string()
        .nonempty('Vui lòng nhập số điện thoại')
        .regex(new RegExp(/^[0-9]+$/), "Số điện thoại phải là số")
        .min(10, "Số điện thoại ít nhất 10 ký tự"),

    birthday: z.string().nonempty('Vui lòng nhập ngày sinh'),

    avatar: z.string().nonempty('Vui lòng nhập ảnh đại diện'),

    gender: z.string().nonempty('Vui lòng nhập giới tính'),

    role: z.string().nonempty('Vui lòng nhập vai trò'),
})

export type AccountSchemaType = z.infer<typeof AccountSchema>