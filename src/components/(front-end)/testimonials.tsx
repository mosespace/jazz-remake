"use client";

import React from "react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section>
      <div className='px-8 py-12 mx-auto md:px-12'>
        <div className='text-center mb-4'>
          <h1 className='text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl dark:text-primary'>
            Testimonials
            <span className='block text-primary dark:text-gray-600'>
              Diverse. Skilled. United.
            </span>
          </h1>
          <p className='mt-4 text-base font-medium text-gray-500'>
            A group of passionate individuals working together to innovate and
            excel in our industry.
          </p>
        </div>
        <ul
          role='list'
          className='grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-4 lg:max-w-none lg:grid-cols-3'
        >
          <li className='p-2 border bg-gray-50 rounded-3xl'>
            <figure className='flex flex-col justify-between h-full p-6 bg-white border shadow-lg  rounded-2xl'>
              <blockquote className=''>
                <p className='text-sm text-gray-500'>
                  The service I received from Jazz African Adventures was
                  absolutely outstanding. Their team went above and beyond to
                  ensure every detail of my trip was taken care of, from booking
                  accommodations to organizing excurs.
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-between pt-6 mt-6 '>
                <div>
                  <div className='font-medium text-gray-900'>
                    Dream Trip to South Africa.
                  </div>
                  <div className='mt-1 text-sm text-gray-500'>
                    Social Media Influencer
                  </div>
                </div>
                <div className='overflow-hidden rounded-full bg-gray-50'>
                  <Image
                    width={500}
                    height={500}
                    alt='Jazz African Adventures'
                    src='/placeholder.svg'
                    className='object-cover rounded-full h-14 w-14 grayscale'
                  />
                </div>
              </figcaption>
            </figure>
          </li>
          <li className='p-2 border bg-gray-50 rounded-3xl'>
            <figure className='flex flex-col justify-between h-full p-6 bg-white border shadow-lg  rounded-2xl'>
              <blockquote className=''>
                <p className='text-sm text-gray-500'>
                  Jazz African Adventures were excellent - in the planning
                  stages, Sue listened really carefully to what we were looking
                  for and made changes where things weren't quite right. The
                  tailor made site that the itinerary
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-between pt-6 mt-6 '>
                <div>
                  <div className='font-medium text-gray-900'>
                    Cape Town and the Garden Route
                  </div>
                  <div className='mt-1 text-sm text-gray-500'>
                    ContentCreator Tik-tok
                  </div>
                </div>
                <div className='overflow-hidden rounded-full bg-gray-50'>
                  <Image
                    width={500}
                    height={500}
                    alt='Jazz African Adventures'
                    src='/placeholder.svg'
                    className='object-cover  rounded-full h-14 w-14 grayscale'
                  />
                </div>
              </figcaption>
            </figure>
          </li>
          <li className='p-2 border bg-gray-50 rounded-3xl'>
            <figure className='flex flex-col justify-between h-full p-6 bg-white border shadow-lg  rounded-2xl'>
              <blockquote className=''>
                <p className='text-sm text-gray-500'>
                  Shandre and Tatham at Jazz African Adventures did a wonderful
                  job in organising our trip to Zimbabwe, they understood what
                  we wanted and then fine tuned the itinerary to our wishes.
                  They work professionally and alw
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-between pt-6 mt-6 '>
                <div>
                  <div className='font-medium text-gray-900'>
                    Wonderful to Zimbabwe
                  </div>
                  <div className='mt-1 text-sm text-gray-500'>
                    Social Media Influencer
                  </div>
                </div>
                <div className='overflow-hidden rounded-full bg-gray-50'>
                  <Image
                    width={500}
                    height={500}
                    alt='Jazz African Adventures'
                    src='/placeholder.svg'
                    className='object-cover rounded-full h-14 w-14 grayscale'
                  />
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}
