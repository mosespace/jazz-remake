import React from "react";

export default function CategorySkeletonLoader() {
  return (
    <div className='mt-10 md:mt-0 block'>
      <div className='flex flex-col items-center rounded-lg shadow-lg overflow-hidden animate-pulse'>
        <div className='h-48 w-full bg-gray-200'></div>
        <div className='flex-1 text-center bg-white p-6 flex flex-col justify-between w-full'>
          <div className='h-6 w-3/4 bg-gray-200 mx-auto'></div>
        </div>
      </div>
    </div>
  );
}
