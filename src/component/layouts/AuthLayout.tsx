import { Outlet } from 'react-router-dom'
// import styled from 'styled-components'


export const AuthLayout = () => {

    // const {accessToken} = useSelector((state: RootState) => state.quanLyNguoiDung)

    // const { accessToken } = useAuth()

    // if (accessToken) {
    //     return <Navigate to="/" />
    // }

    return (
        <div className="grid grid-cols-2 mb-16">
            <div>
                <img
                    src="/public/images/rectangle.png"
                    alt="..."
                    className='w-full h-[650px]'
                />
            </div>

            <div className='ps-[40px] pe-[80px] mt-[36px]'>
                <Outlet />
            </div>

        </div>
    )
}
