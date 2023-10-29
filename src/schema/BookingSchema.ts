
import {z } from 'zod'

export const BookingSchema = z.object({
    ngayDen: z.string().nonempty('Vui lòng chọn ngày đến'),
    ngayDi: z.string().nonempty('Vui lòng chọn ngày đi'),
    soLuongKhach: z
        .string()
        .nonempty('Vui lòng nhập số lượng khách')
        .regex(new RegExp(/^[1-5]+$/), "Số lượng khách phải là số, và từ 1 đến 5 người")
        .min(1, "Số lượng khách phải là số, và từ 1 đến 5 người")
        .max(1, "Số lượng khách phải là số, và từ 1 đến 5 người"),
})

export type BookingSchemaType = z.infer<typeof BookingSchema>