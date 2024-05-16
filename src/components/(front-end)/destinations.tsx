import Link from "next/link";
import Image from "next/image";
import BoldHeading from "./bold-heading";

export default function Destinations({ destinations }: any) {
  return (
    <div className='py-8'>
      <div className=''>
        <BoldHeading heading=' Top Destinations' />
        <div className='grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
          {destinations.map((destination: any) => {
            return (
              <Link
                key={destination.id}
                href={`/destination/${destination.slug}`}
                className='space-y-2 relative'
              >
                <Image
                  alt='Lake Victoria'
                  className='w-full h-auto rounded-lg'
                  height={500}
                  src={destination.imageUrl}
                  style={{
                    aspectRatio: "250/150",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <h3 className='absolute bottom-2 left-4 text-lg font-bold line-clamp-1 text-slate-50'>
                  {destination.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
