"use client";

import Link from "next/link";
import { SectionHeading } from "./section-heading";

export default function AttractionLinks({ data }: any) {
  return (
    <div className='py-8'>
      <div className=''>
        <SectionHeading title='Top attractions near Kampala' />
        <div className='flex flex-wrap divide-x-2 divide-slate-500  py-6 '>
          {data.map((attraction: any) => {
            return (
              <Link
                key={attraction.id}
                href={`attraction/${attraction.slug}`}
                className='space-y-2 px-2 '
              >
                <p className='text-sm text-gray-600 dark:text-gray-400  '>
                  {attraction.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
