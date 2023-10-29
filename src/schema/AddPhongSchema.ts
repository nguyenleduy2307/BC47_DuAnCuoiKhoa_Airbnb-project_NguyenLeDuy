import { z } from 'zod'

export const AdPhongSchema = z.object({

    tenPhong: z.string().nonempty('Vui lòng tên phòng'),
    hinhAnh: z.string().nonempty('Vui lòng nhập link hình ảnh phòng'),
    moTa: z.string().nonempty('Vui lòng nhập mô tả'),

    maViTri:  z
    .string()
    .nonempty('Vui lòng nhập mã vị trí')
    .regex(new RegExp(/^[0-9]+$/), "Mã vị trí phải là số"),

    khach:  z
    .string()
    .nonempty('Vui lòng nhập số lượng khách')
    .regex(new RegExp(/^[0-9]+$/), "Số lượng khách là số"),

    phongNgu:  z
    .string()
    .nonempty('Vui lòng nhập số lượng phòng ngủ')
    .regex(new RegExp(/^[0-9]+$/), "Số lượng phòng ngủ phải là số"),

    giuong:  z
    .string()
    .nonempty('Vui lòng nhập số lượng giường')
    .regex(new RegExp(/^[0-9]+$/), "Số lượng giường phải là số"),

    phongTam:  z
    .string()
    .nonempty('Vui lòng nhập số lượng phòng tắm')
    .regex(new RegExp(/^[0-9]+$/), "Số lượng phòng tắm phải là số"),

    giaTien:  z
    .string()
    .nonempty('Vui lòng nhập giá tiền')
    .regex(new RegExp(/^[0-9]+$/), "Giá tiền phải là số"),


    mayGiat: z.string().nonempty('Có tiện ích nhập: true, không có nhập: false'),
    banLa: z.string().nonempty('Có tiện ích nhập: true, không có nhập: false'),
    tivi: z.string().nonempty('Có tiện ích nhập: true, không có nhập: false'),
    dieuHoa: z.string().nonempty('Có tiện ích nhập: true, không có nhập: false'),
    wifi: z.string().nonempty('Có tiện ích nhập: true, không có nhập: false'),
    bep: z.string().nonempty('Có tiện ích nhập: true, không có nhập: false'),
    doXe: z.string().nonempty('Có tiện ích nhập: true, không có nhập: false'),
    hoBoi: z.string().nonempty('Có tiện ích nhập: true, không có nhập: false'),
    banUi: z.string().nonempty('Có tiện ích nhập: true, không có nhập: false'),
})

export type AdPhongSchemaType = z.infer<typeof AdPhongSchema>