import React from "react";
import Link from "next/link";
import Image from "next/image";
import Favorites from "@/components/favorites";
import { getBlogBySlug } from "@/actions/blogs";
import RecentlyViewed from "@/components/(front-end)/recently-viewed";

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(slug);
  return (
    <>
      <div className='relative w-full h-[420px]'>
        <div className='absolute inset-0 opacity-60'>
          <Image
            src={`${(blog?.thumbnail as string) || "/blog.jpg"}`}
            alt='Jazz African Tour'
            className='object-cover object-center w-full h-full'
            width={1000}
            height={1000}
            loading='lazy'
            blurDataURL={`${(blog?.thumbnail as string) || "/blog.jpg"} `}
            placeholder='blur'
          />
        </div>
        <div className='max-w-6xl mx-auto absolute inset-9 flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-[60%] mb-4 md:mb-0'>
            <h1 className='text-grey-700 text-5xl md:text-5xl leading-tight mb-2 font-black'>
              {blog?.title}
            </h1>
            <p className='font-regular font-medium text-base mb-8 mt-4'>
              {blog?.description}
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
        id='blog'
        className='min-h-screen bg-background dark:bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8'
      >
        <div
          className='text-base font-medium'
          dangerouslySetInnerHTML={{ __html: blog?.content as string }}
        />

        {/* Favorites */}
        <Favorites />

        {/* Recently Viewed */}
        <RecentlyViewed />
      </div>
    </>
  );
}
