import React from "react";

export default function TourSkeletonLoader() {
  return (
    <div className='relative space-y-2 animate-pulse'>
      <div className='absolute top-2 right-0 bg-background p-2 m-2 rounded-full text-sm font-medium cursor-pointer'>
        <div className='h-4 w-4 bg-gray-200 rounded-full'></div>
      </div>
      <div className='w-full h-[12rem] bg-gray-200 rounded-xl'></div>
      <div className='h-4 bg-gray-200 rounded w-[95%]'></div>
      <div className='flex flex-col md:flex-row gap-2'>
        <div className='h-4 bg-gray-200 rounded w-[75%] mr-2'></div>
        <div className='flex items-center'>
          <div className='h-4 bg-gray-200 rounded w-[65%]'></div>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='h-4 bg-gray-200 rounded w-1/3'></div>
      </div>
    </div>
  );
}
