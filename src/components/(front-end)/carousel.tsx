"use client";

import Image from "next/image";
import { Carousel } from "nuka-carousel";

export default function CarouselTemplate({ images }: any) {
  return (
    <div className='w-full'>
      <Carousel autoplay showDots showArrows wrapMode='wrap' className=''>
        {images.map((item: any, i: any) => {
          return (
            <Image
              blurDataURL={item.image}
              width={1080}
              height={1080}
              key={i}
              alt={item.tour_name}
              className='w-full rounded-lg object-center object-cover'
              loading='lazy'
              src={item}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
