
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from 'component'
import { PATH } from 'constant'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AdPhongSchema, AdPhongSchemaType } from 'schema'
import { quanLyPhongServices} from 'services'
import { handleError } from 'utils'

export const AdPhongTemplate = () => {

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<AdPhongSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(AdPhongSchema)
    })

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<AdPhongSchemaType> = async (values) => {

        console.log("values: ", values);

        try {
            await quanLyPhongServices.addPhong(values)
            toast.success('Thêm phòng thành công')
            navigate(PATH.adminQLP)
        } catch (err) {
            handleError(err)
        }
    }

    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex justify-between">
                    <div>
                        <h2 className="font-600 text-30">Thêm Phòng</h2>
                    </div>
                    <div>
                        <span
                            onClick={() => {
                                navigate(PATH.adminQLP)
                            }}
                            className="ms-16 underline decoration-solid hover:text-red-500 p-8 rounded-6 text-sky-800 cursor-pointer">Admin page</span>
                    </div>
                </div>

                <Input
                    lable='Tên phòng'
                    id='tenPhong'
                    name='tenPhong'
                    register={register}
                    error={errors?.tenPhong?.message}
                    className='mt-8'
                />

                <Input
                    lable='Link hình ảnh'
                    id='hinhAnh'
                    name='hinhAnh'
                    register={register}
                    error={errors?.hinhAnh?.message}
                    className='mt-8'
                />

                <Input
                    lable='Mô tả'
                    id='moTa'
                    name='moTa'
                    register={register}
                    error={errors?.moTa?.message}
                    className='mt-8'
                />

                <div className='grid grid-cols-3 gap-16 border rounded-10 border-cyan-700 p-16 mt-16 '>

                    <Input
                        lable='Mã vị trí'
                        id='maViTri'
                        name='maViTri'
                        register={register}
                        error={errors?.maViTri?.message}
                        className='mt-8'
                    />

                    <Input
                        lable='Số lượng khách'
                        id='khach'
                        name='khach'
                        register={register}
                        error={errors?.khach?.message}
                        className='mt-8'
                    />

                    <Input
                        lable='Số lượng phòng ngủ'
                        id='phongNgu'
                        name='phongNgu'
                        register={register}
                        error={errors?.phongNgu?.message}
                        className='mt-8'
                    />

                    <Input
                        lable='Số lượng giường'
                        id='giuong'
                        name='giuong'
                        register={register}
                        error={errors?.giuong?.message}
                        className='mt-8'
                    />

                    <Input
                        lable='Số lượng phòng tắm'
                        id='phongTam'
                        name='phongTam'
                        register={register}
                        error={errors?.phongTam?.message}
                        className='mt-8'
                    />

                    <Input
                        lable='Giá tiền/ đêm'
                        id='giaTien'
                        name='giaTien'
                        register={register}
                        error={errors?.giaTien?.message}
                        className='mt-8'
                    />

                </div>

                <div className='mt-16'>

                    <p className='bg-yellow-300 text-red-600 font-500'>Các tiện tích: có nhập TRUE, không nhập FALSE </p>

                    <div className='grid grid-cols-3 gap-16 border rounded-10 border-cyan-700 p-16 mt-4 '>

                        <Input
                            lable='Máy giặt'
                            id='mayGiat'
                            name='mayGiat'
                            register={register}
                            error={errors?.mayGiat?.message}
                            className='mt-8'
                        />

                        <Input
                            lable='Bàn là'
                            id='banLa'
                            name='banLa'
                            register={register}
                            error={errors?.banLa?.message}
                            className='mt-8'
                        />

                        <Input
                            lable='Tivi'
                            id='tivi'
                            name='tivi'
                            register={register}
                            error={errors?.tivi?.message}
                            className='mt-8'
                        />

                        <Input
                            lable='Điều hòa'
                            id='dieuHoa'
                            name='dieuHoa'
                            register={register}
                            error={errors?.dieuHoa?.message}
                            className='mt-8'
                        />

                        <Input
                            lable='Wifi'
                            id='wifi'
                            name='wifi'
                            register={register}
                            error={errors?.wifi?.message}
                            className='mt-8'
                        />

                        <Input
                            lable='Bếp'
                            id='bep'
                            name='bep'
                            register={register}
                            error={errors?.bep?.message}
                            className='mt-8'
                        />

                        <Input
                            lable='Đỗ xe'
                            id='doXe'
                            name='doXe'
                            register={register}
                            error={errors?.doXe?.message}
                            className='mt-8'
                        />

                        <Input
                            lable='Hồ bơi'
                            id='hoBoi'
                            name='hoBoi'
                            register={register}
                            error={errors?.hoBoi?.message}
                            className='mt-8'
                        />

                        <Input
                            lable='Bàn ủi'
                            id='banUi'
                            name='banUi'
                            register={register}
                            error={errors?.banUi?.message}
                            className='mt-8'
                        />

                    </div>

                </div>


                <Button
                    className="!w-full !h-[48px] mt-20 text-24"
                    htmlType="submit"
                    type="primary"
                >Thêm vị trí</Button>

            </form >

        </div >
    )
}