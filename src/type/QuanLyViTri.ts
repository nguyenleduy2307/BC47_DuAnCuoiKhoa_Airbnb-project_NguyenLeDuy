export type PhanTrangTimKiem = {
        "pageIndex": number
        "pageSize": number
        "totalRow": number
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "keywords": any
        "data": {
                "id": number
                "tenViTri": string
                "tinhThanh": string
                "quocGia": string
                "hinhAnh": string
        }[]
}

export type ViTri = {
        "id": number
        "tenViTri": string
        "tinhThanh": string
        "quocGia": string
        "hinhAnh": string
}