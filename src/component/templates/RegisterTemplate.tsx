
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from 'component'
import { PATH } from 'constant'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { RegisterSchema, RegisterSchemaType } from 'schema'
import { quanLyNguoiDungServices } from 'services'
import { handleError } from 'utils'

export const RegisterTemplate = () => {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(RegisterSchema)
  })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (values) => {

    console.log("values: ", values);

    try {
      await quanLyNguoiDungServices.register(values)
      toast.success('Đăng ký thành công')
      navigate(PATH.login)
    } catch (err) {
      handleError(err)
    }
  }

  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="flex justify-between">
          <div>
            <h2 className="font-600 text-30">ĐĂNG KÝ</h2>
          </div>
          <div>
            <span
              onClick={() => {
                navigate(PATH.login)
              }}
              className="underline decoration-solid hover:text-red-500 p-8 rounded-6 text-sky-800 cursor-pointer">Đăng nhập</span>
            <span
              onClick={() => {
                navigate('/')
              }}
              className="ms-16 underline decoration-solid hover:text-red-500 p-8 rounded-6 text-sky-800 cursor-pointer">Trang chủ</span>
          </div>
        </div>

        <Input
          lable='Email'
          id='email'
          name='email'
          register={register}
          error={errors?.email?.message}
          className='mt-8'
        />

        <Input
          lable='Mật khẩu'
          id='password'
          name='password'
          register={register}
          error={errors?.password?.message}
          className='mt-8'
          type='password'
        />

        <Input
          lable='Họ tên'
          id='name'
          name='name'
          register={register}
          error={errors?.name?.message}
          className='mt-8'
        />

        <Input
          lable='Số điện thoại'
          id='phone'
          name='phone'
          register={register}
          error={errors?.phone?.message}
          className='mt-8'
        />

        <Input
          lable='Ngày sinh'
          id='birthday'
          name='birthday'
          register={register}
          error={errors?.birthday?.message}
          className='mt-8'
          type='date'
        />

        <Input
          lable='Ảnh đại diện'
          id='avatar'
          name='avatar'
          register={register}
          error={errors?.avatar?.message}
          className='mt-8'
        />

        {/* <select
          name="gender"
          id="gender"
          className='w-full'
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>  */}

        {/* <select
          name="role"
          id="role"
          className='w-full'
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select> */}

        <Input
          lable='Giới tính____(nam nhập: true, nữ nhập: false)'
          id='gender'
          name='gender'
          register={register}
          error={errors?.gender?.message}
          className='mt-8 bg-yellow-300'
        />

        <Input
          lable='Vai trò____(USER / ADMIN)'
          id='role'
          name='role'
          register={register}
          error={errors?.role?.message}
          className='mt-8 bg-yellow-300'
        />

        <Button
          className="!w-full !h-[48px] mt-20 text-24"
          htmlType="submit"
          type="primary"
        >Đăng ký</Button>

      </form>

    </div>
  )
}