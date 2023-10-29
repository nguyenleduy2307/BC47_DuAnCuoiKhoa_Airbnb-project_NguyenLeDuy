
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { RootState, useAppDispatch } from "store";
import { useEffect } from "react"
import { getChiTietPhongThunk } from "store/quanLyPhong";
import { Avatar, Button, Input } from "component";
import { getBinhLuanThunk } from "store/quanLyBinhLuan";
import { Rate } from "antd"
import styled from 'styled-components'
import cn from 'classname'
import { getDanhSachDatPhongThunk } from "store/quanLyDatPhong";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from 'react-hook-form'
import { getUser, handleError } from 'utils'
import { BookingSchema, BookingSchemaType } from "schema";
import { useAuth } from "hooks";
import { quanLyDatPhongServices } from "services";
import { toast } from 'react-toastify'
import { PATH } from "constant";
import { CommentTemplate } from "./CommentTemplate";
import { getUserToken } from "type";
// import { PATH } from "constant";


export const ChiTietPhongTemplate = () => {

    const navigate = useNavigate()


    const { accessToken } = useAuth()

    let user:getUserToken

    if(accessToken) {
       user = getUser()
    }

    const param: { maPhong?: number } = useParams()

    const param2 = param.maPhong.toString()

    const param3 = param.maPhong

    const dispatch = useAppDispatch();

    const { chiTietPhong } = useSelector((state: RootState) => state.quanLyPhong)

    const { binhLuan } = useSelector((state: RootState) => state.quanLyBinhLuan)

    const soSao = binhLuan?.find(item => item.saoBinhLuan > 0)

    const { danhSachDatPhong } = useSelector((state: RootState) => state.quanLyDatPhong)
    console.log("danhSachDatPhong: ", danhSachDatPhong);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<BookingSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(BookingSchema)
    })

    const onSubmit: SubmitHandler<BookingSchemaType> = async (values) => {
        console.log("values: ", values);

        if (!user) {
            toast.error('Bạn phải đăng nhập trước khi đặt phòng')
            navigate(PATH.login)
        } else {
            const datPhong = {
                ...values,
                id: 0,
                maPhong: param3 * 1,
                maNguoiDung: user?.id,
            }

            console.log("datPhong: ", datPhong);

            try {
                await quanLyDatPhongServices.datPhong(datPhong)
                toast.success('Bạn đã đặt phòng thành công')
                navigate('/')

            } catch (err) {
                handleError(err)
            }
        }
    }

    useEffect(() => {
        dispatch(getChiTietPhongThunk(param2))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    useEffect(() => {
        dispatch(getBinhLuanThunk(param2))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    useEffect(() => {
        dispatch(getDanhSachDatPhongThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <ChiTietPhong>
            <h1 className="text-30 font-600 mb-16">{chiTietPhong?.tenPhong}</h1>

            <img
                className="!w-full rounded-10"
                src={chiTietPhong?.hinhAnh} alt="..."
            />

            <div className="mt-[36px] grid grid-cols-3 gap-20 border-b border-gray-400 pb-16">
                <div className="col-span-2 pe-[48px]">

                    <div className="border-b border-gray-400 pb-16 flex justify-between">
                        <div>
                            <h1 className="text-24 font-600">Nhà mái vòm. Chủ nhà Jenny</h1>
                            <p className="text-gray-800 mt-6">
                                {chiTietPhong?.khach} khách &#8231; {chiTietPhong?.phongNgu} phòng ngủ &#8231; {chiTietPhong?.giuong} giường &#8231; {chiTietPhong?.phongTam} phòng tắm
                            </p>
                        </div>
                        <div className="flex items-center">
                            <Avatar size='large' className='!bg-[var(--primary-color)]'>
                                <i className="fa-regular fa-user text-20"></i>
                            </Avatar>
                        </div>
                    </div>

                    <div className="border-b border-gray-400 pb-16">
                        <div className="flex mt-16">
                            <div className="px-16 mr-8 text-[32px]">
                                <i className="fa-solid fa-medal"></i>
                            </div>
                            <div>
                                <p className="text-gray-900 font-600 text-16">Jenny là Chủ nhà siêu cấp</p>
                                <p className="text-gray-700 mt-4 text-16">Chủ nhà siêu cấp là những Chủ nhà dày dạn kinh nghiệm, được đánh giá cao.</p>
                            </div>
                        </div>

                        <div className="flex mt-16">
                            <div className="px-16 mr-8 text-[32px]">
                                <i className="fa-solid fa-bath"></i>
                            </div>
                            <div>
                                <p className="text-gray-900 font-600 text-16">Thư giãn trong bồn tắm nước nóng</p>
                                <p className="text-gray-700 mt-4 text-16">Đây là một số ít chỗ ở có tiện nghi này trong khu vực</p>
                            </div>
                        </div>

                        <div className="flex mt-16">
                            <div className="px-16 mr-8 text-[32px]">
                                <i className="fa-regular fa-calendar-xmark"></i>
                            </div>
                            <div className="flex items-center">
                                <p className="text-gray-900 font-600 text-16">Hủy miễn phí trong 48 giờ</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-400 py-16">
                        {
                            chiTietPhong?.moTa
                        }

                    </div>

                    <div className="py-16">
                        <h1 className="text-24 font-600 m">Tiện nghi</h1>

                        <div className="grid grid-cols-2">

                            <div className="flex mt-16">
                                <div className="px-16 mr-8 text-[24px] w-[50px]">
                                    <i className="fa-solid fa-plane-circle-exclamation"></i>
                                </div>
                                <div className="flex items-center">
                                    <p className={cn('text-16', { false: !chiTietPhong?.banLa })}>Bàn là</p>
                                </div>
                            </div>
                            <div className="flex mt-16">
                                <div className="px-16 mr-8 text-[24px] w-[50px]">
                                    <i className="fa-solid fa-school-circle-exclamation"></i>
                                </div>
                                <div className="flex items-center">
                                    <p className={cn('text-16', { false: !chiTietPhong?.banUi })}>Bàn ủi</p>
                                </div>
                            </div >
                            <div className="flex mt-16">
                                <div className="px-16 mr-8 text-[24px] w-[50px]">
                                    <i className="fa-solid fa-kitchen-set"></i>
                                </div>
                                <div className="flex items-center">
                                    <p className={cn('text-16', { false: !chiTietPhong?.bep })}>Bếp</p>
                                </div>
                            </div>
                            <div className="flex mt-16">
                                <div className="px-16 mr-8 text-[24px] w-[50px]">
                                    <i className="fa-solid fa-fan"></i>
                                </div>
                                <div className="flex items-center">
                                    <p className={cn('text-16', { false: !chiTietPhong?.dieuHoa })}>Điều hòa</p>
                                </div>
                            </div>
                            <div className="flex mt-16">
                                <div className="px-16 mr-8 text-[24px] w-[50px]">
                                    <i className="fa-solid fa-square-parking"></i>
                                </div>
                                <div className="flex items-center">
                                    <p className={cn('text-16', { false: !chiTietPhong?.doXe })}>Chỗ đỗ xe</p>
                                </div>
                            </div>
                            <div className="flex mt-16">
                                <div className="px-16 mr-8 text-[24px] w-[50px]">
                                    <i className="fa-solid fa-person-swimming"></i>
                                </div>
                                <div className="flex items-center">
                                    <p className={cn('text-16', { false: !chiTietPhong?.hoBoi })}>Hồ bơi</p>
                                </div>
                            </div>
                            <div className="flex mt-16">
                                <div className="px-16 mr-8 text-[24px] w-[50px]">
                                    <i className="fa-solid fa-hands-bubbles"></i>
                                </div>
                                <div className="flex items-center">
                                    <p className={cn('text-16', { false: !chiTietPhong?.mayGiat })}>Máy giặt</p>
                                </div>
                            </div>
                            <div className="flex mt-16">
                                <div className="px-16 mr-8 text-[24px] w-[50px]">
                                    <i className="fa-solid fa-wifi"></i>
                                </div>
                                <div className="flex items-center">
                                    <p className={cn('text-16', { false: !chiTietPhong?.wifi })}>Wifi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[400px] p-24 rounded-16 border shadow shadow-blue-500 hover:shadow-indigo-400">
                    <div className="flex justify-between">
                        <p> <span className="font-700 text-24">${chiTietPhong?.giaTien}</span> / đêm</p>
                        {soSao ? (
                            <p className="flex items-center">

                                <span className="font-500">
                                    {soSao?.saoBinhLuan}
                                    <i className="fa-solid fa-star ms-4"></i>
                                </span>
                                <span className="mx-4 font-700">
                                    &#8231;
                                </span>
                                <span className="text-gray-500">{binhLuan?.length} đánh giá</span>
                            </p>
                        ) : (
                            <p className="flex items-center">Chưa có đánh giá</p>
                        )}
                    </div>
                    <div className="mt-24">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="grid grid-cols-2 gap-24">
                                <Input
                                    lable='Ngày đến'
                                    id='ngayDen'
                                    name='ngayDen'
                                    register={register}
                                    error={errors?.ngayDen?.message}
                                    className='mt-8'
                                    type="date"
                                />

                                <Input
                                    lable='Ngày đi'
                                    id='ngayDi'
                                    name='ngayDi'
                                    register={register}
                                    error={errors?.ngayDi?.message}
                                    className='mt-8'
                                    type="date"
                                />
                            </div>

                            <Input
                                lable='Số lượng khách'
                                id='soLuongKhach'
                                name='soLuongKhach'
                                register={register}
                                error={errors?.soLuongKhach?.message}
                                className='mt-24'
                            />

                            <Button
                                className="!w-full !h-[48px] mt-20 text-24"
                                htmlType="submit"
                                type="primary"
                            >Đặt phòng</Button>

                        </form>
                    </div>

                </div>
            </div>

            <div>
                <h1 className="text-24 font-600 mt-16">Đánh giá</h1>
                <div className="mt-24 grid grid-cols-2 gap-[40px]">
                    {
                        binhLuan?.length ? (
                            binhLuan?.map(item => (
                                <div key={item.id} className="p-16 border rounded-10 ">
                                    <div className="flex">
                                        <div>
                                            <img src={item.avatar} alt="..." className="rounded-full w-[50px] h-[50px]" />
                                        </div>
                                        <div className="ml-16">
                                            <p className="text-gray-900 font-600 text-16">
                                                {item.tenNguoiBinhLuan}
                                            </p>
                                            <p className="text-gray-500 mt-4 text-16">
                                                {item.ngayBinhLuan}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-16">
                                        <p className="text-16">
                                            {item.noiDung}
                                        </p>
                                        <Rate className="text-right" allowHalf defaultValue={item.saoBinhLuan} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Hiện chưa có bình luận cho phòng này</p>
                        )
                    }
                </div>

                <div>
                   <CommentTemplate/>
                </div>
            </div>

        </ChiTietPhong>
    )
}


const ChiTietPhong = styled.div`
    .false {
        text-decoration-line: line-through;
    }
`