import { PATH } from "constant"
import { NavLink } from "react-router-dom"


export const SideBar = () => {
    return (
        <div className='flex flex-col'>

            <NavLink to={PATH.adminQLND}>Quản lý người dùng</NavLink>

            <NavLink to={PATH.adminQLVT}>Quản lý vị trí</NavLink>

            <NavLink to={PATH.adminQLP}>Quản lý phòng</NavLink>

            <NavLink to={PATH.adminQLDP}>Quản lý đặt phòng</NavLink>

            <NavLink to={PATH.adminQLBL}>Quản lý bình luận</NavLink>
            
        </div>
    )
}