import { Check } from "lucide-react";
import React from "react";

export default function WhatsIncluded({ data }: any) {
  return (
    <div>
      <h2 className='font-bold text-3xl mb-3'>What's Included</h2>

      <div className='flex flex-col'>
        {data.map((item: any) => {
          return (
            <p key={item.id} className='flex gap-2 items-center'>
              <Check className='w-4 h-4' />
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
