import React from "react";
import { getAttractions } from "@/actions/attractions";
import Favorites from "@/components/favorites";
import Image from "next/image";
import { Metadata } from "next";
import RecentlyViewed from "@/components/(front-end)/recently-viewed";
import FAQ from "@/components/(front-end)/faq";
import AttractionLinks from "@/components/(front-end)/attraction-links";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the passionate individuals behind Jazz Africa Adventures who make your travel dreams a reality. Our team is comprised of seasoned professionals with a shared love for adventure, culture, and hospitality. From knowledgeable guides and experienced tour operators to friendly customer service representatives, each member of our team is dedicated to providing you with an exceptional travel experience. With a wealth of local knowledge and a commitment to excellence, we go above and beyond to ensure that every aspect of your journey is seamless and memorable. Get to know the faces behind the scenes and discover the expertise and enthusiasm that sets Jazz Africa Adventures apart.",
};

export default async function page() {
  const attractions: any = (await getAttractions()) ?? [];

  const faq = [
    {
      id: "1",
      question: "What expertise do your team members have?",
      answer:
        "Our team members are experts in various fields related to travel and tourism. They have extensive knowledge of destinations, cultures, activities, and logistics involved in organizing tours. Many of our team members have backgrounds in hospitality, tour guiding, event planning, and customer service.",
    },
    {
      id: "2",
      question: "How do your team members ensure a memorable tour experience?",
      answer:
        "Our team members are dedicated to providing exceptional service and creating memorable tour experiences for our customers. They meticulously plan and organize every aspect of the tour, from selecting destinations and accommodations to arranging transportation and activities. They also strive to anticipate and address the needs and preferences of our clients, ensuring a seamless and enjoyable travel experience.",
    },
    {
      id: "3",
      question:
        "Can I get assistance from your team members before and during the tour?",
      answer:
        "Absolutely! Our team members are here to assist you every step of the way, from the moment you inquire about a tour to the completion of your journey. You can reach out to our team for assistance with itinerary planning, booking accommodations, arranging transportation, answering questions about destinations, and addressing any concerns or issues that may arise during your tour.",
    },
    {
      id: "4",
      question: "What sets your team apart from others in the industry?",
      answer:
        "What sets our team apart is our passion for travel and our commitment to providing exceptional service. We are dedicated to creating personalized and unforgettable tour experiences for our clients. Our team members bring a wealth of knowledge, creativity, and professionalism to every tour, ensuring that each journey is unique, memorable, and enriching.",
    },
  ];

  return (
    <section className='max-w-7xl mx-auto  py-8 px-4 sm:px-6 lg:px-8'>
      <div className='px-2 lg:px-0'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight dark:text-foreground'>
            Meet The Team
          </h2>
          <p className='mx-auto mt-4 text-sm max-w-2xl text-gray-600'>
            Our Africa Safari Experts share a handful of traits that set them
            apart from the herd: they love Africa, they are well traveled in
            Africa, and they are very good listeners. They’re also down-to-earth
            people who are truly committed to giving their clients positively
            dreamy vacations. Explore our current vacancies to find out how you
            can become an Africa Safari Expert.
          </p>
        </div>

        <div className='mt-8 grid grid-cols-1 mb-5 gap-4 sm:grid-cols-3 md:mt-16 lg:gap-x-12'>
          <div className='text-center'>
            <Image
              width={500}
              height={500}
              className='h-[300px] w-full rounded-md object-cover'
              src='/placeholder.svg'
              alt='Jazz Africa Adventure'
            />
            <p className='font-bold pt-2 text-lg'>Richard-CEO</p>
          </div>

          <div className='text-center'>
            <Image
              width={500}
              height={500}
              className='h-[300px] w-full rounded-md object-cover'
              src='/placeholder.svg'
              alt='Jazz Africa Adventure'
            />
            <p className='font-bold pt-2 text-lg'>Richard-CEO</p>
          </div>

          <div className='text-center'>
            <Image
              width={500}
              height={500}
              className='h-[300px] w-full rounded-md object-cover'
              src='/placeholder.svg'
              alt='Jazz Africa Adventure'
            />
            <p className='font-bold pt-2 text-lg'>Richard-CEO</p>
          </div>
        </div>

        {/* Favorites */}
        <Favorites />

        {/* Recently Viewed */}
        <RecentlyViewed />

        {/* Frequently Asked Questions */}
        <FAQ data={faq} />

        {/* Attraction Lists */}
        <AttractionLinks data={attractions} />
      </div>
    </section>
  );
}
