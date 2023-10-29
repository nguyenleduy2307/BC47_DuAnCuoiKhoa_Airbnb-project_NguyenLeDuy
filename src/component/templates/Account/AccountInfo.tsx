import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "component"
import { useAuth } from "hooks"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { AccountSchema, AccountSchemaType } from "schema/AccountSchema"
import { getUserToken } from "type"
import { getUser } from "utils"

export const AccountInfo = () => {

    const { accessToken } = useAuth()


    let user:getUserToken

    if (accessToken) {
        user = getUser()
    }

    const {
        reset,
        register,
        handleSubmit,
    } = useForm<AccountSchemaType>({
        resolver: zodResolver(AccountSchema),
        mode: "onChange"
    })

    const onSubmit: SubmitHandler<AccountSchemaType> = (value) => {
        console.log("value: ", value);
    }

    // Xử lý soDT # soDt:
    useEffect(() => {
        reset(
            {
                ...user,
                email: user?.email,
                name: user?.name,
                phone: user?.phone,
                birthday: user?.birthday,
                avatar: user?.avatar,
                gender: user?.gender,
                role: user?.role,
            }
        )
    }, [user, reset])


    return (
        <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-20 font-600 mb-16">Chỉnh sửa hồ sơ</p>

            <Input
                className="[&>lable]:text-black [&>input]:bg-transparent [&>input]:border-b [&>input]:border-black [&>input]:text-black "
                lable="Email"
                name="email"
                register={register}
            />

            <Input
                className="[&>lable]:text-black [&>input]:bg-transparent [&>input]:border-b [&>input]:border-black [&>input]:text-black "
                lable="Họ tên"
                name="name"
                register={register}
            />

            <Input
                className="[&>lable]:text-red [&>input]:bg-transparent [&>input]:border-b [&>input]:border-black [&>input]:text-black "
                lable="Số điện thoại"
                name="phone"
                register={register}
            />

            <Input
                className="[&>lable]:text-red [&>input]:bg-transparent [&>input]:border-b [&>input]:border-black [&>input]:text-black "
                lable="Ngày sinh"
                name="birthday"
                register={register}
                type="date"
            />

            <Input
                className="[&>lable]:text-black [&>input]:bg-transparent [&>input]:border-b [&>input]:border-black [&>input]:text-black "
                lable="Giới tính"
                name="gender"
                register={register}
            />

            <Input
                className="[&>lable]:text-black [&>input]:bg-transparent [&>input]:border-b [&>input]:border-black [&>input]:text-black "
                lable="Vai trò"
                name="role"
                register={register}
            />

            <div className="text-right mt-20">
                <Button htmlType="submit" type="primary" className="!h-[46px]" >
                    Hoàn thành chỉnh sửa
                </Button>
            </div>


        </form>
    )
}

// const InputS = styled(Input)`
//     lable {
//         color: #111;
//     }
// `
