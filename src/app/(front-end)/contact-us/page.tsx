import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Jazz Africa Adventures and start planning your dream adventure in Kenya. Whether you have questions about our tour packages, need assistance with booking, or want personalized recommendations for your trip, our dedicated team is here to help. Reach out to us via phone, email, or our online contact form, and one of our friendly representatives will promptly assist you. With our wealth of local knowledge and expertise, we're committed to ensuring that your travel experience with Jazz Africa Adventures is seamless and unforgettable. Let us turn your travel dreams into reality and create memories to last a lifetime in the breathtaking landscapes and vibrant cultures of Kenya.",
};

export default function page() {
  return (
    <section className='py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='md:flex gap-x-24 clear-left md:mb-16 mb-10'>
          <div className=' md:mb-0 mb-4'>
            <h2 className='text-black  font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center dark:text-primary'>
              Get In Touch
            </h2>
            <p className='text-gray-600 dark:text-foreground text-lg font-normal leading-7 mb-7 md:text-left text-center'>
              Whether you have a concern or simply want to say hello, We are
              here to facilitate communication with you.
            </p>
            <div className='flex md:items-center md:justify-start justify-center'>
              <button className='w-36 h-12 rounded-full bg-primary transition-all duration-700 hover:bg-primary/80 shadow text-white text-center text-base font-semibold leading-6'>
                Contact Us
              </button>
            </div>
          </div>
          <div className='border-l-2 md:border-primary border-white px-10 py-6'>
            <div className='mb-8'>
              <h6 className='text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center'>
                Email Address
              </h6>
              <h3 className='text-black dark:text-foreground text-xl font-semibold leading-8 md:text-start text-center'>
                pagedone@gmail.com
              </h3>
            </div>
            <div>
              <h6 className='text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center'>
                Phone Number
              </h6>
              <h3 className='text-black dark:text-foreground text-xl font-semibold leading-8 md:text-start text-center'>
                470-601-1911
              </h3>
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
          <div className='h-96 relative flex justify-center'>
            <div className='w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50'></div>
            <Image
              width={400}
              height={400}
              src='https://pagedone.io/asset/uploads/1696246502.png'
              alt='United Kingdom image'
              className='w-full h-full object-cover'
            />
            <div className='absolute bottom-0 mb-6 text-center px-6'>
              <h5 className='text-white text-lg font-semibold leading-7 mb-2'>
                Uganda
              </h5>
              <p className='text-white text-base font-medium leading-6'>
                123 Western Kampala, Kasese, District
              </p>
            </div>
          </div>
          <div className='h-96 relative flex justify-center'>
            <div className='w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50'></div>
            <Image
              width={400}
              height={400}
              src='https://pagedone.io/asset/uploads/1696246522.png'
              alt='Germany image'
              className='w-full h-full  object-cover'
            />
            <div className='absolute bottom-0 mb-6 text-center px-6'>
              <h5 className='text-white text-lg font-semibold leading-7 mb-2'>
                Kenya
              </h5>
              <p className='text-white text-base font-medium leading-6'>
                101 Unter den Linden, Mitte <br></br>District, Berlin
              </p>
            </div>
          </div>
          <div className='h-96 relative flex justify-center'>
            <div className='w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50'></div>
            <Image
              width={400}
              height={400}
              src='https://pagedone.io/asset/uploads/1696246551.png'
              alt='France image'
              className='w-full h-full  object-cover'
            />
            <div className='absolute bottom-0 mb-6 text-center px-6'>
              <h5 className='text-white text-lg font-semibold leading-7 mb-2'>
                Nairobi
              </h5>
              <p className='text-white text-base font-medium leading-6'>
                456 Rue de la Paix, 8th Arrondissement, Paris
              </p>
            </div>
          </div>
          <div className='h-96 relative flex justify-center'>
            <div className='w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50'></div>
            <Image
              width={400}
              height={400}
              src='https://pagedone.io/asset/uploads/1696246565.png'
              alt='Switzerland image'
              className='w-full h-full  object-cover'
            />
            <div className='absolute bottom-0 mb-6 text-center px-6'>
              <h5 className='text-white text-lg font-semibold leading-7 mb-2'>
                Tanzania
              </h5>
              <p className='text-white text-base font-medium leading-6'>
                987 Bahnhofstrasse, Zurich <br></br>City Center, Zurich
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
