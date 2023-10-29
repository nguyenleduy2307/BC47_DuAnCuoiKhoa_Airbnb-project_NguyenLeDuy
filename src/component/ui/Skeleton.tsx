import {AvatarProps, Skeleton as SkeletonA, SkeletonProps as SkeletonPropsA} from 'antd'
import { SkeletonButtonProps } from 'antd/es/skeleton/Button'
import { SkeletonImageProps } from 'antd/es/skeleton/Image'
import { SkeletonInputProps } from 'antd/es/skeleton/Input'


type SkeletonObject = {
    (props: SkeletonPropsA): JSX.Element
    Avatar: React.FC<AvatarProps>
    Image: React.FC<SkeletonImageProps>
    Input: React.FC<SkeletonInputProps>
    Button: React.FC<SkeletonButtonProps>
}

export const Skeleton: SkeletonObject = () => {
  return <SkeletonA/>
}

Skeleton.Avatar = SkeletonA.Avatar
Skeleton.Button = SkeletonA.Button
Skeleton.Input = SkeletonA.Input
Skeleton.Image = SkeletonA.Image


