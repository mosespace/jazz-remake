import React from "react";

export default function AdditionalInfo({ data }: any) {
  return (
    <div className='mt-4'>
      <h2 className='font-bold text-3xl my-2'>Additional Information</h2>
      <ul className='list-disc ml-7 grid gap-2 grid-cols-1 md:grid-cols-2'>
        {data.map((item: any) => {
          return <li key={item.id}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
