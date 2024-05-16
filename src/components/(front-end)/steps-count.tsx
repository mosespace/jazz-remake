import React from "react";

export default function StepsCount({ data }: any) {
  const days = data;

  return (
    <div className=''>
      <h2 className='font-bold text-3xl pb-4'>Days and Actions</h2>
      {days.map((day: any, index: number) => (
        <div className='relative flex items-start pb-16' key={day.id}>
          <div className='z-10 grid h-8 w-8 shrink-0 place-content-center rounded-full dark:text-[#0A0700] bg-[#FFC862] font-semibold text-heading dark:bg-layer-3 text-sm'>
            {index + 1}
          </div>
          <div className='ml-6 text-sm space-y-3'>
            <h3 className='font-bold capitalize text-heading'>{day.title}</h3>
            <div
              className='text-base font-medium'
              dangerouslySetInnerHTML={{ __html: day.description }}
            />
            <span>{day.meals.join(", ")}</span>
          </div>
          {index !== days.length - 1 && (
            <div className='absolute inset-y-0 left-[17px] w-0.5 bg-[#FFC862] dark:bg-layer-3' />
          )}
        </div>
      ))}
    </div>
  );
}
