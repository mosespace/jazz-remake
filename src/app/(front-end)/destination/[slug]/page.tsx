import Image from "next/image";
import { Metadata } from "next";
import { getTours } from "@/actions/tours";
import { getDestinationBySlug } from "@/actions/destinations";
import TourCard from "@/components/(front-end)/tours/tour-card";

export const metadata: Metadata = {
  title: "Destination",
  description:
    "Discover the enchanting destinations of Kenya with Jazz Africa Adventures. From the iconic savannahs of the Maasai Mara to the pristine shores of Diani Beach, Kenya beckons with a tapestry of natural wonders and cultural treasures waiting to be explored. Dive into the heart of bustling cities like Nairobi and Mombasa, where modernity meets tradition in a vibrant fusion of sights, sounds, and flavors. Venture off the beaten path to hidden gems like the Great Rift Valley and Mount Kenya, where awe-inspiring landscapes and diverse wildlife await. Whether you're seeking thrilling safaris, relaxing beach getaways, or immersive cultural experiences, our curated selection of destinations offers something for every traveler. Let Jazz Africa Adventures be your guide to the breathtaking beauty and boundless adventures of Kenya's most captivating destinations.",
};

export default async function page({ params: { slug } }: any) {
  const destination: any = await getDestinationBySlug(slug);
  const tours = (await getTours()) ?? [];

  const tourIds = destination?.tourIds || [];

  // filtering tours whose id is equal to the tourIds
  const toursInDestination: any = tours?.filter((tour: any) =>
    tourIds.includes(tour.id)
  );

  return (
    <div className='min-h-screen bg-background dark:bg-background max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='my-4'>
        <Image
          width={1080}
          height={1080}
          src={destination?.imageUrl}
          alt=''
          className='rounded-lg object-cover object-center w-full h-[20rem]'
        />{" "}
      </div>
      <div className='flex flex-col mt-4'>
        <h3>PLAN YOUR TRIP</h3>
        <h2 className='capitalize text-3xl font-bold my-3'>
          {destination?.title}
        </h2>
        <p>{destination?.description}</p>
      </div>

      <div className='flex flex-col mt-4'>
        <h2 className='capitalize text-3xl font-bold'>
          Tours In {destination?.title}
        </h2>
        <div>
          <TourCard data={toursInDestination} />
        </div>
      </div>
    </div>
  );
}
