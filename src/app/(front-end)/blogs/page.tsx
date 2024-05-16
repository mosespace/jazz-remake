import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/actions/blogs";
import { Metadata } from "next";
import Blogs from "@/components/(front-end)/blogs";

export const metadata: Metadata = {
  title: "All Blogs",
  description:
    "Embark on a journey of discovery with Jazz Africa Adventures' comprehensive selection of blogs. Whether you're seeking adventure, relaxation, cultural immersion, or wildlife encounters, our diverse range of blogs offers something for every traveler. Explore the untamed wilderness of Kenya's national parks and reserves, where you can witness the iconic Big Five in their natural habitat. Immerse yourself in the vibrant culture and traditions of Kenya's diverse communities through immersive cultural experiences and heritage tours. Indulge in adrenaline-pumping adventures such as hiking, mountain climbing, and hot air balloon safaris for an unforgettable thrill. Or simply unwind on the sun-kissed beaches of the Kenyan coast, where crystal-clear waters and pristine sands beckon. Whatever your passion, Jazz Africa Adventures invites you to embark on an extraordinary journey through the heart and soul of Kenya, where every experience is tailored to exceed your expectations.",
};

export default async function page() {
  const blogs = (await getBlogs()) ?? [];
  return (
    <div>
      <div className='relative w-full h-[420px]'>
        <div className='absolute inset-0 opacity-60'>
          <Image
            src={"/blog.jpg"}
            alt='Jazz African Tour'
            className='object-cover object-center w-full h-full'
            width={1000}
            height={667}
            loading='lazy'
            blurDataURL={"/blog.jpg"}
            placeholder='blur'
          />
        </div>
        <div className='max-w-6xl mx-auto absolute inset-9 flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-[60%] mb-4 md:mb-0'>
            <h1 className='text-grey-700 text-5xl md:text-5xl leading-tight mb-2 font-black'>
              Lists Of all our Blogs
            </h1>
            <p className='font-regular font-medium text-base mb-8 mt-4'>
              Explore the wonders of the world with Jazz Adventures's
              captivating blogs.
            </p>
            <Link
              href='#blogs'
              className='px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/80  transition duration-200'
            >
              Discover all blogs
            </Link>
          </div>
        </div>
      </div>
      <div
        id='blogs'
        className='min-h-screen bg-background dark:bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8'
      >
        <Blogs blogs={blogs} />
      </div>
    </div>
  );
}
