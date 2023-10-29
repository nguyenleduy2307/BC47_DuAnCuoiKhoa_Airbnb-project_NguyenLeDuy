/* eslint-disable @typescript-eslint/no-explicit-any */

// Trong Typescript phải: Khai báo prop được truyền vào ô input:

import { HTMLInputTypeAttribute } from "react"
import { UseFormRegister } from "react-hook-form"

type inputProp = {
  lable?: string
  id?: string
  type?: HTMLInputTypeAttribute
  register?: UseFormRegister<any>
  error?: string
  placeholder?: string
  className?: string
  name?: string
  value?: string
}

// gán type = 'text', nếu không truyền gì thì mặc định type là text

export const Input = ({lable, id, register, error, type = 'text',  placeholder, className = '', name}: inputProp) => {
  return (
    <div className={className}>

      {!!lable && <label className="text-black font-500 text-16" htmlFor={id}>{lable}</label> }

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="p-4 w-full border-b border-gray-950 focus:outline-none"
        {...register?.(name)}
      />

      {!!error && <p className='text-red-500 text-14'>{error}</p>}

    </div>
  )
}
