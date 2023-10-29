import { Select as SelectA, SelectProps as SelectPropsA, } from 'antd'

// Đổi tên Button của Antd thành ButtonA, vì bị trùng tên với Button của mình

type SelectProps = SelectPropsA & {
// nơi định nghĩa thêm props của mình
}

export const Select = (props: SelectProps) => {
    return <SelectA {...props}/>
}