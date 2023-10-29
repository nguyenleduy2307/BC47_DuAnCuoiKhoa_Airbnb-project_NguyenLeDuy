import { zodResolver } from "@hookform/resolvers/zod"

import { Input, Button } from "component"
import { useForm, SubmitHandler } from "react-hook-form"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LoginSchema, LoginSchemaType } from "schema"
import { RootState, useAppDispatch } from "store"
import { loginThunk } from "store/quanLyNguoiDung"
import { toast } from 'react-toastify'
import { handleError } from "utils"
import { PATH } from "constant"


export const LoginTemplate = () => {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema)
  })

  // Sử dụng useAppDispatch thay cho useDispatch:
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const { isFetchingLogin } = useSelector((state: RootState) => state.quanLyNguoiDung)

  const onSubmit: SubmitHandler<LoginSchemaType> = (value) => {


    dispatch(loginThunk(value))
      // sử dụng action Thunk nên cần unwrap
      .unwrap()
      .then(() => {
        // Xử lý thành công:
        toast.success('Đăng nhập thành công')

        // Đăng nhập thành công, navigate về trang Home
        navigate('/')
      })
      .catch((err) => {
        // Xử lý thất bại:
        handleError(err)
      })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >

      <div className="flex justify-between">
        <div>
          <h2 className="font-600 text-30">ĐĂNG NHẬP</h2>
        </div>
        <div>
          <span
            onClick={() => {
              navigate(PATH.register)
            }}
            className="underline decoration-solid hover:text-red-500 p-8 rounded-6 text-sky-800 cursor-pointer">Đăng ký</span>
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
        className='mt-24'
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

      <Button
        className="!w-full !h-[48px] mt-20"
        htmlType="submit"
        loading={isFetchingLogin}
        type="primary"
      >Đăng nhập</Button>

    </form>
  )
}
