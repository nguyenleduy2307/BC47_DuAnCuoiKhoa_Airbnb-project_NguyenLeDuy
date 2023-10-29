
import { z } from 'zod'

export const AdViTriSchema = z.object({

    tenViTri: z.string().nonempty('Vui lòng nhập tên vị trí'),

    tinhThanh: z.string().nonempty('Vui lòng nhập tỉnh thành'),

    quocGia: z.string().nonempty('Vui lòng nhập quốc gia'),

    hinhAnh: z.string().nonempty('Vui lòng nhập hình ảnh'),
})

export type AdViTriSchemaType = z.infer<typeof AdViTriSchema>