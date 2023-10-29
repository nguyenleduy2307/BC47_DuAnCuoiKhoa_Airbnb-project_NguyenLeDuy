import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AdminLayout, AuthLayout, MainLayout } from "component";
import { Account, AdPhong, AdViTri, AdminQLBL, AdminQLDP, AdminQLND, AdminQLP, AdminQLVT, ChiTietPhong, DSPhong, Home, Login, LoginAdmin, Register } from "pages";
import { RegisterAdmin } from "pages/RegisterAdmin";

export const router: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: PATH.account,
                element: <Account/>
            },
            {
                path: PATH.roomlist,
                element: <DSPhong/>
            },
            {
                path: PATH.roomdetail,
                element: <ChiTietPhong/>
            },
        ]
    },

    {
        element: <AuthLayout/>,
        children: [
            {
                path: PATH.login,
                element: <Login/>
            },
            {
                path: PATH.register,
                element: <Register/>
            },
            {
                path: PATH.loginAdmin,
                element: <LoginAdmin/>
            },
            {
                path: PATH.registerAdmin,
                element: <RegisterAdmin/>
            },
            {
                path: PATH.adViTri,
                element: <AdViTri/>
            },
            {
                path: PATH.adPhong,
                element: <AdPhong/>
            },

        ]
    },

    {
        element: <AdminLayout/>,
        children: [
            {
                path: PATH.adminQLND,
                element: <AdminQLND/>
            },
            {
                path: PATH.adminQLVT,
                element: <AdminQLVT/>
            },
            {
                path: PATH.adminQLP,
                element: <AdminQLP/>
            },
            {
                path: PATH.adminQLDP,
                element: <AdminQLDP/>
            },
            {
                path: PATH.adminQLBL,
                element: <AdminQLBL/>
            },
        
        ]
    }
]