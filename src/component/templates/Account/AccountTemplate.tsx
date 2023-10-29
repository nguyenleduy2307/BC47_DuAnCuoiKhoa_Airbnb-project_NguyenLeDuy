import { AccountInfo } from "component"
import { PATH } from "constant"
import { useAuth } from "hooks"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { generatePath, useNavigate } from "react-router-dom"
import { RootState, useAppDispatch } from "store"
import { getDSPTheoNguoiDungThunk } from "store/quanLyDatPhong"
import { getDanhSachPhongThunk } from "store/quanLyPhong"
import { getUserToken } from "type"
import { getUser } from "utils"

export const AccountTemplate = () => {

  const navigate = useNavigate()

  const dispatch = useAppDispatch();

  const { accessToken } = useAuth()

  let user: getUserToken

  if (accessToken) {
    user = getUser()
  }

  const maNguoiDung = user?.id
  console.log("maNguoiDung: ", maNguoiDung);

  const { dspTheoNguoiDung } = useSelector((state: RootState) => state.quanLyDatPhong)
  console.log("dspTheoNguoiDung: ", dspTheoNguoiDung);

  const { danhSachPhong } = useSelector((state: RootState) => state.quanLyPhong)
  console.log("danhSachPhong: ", danhSachPhong);

  // eslint-disable-next-line prefer-const
  let listPhong = []

  if (dspTheoNguoiDung && danhSachPhong) {
    // eslint-disable-next-line prefer-const
    for (let item of dspTheoNguoiDung) {
      // eslint-disable-next-line prefer-const
      let a = danhSachPhong?.find(item2 => item2?.id === item.maPhong)
      listPhong.push(a)
    }
  }

  useEffect(() => {
    dispatch(getDSPTheoNguoiDungThunk(maNguoiDung.toString()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  useEffect(() => {
    dispatch(getDanhSachPhongThunk())
  }, [dispatch])



  return (

    <div className="grid grid-cols-4 gap-18">


      <div className="col-span-1 h-[500px] rounded-10 border border-gray-400 shadow shadow-blue-500/40 hover:shadow-indigo-400 ">
        <div className="mt-24 flex justify-center">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src="/public/images/logo.png" alt="..." />
        </div>

        <p className="text-center font-700 text-20 ms-16 mt-8 text-cyan-700">{user?.name}</p>

        <p className="font-500 text-16 ms-16 mt-24">Xác minh danh tính</p>
        <p className="font-400 text-16 ms-16">Xác thực danh tính của bạn với huy hiệu xác minh danh tính</p>
      </div>

      <div className="col-span-1 h-[500px] rounded-10 border border-gray-400 shadow shadow-blue-500/40 hover:shadow-indigo-400">

        <AccountInfo />

      </div>

      <div className="col-span-2">

        <p className="text-20 font-600 mb-16"> Phòng đã thuê </p>

        {

          listPhong?.length ? (
            listPhong?.map(item => (
              <div
                key={item?.id}
                className="grid grid-cols-2 rounded-10 py-16 px-8 border-b cursor-pointer hover:bg-slate-200 "
                onClick={() => {
                  const path = generatePath(PATH.roomdetail, { maPhong: item.id })
                  navigate(path)
                }}
              >
                <div className="pe-24">
                  <img
                    className="!w-full h-[120px] rounded-6"
                    src={item.hinhAnh} alt="..."
                  />
                </div>
                <div>
                  <p className="font-400 text-16 text-gray-950">{item.tenPhong}</p>

                  <p className="font-500 text-16 mt-8  text-gray-950">${item.giaTien} / đêm</p>
                </div>

              </div>
            ))

          ) : (
            <p>Chưa có thông tin đặt phòng</p>
          )

        }


      </div>

    </div>
  )
}
