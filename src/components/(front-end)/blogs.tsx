import Image from "next/image";
import React from "react";
import Link from "next/link";

interface IBlog {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  content: string;
  createdAt: Date;
}

interface BlogsProps {
  blogs: IBlog[];
}

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <section>
      <h2 className='text-2xl lg:text-4xl mt-1 font-bold text-center'>
        ⚡️ Some stuff that we've written about.
      </h2>

      <div className='px-4 lg:px-0 py-12 md:py-24 mx-auto md:px-12 max-w-7xl'>
        <ol
          className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 sm:grid-cols-2'
          role='list'
        >
          {blogs.map((blog) => {
            // created-at
            const createdAtDate = new Date(blog.createdAt);
            const day = createdAtDate.getDate();
            const month = createdAtDate.toLocaleString("default", {
              month: "short",
            });
            const year = createdAtDate.getFullYear();
            const formattedCreatedAt = `${day}th ${month} ${year}`;
            return (
              <li key={blog.id} className=''>
                <Link href={`/blogs/${blog.slug}`}>
                  <div className='h-[50%] p-2 overflow-hidden border rounded-3xl'>
                    <Image
                      width={500}
                      height={500}
                      alt={blog.slug}
                      src={blog?.thumbnail || "/placeholder.svg"}
                      className='object-cover h-full border shadow-2xl rounded-2xl aspect-square'
                    />
                  </div>
                  <p className='mt-8'>
                    <time
                      className='text-xs text-gray-500'
                      dateTime='2023-03-16'
                    >
                      {formattedCreatedAt}
                    </time>
                  </p>
                  <h3 className='mt-5 text-lg font-medium leading-6 text-black'>
                    {blog.title}
                  </h3>
                  <p className='mt-2 text-base font-medium text-gray-500 text-balance line-clamp-2'>
                    {blog.description}
                  </p>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
