import { BadgeCheck, LocateIcon, Star } from "lucide-react";
import React from "react";
import { getTourBySlug, getTours } from "@/actions/tours";
import Favorites from "@/components/favorites";
import Link from "next/link";
import { Metadata } from "next";
import AdditionalInfo from "@/components/(front-end)/additional-info";
import CarouselTemplate from "@/components/(front-end)/carousel";
import FAQ from "@/components/(front-end)/faq";
import TourCard from "@/components/(front-end)/tours/tour-card";
import WhatsIncluded from "@/components/(front-end)/whats-included";
import StepsCount from "@/components/(front-end)/steps-count";
import FrontEndBookingForm from "@/components/(front-end)/bookings/front-end-booking-form";

export const metadata: Metadata = {
  title: "Detailed Tour",
  description:
    "Immerse yourself in the magic of Kenya with Jazz Africa Adventures' detailed tour. Designed for the adventurous traveler seeking an in-depth exploration of Kenya's treasures, this meticulously crafted itinerary offers a comprehensive journey through the country's most iconic destinations and hidden gems. From thrilling game drives in the Maasai Mara to cultural encounters with local tribes, every aspect of your journey is carefully curated to provide a truly immersive experience. Led by expert guides with intimate knowledge of the land and its people, you'll discover the rich diversity of Kenya's landscapes, wildlife, and cultures. Whether you're trekking through the lush forests of Mount Kenya or unwinding on the pristine beaches of the Kenyan coast, our detailed tour promises to captivate your senses and leave you with memories to last a lifetime.",
};

export default async function page({ params: { slug } }: any) {
  const tours = (await getTours()) ?? [];

  const tour: any = (await getTourBySlug(slug)) ?? {};
  const tourId = tour?.id;

  const relatedTours = tours?.filter((t) => t.slug !== slug);
  // console.log(tour);

  const faq = tour.faqs.map((item: any) => ({
    id: item.id,
    question: item.qn,
    answer: item.ans,
    tourId: item.tourId,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }));

  // console.log(tour.faqs);
  return (
    <div className='min-h-screen bg-background dark:bg-background max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='flex flex-col gap-2'>
        <h2 className='font-bold text-2xl'>{tour.title}</h2>
        <div className='flex items-center gap-2'>
          <div className='flex items-center'>
            {Array.from({ length: 5 }).map((_, i) => {
              return <Star key={i} className='fill-yellow-400 w-4 h-4' />;
            })}
            <span className='ml-2 text-sm text-gray-400'>4,444</span>
          </div>
          |
          <span className='flex text-sm items-center gap-1'>
            <span className='w-4 h-4 bg-yellow-500 rounded-full'></span>
            Badge Of Excellence
          </span>
          | <span className='text-sm'>Kampala Ug</span>
        </div>
      </div>

      <div className='md:px-4 flex flex-col md:flex-row gap-3 py-3'>
        <div className='md:w-[60%] h-[20%]'>
          <CarouselTemplate images={tour.travelerPhotos} />
        </div>

        {/* Content On The SideBar */}
        <div className='md:w-[40%] rounded-lg shadow-2xl p-8 bg-white'>
          <div className='flex flex-col'>
            <div className='dark:text-[#0A0700]'>
              <span className='font-bold text-lg'>
                From ${tour.pricePerAdult + tour.pricePerChild}
              </span>
              <p className='underline capitalize text-sm'>
                Total combined price for both adults and children.
              </p>
            </div>

            <h2 className='dark:text-[#0A0700] font-bold text-lg mt-4'>
              Select Date and Travelers
            </h2>

            <div className='mt-4'>
              <FrontEndBookingForm tourId={tourId} />
            </div>

            <div className='flex flex-col gap-4 dark:text-[#0A0700] bg-[#FFEAC4] p-3 rounded-md mt-4'>
              <p className='flex items-start gap-2 text-sm font-semibold'>
                <BadgeCheck />
                <span className=''>
                  <span className='line-clamp-2'>
                    {tour?.cancellationPolicy}&nbsp;
                  </span>
                  <Link href='/cancellation-policy' className='text-blue-700'>
                    Read More
                  </Link>
                </span>
              </p>
              {tour?.pickupStation && (
                <p className='flex items-start gap-2 text-sm font-semibold'>
                  <LocateIcon className='w-4 h-4' />
                  {tour?.pickupStation}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='px-2 flex flex-col gap-2'>
        {/* Overview */}
        <div className='flex flex-col gap-2'>
          <h2 className='font-bold text-3xl'>Overview</h2>
          <p className='py-2'>{tour.description}</p>
        </div>
        <span className='border mt-9 mb-4'></span>

        {/* What's Included */}
        <WhatsIncluded data={tour.whatsIncluded} />

        {/* Additional Information */}
        <AdditionalInfo data={tour.additionalInfo} />
        <span className='border mt-9 mb-4'></span>

        {/* Steps Count */}
        <StepsCount data={tour.days} />

        {/* Frequently Asked Questions */}
        <FAQ data={faq} />
      </div>

      {/* Related Tours Viewed Tours */}
      <div className='flex flex-col mt-8'>
        <h2 className='capitalize text-2xl font-bold'>Related Tours</h2>
        <TourCard data={relatedTours} />
      </div>

      {/* Favorites */}
      <div className='flex flex-col mt-8'>
        <Favorites />
      </div>
    </div>
  );
}
