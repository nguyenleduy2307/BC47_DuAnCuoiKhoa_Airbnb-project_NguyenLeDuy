
import {z } from 'zod'

export const CommentSchema = z.object({
    noiDung: z.string().nonempty('Vui lòng nhập nội dung bình luận'),
    saoBinhLuan: z
        .string()
        .nonempty('Vui lòng nhập số sao đánh giá')
        .regex(new RegExp(/^[1-5]+$/), "Đánh giá phải là số, từ 1 đến 5 sao")
        .min(1, 'Đánh giá phải là số, từ 1 đến 5 sao')
        .max(1, 'Đánh giá phải là số, từ 1 đến 5 sao'),
})

export type CommentSchemaType = z.infer<typeof CommentSchema>