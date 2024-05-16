"use client";

import Favorites from "@/components/favorites";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TourCard from "../tours/tour-card";
import FAQ from "../faq";
import RecentlyViewed from "../recently-viewed";
import AttractionLinks from "../attraction-links";

export default function CategoriesPage({
  tours,
  faq,
  categories,
  attractions,
}: any) {
  const [showAllTours, setShowAllTours] = useState<boolean>(false);
  const displayedTours = showAllTours ? tours : tours.slice(0, 8);

  const [expandedDescription, setExpandedDescription] = useState(false);

  const toggleDescription = () => {
    setExpandedDescription(!expandedDescription);
  };

  return (
    <>
      {/* <!-- intro section --> */}
      <div className='relative w-full h-[420px]'>
        <div className='absolute inset-0 opacity-60'>
          <Image
            src={"/categories_detailed.jpeg"}
            alt='Jazz African Tour'
            className='object-cover object-center w-full h-full'
            width={1000}
            height={667}
            loading='lazy'
            blurDataURL={"/categories_detailed.jpeg"}
            placeholder='blur'
          />
        </div>
        <div className='max-w-6xl mx-auto absolute inset-9 flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-[60%] mb-4 md:mb-0'>
            <h1 className='text-grey-700 text-5xl md:text-5xl leading-tight mb-2 font-black'>
              Lists Of all our Categories
            </h1>
            <p className='font-regular font-medium text-base mb-8 mt-4'>
              Explore the wonders of the world with Jazz Adventures's
              captivating and affordable categories.
            </p>
            <Link
              href='#categories'
              className='px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/80  transition duration-200'
            >
              Discover all categories
            </Link>
          </div>
        </div>
      </div>

      <div className='min-h-screen bg-background dark:bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8'>
        <div className='mt-4'>
          <h2 className='font-bold text-2xl'>
            Experience the joy of africa with our top-notch tours
          </h2>

          {/* detailed description */}
          <div>
            <p className={`mt-2 ${expandedDescription ? "" : "truncate"}`}>
              Explore the wonders of the world with Jazz Adventures captivating
              tour safaris, offering wildlife encounters, tours immersions,
              thrilling expeditions, and customizable adventures for an
              unforgettable journey of a lifetime. Embark on an unforgettable
              journey through the heart of Africa with our meticulously crafted
              and top-notch tour experience. Immerse yourself in the rich
              tapestry of cultures, landscapes, and wildlife that make Africa a
              truly unique destination. Our tour offers you the opportunity to
              delve into the soul of this vibrant continent, where every moment
              is filled with wonder and discovery. From the sweeping savannahs
              of the Serengeti to the lush rainforests of the Congo Basin, our
              itinerary is designed to showcase the best that Africa has to
              offer.
              {expandedDescription && (
                <>
                  <br />
                  <br />
                  <p>
                    As you traverse diverse landscapes and encounter iconic
                    wildlife, you'll be accompanied by expert guides who are
                    passionate about sharing their knowledge and love for
                    Africa. Whether you're tracking gorillas in the mist,
                    witnessing the Great Migration, or marveling at the ancient
                    rock art of the Sahara, each day promises new adventures and
                    unforgettable experiences.
                  </p>
                  <br />
                  <br />
                  <p>
                    But our tours are not just about sightseeing – it's about
                    connecting with Africa on a deeper level. You'll have the
                    chance to interact with local communities, learn about their
                    traditions, and savor the flavors of authentic African
                    cuisine. Through these meaningful encounters, you'll gain a
                    deeper understanding of the people and cultures that call
                    this continent home.
                  </p>
                  <br />
                  <br />
                  <p>
                    At the end of each day, relax and unwind in handpicked
                    accommodations that blend comfort with local charm. From
                    luxury lodges overlooking the savannah to cozy bush camps
                    nestled in the heart of the wilderness, our accommodations
                    provide the perfect backdrop for rest and relaxation after a
                    day of exploration.
                  </p>
                  <br />
                  <br />
                  <p>
                    Whether you're a seasoned traveler or embarking on your
                    first African adventure, our top-notch tour promises an
                    experience like no other. So come join us and experience the
                    joy of Africa in all its glory. Your journey of a lifetime
                    awaits!
                  </p>
                </>
              )}
            </p>
            <button
              className='text-blue-500 underline'
              onClick={toggleDescription}
            >
              {expandedDescription ? "Read Less" : "Continue Reading"}
            </button>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <p className='text-sm'>
              <span className='font-bold'>{categories.length} results</span>- We
              have lots of categories that you might want to try out for your
              self or family and see tours they have.
            </p>

            <Button
              onClick={() => setShowAllTours(!showAllTours)}
              variant='outline'
              className='w-[280px] rounded-full'
            >
              {showAllTours
                ? "Hide All Categories 🙃"
                : `View all remaining (${categories.length}) 🎉`}
              {/* : `View all remaining (${categories.length - 8}) 🎉`} */}
            </Button>
          </div>

          <div id='categories' className='mt-4'>
            <ul className='md:grid md:grid-cols-3 md:gap-6'>
              {categories.map((category: any) => {
                return (
                  <Link
                    href={`/c/${category.slug}`}
                    key={category.id}
                    className='mt-10 md:mt-0 block'
                  >
                    <div className='flex flex-col items-center rounded-lg shadow-lg overflow-hidden'>
                      <div className='flex-shrink-0'>
                        <Image
                          alt={category.title}
                          className='h-48 w-full object-cover'
                          height={500}
                          loading='lazy'
                          blurDataURL={category.imageUrl ?? "placeholder.svg"}
                          layout='responsive'
                          src={category.imageUrl ?? "placeholder.svg"}
                          style={{
                            aspectRatio: "384/192",
                            objectFit: "cover",
                          }}
                          width={500}
                        />
                      </div>
                      <div className='flex-1 text-center bg-white p-6 flex flex-col justify-between w-full'>
                        <p className='text-xl font-semibold text-gray-900'>
                          {category.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>

          <TourCard data={displayedTours} />

          <FAQ data={faq} />

          <div className='flex flex-col mt-8'>
            {/* Recently Viewed */}
            <RecentlyViewed />

            {/* Favorites */}
            <Favorites />
          </div>

          {/* Attraction Lists */}
          <AttractionLinks data={attractions} />
        </div>
      </div>
    </>
  );
}
