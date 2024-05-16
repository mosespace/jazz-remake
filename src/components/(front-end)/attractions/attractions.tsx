import Link from "next/link";
import Image from "next/image";
import { Attraction } from "@prisma/client";

export default function Attractions({
  attractions,
}: {
  attractions: Attraction[];
}) {
  return (
    <div className='bg-white dark:text-background py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-center pb-4 text-2xl font-bold'>
          Top attractions in Africa
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 py-6'>
          {attractions.map((attraction, i) => {
            return (
              <Link
                key={i}
                href={`/attraction/${attraction.slug}`}
                className='group flex justify-start items-center gap-4'
              >
                <Image
                  width={500}
                  height={500}
                  src={attraction.imageUrl ?? "/placeholder.svg"}
                  alt={attraction.title}
                  className='rounded-md w-28 h-24 object-cover object-center'
                />
                <div className='flex flex-col gap-1'>
                  <span className='font-bold line-clamp-1 group-hover:underline'>
                    {attraction.title}
                  </span>
                  <p>{attraction.tourIds.length} Tours and Activities</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
