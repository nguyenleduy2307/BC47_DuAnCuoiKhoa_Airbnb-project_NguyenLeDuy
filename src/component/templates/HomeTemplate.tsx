
import { Button, DatePicker, } from "component"
import { Select } from "antd"
import { PATH } from "constant"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { generatePath, useNavigate } from "react-router-dom"
import { RootState, useAppDispatch } from "store"
import { getPhanTrangTimKiemThunk, getViTriThunk } from "store/quanLyViTri"


export const HomeTemplate = () => {

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const { phanTrangTimKiem, viTri } = useSelector((state: RootState) => state.quanLyViTri)

  useEffect(() => {
    dispatch(getPhanTrangTimKiemThunk())
  }, [dispatch])

  useEffect(() => {
    dispatch(getViTriThunk())
  }, [dispatch])

  const onChangeSelect = (value: string) => {
    const path = generatePath(PATH.roomlist, { maViTri: value })
    navigate(path)
  };

  // const onSearch = (value: string) => {
  //   console.log("value: ", value);
  // };

  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div>

      {/* Search */}

      <div
        className='grid grid-cols-6 rounded-full !mx-[100px] px-16 border border-gray-400 shadow shadow-blue-500/40 hover:shadow-indigo-400'
      >
        <div className='col-span-2 p-16'>
          <p className="font-600 mb-4">Địa điểm</p>
          <Select
            placeholder="Tìm địa điểm đến"
            showSearch
            optionFilterProp="children"
            onChange={onChangeSelect}
            // onSearch={onSearch}
            // onSelect={(value: string) => { console.log('valueee: ', value) }}
            filterOption={filterOption}
            className="w-[100%]"
          // options={[
          // {
          //   value: 'jack',
          //   label: 'Jack'
          // },
          // {
          //   value: 'abc',
          //   label: 'Abc'
          // },
          // ]}
          >
            {viTri?.map(item => {
              return <Select.Option key={item.id} value={item.id}>{item.tenViTri} - {item.tinhThanh}</Select.Option>
            })}
          </Select>
        </div>
        <div className='col-span-1 p-16'>
          <p className="font-600 mb-4">Nhận phòng</p>
          <DatePicker />
        </div>

        <div className='col-span-1 p-16'>
          <p className="font-600 mb-4">Trả phòng</p>
          <DatePicker />
        </div>

        <div className='col-span-1 p-16'>
          <p className="font-600 mb-4">Khách</p>
          <p>Thêm khách</p>
        </div >

        <div className='col-span-1 p-16 text-right'>
          <Button
            className='!h-[64px] !w-[64px] !rounded-full text-center'
            type='primary'
            // htmlType="submit"
            onClick={() => {
              // const path = generatePath(PATH.movieDetail, { maPhim: movie.maPhim })
              // navigate(path)
            }}
          >
            <i className="fa-solid fa-magnifying-glass text-[20px]"></i>
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-[50px]">
        <h1 className="text-30 font-600 mb-16">Nhờ có Host, mọi điều đều có thể</h1>
        <img
          className="w-full"
          src="/public/images/carousel.webp"
          alt="..." />
      </div>


      {/* City */}
      <div className="mt-[50px]">
        <h1 className="text-30 font-600 mb-16">Khám phá những điểm đến gần đây</h1>
        <div className="grid grid-cols-4 gap-16">
          {phanTrangTimKiem?.data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-2 gap-4 cursor-pointer hover:bg-slate-200 rounded-6 p-8"
              onClick={() => {
                const path = generatePath(PATH.roomlist, { maViTri: item.id })
                navigate(path)
              }}
            >
              <div className="col-span-1">
                <img src={item.hinhAnh} alt="..." className="rounded-6" />
              </div>
              <div className="col-span-1 ml-8 pt-8">
                <p className="font-500">{item.tinhThanh}</p>
                <p>{item.tenViTri}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Mô tả */}
      <div className="mt-[50px]">
        <h1 className="text-30 font-600 mb-16">Ở bất cứ đâu</h1>
        <div className="flex justify-between gap-16">
          <div className="flex-1">
            <div>
              <img src="/public/images/pic1.webp" className="rounded-6 w-full h-[200px]" alt="..." />
            </div>
            <p className="font-500 text-16 mt-8">Toàn bộ nhà</p>
          </div>
          <div className="flex-1">
            <div>
              <img src="/public/images/pic2.webp" className="rounded-6 w-full h-[200px]" alt="..." />
            </div>
            <p className="font-500 text-16 mt-8">Chỗ ở độc đáo</p>
          </div>
          <div className="flex-1">
            <div>
              <img src="/public/images/pic3.webp" className="rounded-6 w-full h-[200px]" alt="..." />
            </div>
            <p className="font-500 text-16 mt-8">Trang trại và thiên nhiên</p>
          </div>
          <div className="flex-1">
            <div>
              <img src="/public/images/pic4.webp" className="rounded-6 w-full h-[200px]" alt="..." />
            </div>
            <p className="font-500 text-16 mt-8">Cho phép mang theo thú cưng</p>
          </div>
        </div>
      </div>
    </div>
  )
}
