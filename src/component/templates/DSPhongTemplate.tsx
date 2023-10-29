
import { useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom"
import { RootState, useAppDispatch } from "store";
import { useEffect } from "react"
import { getDanhSachPhongThunk } from "store/quanLyPhong";
import { PATH } from "constant";


export const DSPhongTemplate = () => {

    const navigate = useNavigate()

    // Lấy param của địa điểm
    const param: {maViTri?: number} = useParams()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const param2 = param.maViTri*1

    const dispatch = useAppDispatch();

    const { danhSachPhong } = useSelector((state: RootState) => state.quanLyPhong)

    const danhSachPhong2 = danhSachPhong?.filter(item => item?.maViTri === param2)

    useEffect(() => {
        dispatch(getDanhSachPhongThunk())
    }, [dispatch])

    return (
        <div>
            {/* Danh sách phòng */}
            <div className="grid grid-cols-2 gap-24">
                <div>

                    <h1 className="text-30 font-600 mb-16">Chỗ ở tại khu vực bản đồ đã chọn</h1>

                    {
                        danhSachPhong2?.length ? (

                            danhSachPhong2?.map((item) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-2 gap-20 cursor-pointer border-b hover:bg-slate-200 rounded-6 px-8 py-16"
                                    onClick={() => {
                                        const path = generatePath(PATH.roomdetail, { maPhong: item.id })
                                        navigate(path)
                                    }}
                                >
                                    <div>
                                        <img
                                            className="!w-full !h-[200px] rounded-6"
                                            src={item.hinhAnh} alt="..."
                                        />
                                    </div>
                                    <div>
                                        <p className="font-500 text-20 text-gray-950">{item.tenPhong}</p>
                                        <p className="text-gray-700">- {item.phongNgu} phòng ngủ</p>
                                        <p className="text-gray-700">- {item.phongTam} phòng tắm</p>
                                        <p className="font-500 text-20 mt-8  text-gray-950">${item.giaTien} / đêm</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-20 text-gray-700">Khu vực này không có phòng trống. <br />Vui lòng chọn khu vực khác.</p>
                        )
                    }

                </div>
                <div>
                    <iframe
                        className="p-24 w-full h-[800px]"
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15677.916978370007!2d106.7125162147686!3d10.774559138891316!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1697558123330!5m2!1svi!2s" width="600" height="450" loading="lazy" >
                    </iframe>
                </div>
            </div>
        </div>
    )
}
