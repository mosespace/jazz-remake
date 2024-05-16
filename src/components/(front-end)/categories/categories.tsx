"use client";

import Link from "next/link";
import Image from "next/image";
import { Category } from "@prisma/client";
import { useState, useEffect } from "react";
import CategorySkeletonLoader from "./category-skeleton-loader";
import { PageHeaderDescription, PageHeaderHeading } from "../page-header";

export default function CategoriesList({
  categories,
}: {
  categories: Category[];
}) {
  const [loading, setLoading] = useState(true); 

  // Simulate loading data with setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after timeout
    }, 2000); // Adjust timeout duration as needed

    return () => clearTimeout(timer); // Cleanup function
  }, []);
  return (
    <>
      {categories && categories.length > 0 && (
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 '>
          <div className='text-center'>
            <PageHeaderHeading className='text-center text-3xl font-bold leading-tight tracking-tighter mb-3 md:text-5xl lg:leading-[1.1] '>
              Discover Our Popular Tours
            </PageHeaderHeading>
            <PageHeaderDescription className=''>
              Explore the wonders of the world with Jazz Adventures' captivating
              tour safaris, offering wildlife encounters, cultural immersions,
              thrilling expeditions, and customizable adventures for an
              unforgettable journey of a lifetime.
            </PageHeaderDescription>
          </div>
          <div className='mt-10'>
            <ul className='md:grid md:grid-cols-3 md:gap-6'>
              {loading ? (
                <>
                  {categories.map((category: any) => (
                    <CategorySkeletonLoader key={category.id} />
                  ))}
                </>
              ) : (
                <>
                  {categories.map((category) => {
                    return (
                      <Link
                        href={`/c/${category.slug}`}
                        key={category.id}
                        className='mt-10 md:mt-0 block'
                      >
                        <div className='flex flex-col items-center rounded-lg shadow-lg overflow-hidden'>
                          <div className='flex-shrink-0'>
                            <Image
                              alt={category.title}
                              className='h-48 w-full object-cover'
                              height={400}
                              loading='lazy'
                              blurDataURL={
                                category.imageUrl ?? "placeholder.svg"
                              }
                              layout='responsive'
                              src={category.imageUrl ?? "placeholder.svg"}
                              style={{
                                aspectRatio: "384/192",
                                objectFit: "cover",
                              }}
                              width={400}
                            />
                          </div>
                          <div className='flex-1 text-center bg-white p-6 flex flex-col justify-between w-full'>
                            <p className='text-xl font-semibold text-gray-900'>
                              {category.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </>
              )}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
