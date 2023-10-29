import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from 'react-hook-form'
import { getUser, handleError } from 'utils'
import { CommentSchema, CommentSchemaType } from "schema";
import { quanLyBinhLuanServices } from "services";
import { toast } from 'react-toastify'
import { PATH } from "constant";
import { useAuth } from "hooks";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Button, Input } from "component";
import { getUserToken } from "type";


export const CommentTemplate = () => {
    const { accessToken } = useAuth()

    let user:getUserToken

    if(accessToken) {
       user = getUser()
    }
    
    const navigate = useNavigate()

    const param: { maPhong?: number } = useParams()

    const param3 = param.maPhong

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<CommentSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(CommentSchema)
    })


    const onSubmit: SubmitHandler<CommentSchemaType> = async (values) => {
        console.log("values: ", values);

        if (!accessToken) {
            toast.error('Bạn phải đăng nhập trước khi bình luận')
            navigate(PATH.login)
        } else {
            const binhLuan = {
                ...values,
                ngayBinhLuan: '10',
                id: 0,
                maPhong: param3 * 1,
                maNguoiBinhLuan: user?.id,
            }

            console.log("binhLuan: ", binhLuan);

            try {
                await quanLyBinhLuanServices.postBinhLuan(binhLuan)
                toast.success('Bình luận của bạn đã được gửi đi')
                setTimeout(() => location.reload(), 2000)
            } catch (err) {
                handleError(err)
            }
        }
    }

    return (

        <div className="mt-[32px] flex border border-gray-600 w-[50%] p-16 rounded-16">
            <div>
                <Avatar size='large' className='!bg-[var(--primary-color)]'>
                    <i className="fa-regular fa-user text-20"></i>
                </Avatar>
            </div>

            <div className="ml-16">

                <form onSubmit={handleSubmit(onSubmit)} className="!w-full">
                    <Input
                        lable='Nội dung bình luận'
                        id='noiDung'
                        name='noiDung'
                        register={register}
                        error={errors?.noiDung?.message}
                        className='mt-8 w-full'
                    />

                    <Input
                        lable='Đánh giá (từ 1 đến 5 sao)'
                        id='saoBinhLuan'
                        name='saoBinhLuan'
                        register={register}
                        error={errors?.saoBinhLuan?.message}
                        className='mt-24'
                    />

                    <Button
                        className="mt-20 text-24"
                        htmlType="submit"
                        type="primary"
                    >Thêm bình luận</Button>

                </form>
            </div>
        </div>
    )
}
