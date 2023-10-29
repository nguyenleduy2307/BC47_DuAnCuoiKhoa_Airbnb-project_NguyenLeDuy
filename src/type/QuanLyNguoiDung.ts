// Type backend trả về:

export type userLogin = {
    user: {
        id: number
        name: string
        email: string
        password: string
        phone: string
        birthday: string
        avatar: string
        gender: boolean
        role: "USER" | "ADMIN"
    }
    token: string
}

export type getUserToken = {
    id: number
    name: string
    email: string
    password: string
    phone: string
    birthday: string
    avatar: string
    gender: boolean
    role: "USER" | "ADMIN"
}

export type getUser = {
    id: number
    name: string
    email: string
    password: string
    phone: null
    birthday: string
    avatar: null
    gender: boolean
    role: "USER" | "ADMIN"
}


// export type UserByAccessToken = {
//     user: {
//         id: number
//         name: string
//         email: string
//         password: string
//         phone: string
//         birthday: string
//         avatar: string
//         gender: boolean
//         role: "USER" | "ADMIN"
//     }
//     token: string
// }

