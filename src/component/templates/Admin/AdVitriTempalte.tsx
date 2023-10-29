
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from 'component'
import { PATH } from 'constant'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AdViTriSchema, AdViTriSchemaType } from 'schema'
import {quanLyViTriServices } from 'services'
import { handleError } from 'utils'

export const AdViTriTemplate = () => {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AdViTriSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(AdViTriSchema)
  })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<AdViTriSchemaType> = async (values) => {

    console.log("values: ", values);

    try {
      await quanLyViTriServices.addViTri(values)
      toast.success('Thêm vị trí thành công')
      navigate(PATH.adminQLVT)
    } catch (err) {
      handleError(err)
    }
  }

  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="flex justify-between">
          <div>
            <h2 className="font-600 text-30">Thêm Vị trí</h2>
          </div>
          <div>
            <span
              onClick={() => {
                navigate(PATH.adminQLVT)
              }}
              className="ms-16 underline decoration-solid hover:text-red-500 p-8 rounded-6 text-sky-800 cursor-pointer">Admin page</span>
          </div>
        </div>

        <Input
          lable='Tên vị trí'
          id='tenViTri'
          name='tenViTri'
          register={register}
          error={errors?.tenViTri?.message}
          className='mt-8'
        />

        <Input
          lable='Tỉnh thành'
          id='tinhThanh'
          name='tinhThanh'
          register={register}
          error={errors?.tinhThanh?.message}
          className='mt-8'
        />

        <Input
          lable='Quốc gia'
          id='quocGia'
          name='quocGia'
          register={register}
          error={errors?.quocGia?.message}
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

        <Button
          className="!w-full !h-[48px] mt-20 text-24"
          htmlType="submit"
          type="primary"
        >Thêm vị trí</Button>

      </form>

    </div>
  )
}