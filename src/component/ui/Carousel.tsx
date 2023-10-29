import { Carousel as CarouselA, CarouselProps as CarouselPropsA } from "antd";

type CarouselProps = CarouselPropsA

export const Carousel = (props: CarouselProps) => {
  return <CarouselA {...props}/>
}
