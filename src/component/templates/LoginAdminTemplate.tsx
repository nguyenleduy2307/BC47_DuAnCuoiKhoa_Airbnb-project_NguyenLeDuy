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


export const LoginAdminTemplate = () => {

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
        navigate(PATH.adminQLND)
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
          <h2 className="font-600 text-30">ĐĂNG NHẬP TÀI KHOẢN ADMIN</h2>
        </div>
        <div>
          <span
            onClick={() => {
              navigate(PATH.registerAdmin)
            }}
            className="underline decoration-solid hover:text-red-500 p-8 rounded-6 text-sky-800 cursor-pointer">Đăng ký</span>
    
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

      <div className="bg-yellow-300 font-700 text-24 text-red-700 mt-24 p-4">
        <p>!!!!! Vui lòng nhập Tài khoản Admin để thêm/ sửa/ xóa || vì chưa làm chức năng chặn không phải là Admin </p>
      </div>

    </form>
  )
}
