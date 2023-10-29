import { Button as ButtonA, ButtonProps as ButtonPropsA} from 'antd'

// Đổi tên Button của Antd thành ButtonA, vì bị trùng tên với Button của mình

type ButtonProps = ButtonPropsA & {
// nơi định nghĩa thêm props của mình
}

export const Button = (props: ButtonProps) => {
    return <ButtonA {...props}/>
}