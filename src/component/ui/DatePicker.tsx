import { DatePicker as DatePickerA, DatePickerProps as DatePickerPropsA, } from 'antd'

// Đổi tên Button của Antd thành ButtonA, vì bị trùng tên với Button của mình

type DatePickerProps = DatePickerPropsA & {
// nơi định nghĩa thêm props của mình
}

export const DatePicker = (props: DatePickerProps) => {
    return <DatePickerA {...props}/>
}