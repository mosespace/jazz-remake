"use client";

import Favorites from "@/components/favorites";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FAQ from "../faq";
import TourCard from "../tours/tour-card";
import AttractionLinks from "../attraction-links";

export default function AttractionPage({ data, tours, attractions }: any) {
  const [content, setContent] = React.useState<string>("tours");
  const [selectedPriceRange, setSelectedPriceRange] =
    React.useState<string>("");

  const handleOverviewClick = () => {
    setContent("overview");
  };

  const handleToursClick = () => {
    setContent("tours");
  };

  const faq = [
    {
      id: "1",
      question: "Is there an entrance fee for the attractions?",
      answer:
        "Entrance fees vary depending on the specific attraction. Some attractions may have free admission, while others may require a fee. You can find information about entrance fees on the attraction's official website or by contacting our customer service team.",
    },
    {
      id: "2",
      question: "What are the operating hours of the attractions?",
      answer:
        "Operating hours vary depending on the attraction and the time of year. It's recommended to check the official website or contact the attraction directly for up-to-date information on operating hours. Some attractions may also have seasonal schedules.",
    },
    {
      id: "3",
      question: "Are there guided tours available for the attractions?",
      answer:
        "Many attractions offer guided tours led by knowledgeable staff or tour guides. Guided tours provide insight into the history, significance, and features of the attraction. You can inquire about guided tour options when purchasing tickets or by contacting the attraction.",
    },
    {
      id: "4",
      question: "Are there discounts available for students or seniors?",
      answer:
        "Some attractions offer discounts for students, seniors, or other groups. Discount eligibility and rates vary depending on the attraction's policies. It's recommended to inquire about available discounts when purchasing tickets or check the attraction's website for information on special offers.",
    },
  ];

  // console.log(attractions)

  const handleChangeView = () => setContent("tours");
  const randIndex = Math.floor(Math.random() * tours.length);
  const featuredTour = tours[randIndex];
  // console.log(featuredTour);

  const filterAndSortTours = () => {
    // Filter tours based on selected price range
    let filteredTours = tours;
    if (selectedPriceRange === "apple") {
      filteredTours = filteredTours.filter(
        (tour: any) => tour.pricePerAdult >= 1000 && tour.pricePerAdult <= 2000
      );
    } else if (selectedPriceRange === "banana") {
      filteredTours = filteredTours.filter(
        (tour: any) => tour.pricePerAdult >= 3000 && tour.pricePerAdult <= 4000
      );
    } else if (selectedPriceRange === "blueberry") {
      filteredTours = filteredTours.filter(
        (tour: any) => tour.pricePerAdult >= 5000 && tour.pricePerAdult <= 6000
      );
    } else if (selectedPriceRange === "grapes") {
      filteredTours = filteredTours.filter(
        (tour: any) => tour.pricePerAdult >= 7000 && tour.pricePerAdult <= 8000
      );
    } else if (selectedPriceRange === "pineapple") {
      filteredTours = filteredTours.filter(
        (tour: any) => tour.pricePerAdult >= 9000 && tour.pricePerAdult <= 10000
      );
    }

    // Sort filtered tours by price
    filteredTours.sort((a: any, b: any) => a.pricePerAdult - b.pricePerAdult);

    return filteredTours;
  };

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedRange = event.target.value;
    setSelectedPriceRange(selectedRange);
  };

  return (
    <div className=''>
      <div
        className='h-[18rem] overflow-hidden bg-cover bg-center bg-no-repeat blur-sm'
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      ></div>
      <div className='max-w-7xl py-8 min-h-screen mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-5xl h-80 relative shadow-md -mt-[14rem] rounded-lg overflow-hidden dark:text-[#0A0700] flex flex-col lg:flex-row bg-white ga-2'>
          <div className='md:w-1/2 h-full'>
            <Image
              width={500}
              height={500}
              className='object-cover h-full object-center w-full'
              src={data?.imageUrl}
              alt={data?.title}
            />
          </div>
          <div className='hidden md:flex flex-col ml-4 p-8 md:w-1/2'>
            <div className='font-bold text-2xl pb-3'>
              <h2>{data?.title}</h2>
              <div className='flex gap-2 items-center pt-3'>
                <div className='flex items-center'>
                  {Array.from({ length: 5 }).map((_, i) => {
                    return <Star key={i} className='fill-yellow-400 w-4 h-4' />;
                  })}
                </div>
                <span className='text-xs'>12,276 reviews</span>
              </div>
            </div>
            <p className='text-sm line-clamp-6'>{data?.description}</p>

            <span className='flex mt-4 font-bold text-sm gap-2 items-center'>
              <MapPin className='w-4 h-4' />
              {data?.location}
            </span>
          </div>
        </div>

        <div className='flex flex-col mt-8'>
          <div className='flex gap-2 border-b'>
            <button
              className={`py-2 text-sm ${
                content !== "tours"
                  ? "font-black dark:border-primary border-black border-b-4"
                  : ""
              }`}
              onClick={handleOverviewClick}
            >
              Overview
            </button>
            <button
              className={`py-2 text-sm ${
                content === "tours"
                  ? "font-black dark:border-primary border-black border-b-4"
                  : ""
              }`}
              onClick={handleToursClick}
            >
              Tours & Tickets
            </button>
          </div>

          {/* Overview content goes here */}
          {content === "overview" && (
            <>
              <div className='mt-4'>
                {/* Overview content goes here */}
                <div className='flex flex-col md:flex-row gap-2'>
                  <div className='flex flex-1 w-full flex-col gap-2'>
                    <>
                      <h2 className='font-bold text-2xl'>The basics</h2>
                      <p>{data?.history}</p>
                    </>

                    <Button
                      onClick={() => handleChangeView()}
                      className='mt-4 w-md font-bold py-4'
                    >
                      View all {data?.tourIds.length} experiences
                    </Button>
                  </div>
                  <div className='flex flex-nones w-fulls'>
                    <Link
                      className='p-8 max-w-md border border-primary/50 rounded-2xl hover:shadow-xl hover:shadow-primary/20 flex flex-col items-center'
                      href={`/tours/${featuredTour.categoryId}/${featuredTour.slug}`}
                    >
                      <Image
                        alt='Lake Victoria'
                        className='w-full h-auto rounded-xl'
                        height={500}
                        loading='lazy'
                        blurDataURL={featuredTour.imageUrl ?? "placeholder.svg"}
                        layout='responsive'
                        placeholder='blur'
                        src={featuredTour.imageUrl ?? "placeholder.svg"}
                        style={{
                          aspectRatio: "250/200",
                          objectFit: "cover",
                        }}
                        width={500}
                      />
                      <div className='mt-8'>
                        <h4 className='font-bold text-xl'>
                          {featuredTour.title}
                        </h4>
                        <p className='mt-2 line-clamp-2 text-gray-600'>
                          {featuredTour.description}
                        </p>
                        <div className='mt-5'>
                          <Button
                            type='button'
                            className='inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900'
                          >
                            View Tour
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='flex flex-col w-full mt-4'>
                <span className='border-b border mb-4 dark:foreground'></span>
                <div className='flex md:flex-row flex-col space-y-3 md:space-y-0 gap-4'>
                  {/* Things to Know Before You Go */}
                  {data?.thingsToKnow.length > 0 && (
                    <div className='flex flex-col'>
                      <h2 className='font-bold text-2xl mb-2'>
                        Things to Know Before You Go
                      </h2>
                      <p>{data?.thingsToKnow}</p>
                    </div>
                  )}

                  {/* How To Get There */}
                  {data?.how.length > 0 && (
                    <div className='flex flex-col'>
                      <h2 className='font-bold text-2xl mb-2'>
                        How to Get There
                      </h2>
                      <p>{data?.how}</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Tours content goes here */}
          {content === "tours" && (
            <div className='mt-4'>
              <h2 className='font-bold text-xl'>
                Tours and Tickets to Experience {data?.title}
              </h2>
              <div className='flex md:flex-row flex-col space-y-3 md:space-y-0 md:items-center justify-between mt-4'>
                <p className='text-sm'>
                  <span className='font-bold'>
                    {data?.tourIds.length} results
                  </span>
                  - Revenue may affect this sort order
                </p>

                <div className='relative inline-block mr-4'>
                  <select
                    className='w-[280px] bg-transparent py-3 px-4 border border-gray-300 rounded-full appearance-none focus:outline-none focus:border-primary'
                    onChange={handlePriceRangeChange}
                  >
                    <option className='py-2' value=''>
                      Sort by: Price Range
                    </option>
                    <option className='py-2' value='apple'>
                      Price ($1000-$2000)
                    </option>
                    <option className='py-2' value='banana'>
                      Price ($3000-$4000)
                    </option>
                    <option className='py-2' value='blueberry'>
                      Price ($5000-$6000)
                    </option>
                    <option className='py-2' value='grapes'>
                      Price ($7000-$8000)
                    </option>
                    <option className='py-2' value='pineapple'>
                      Price ($9000-$10000)
                    </option>
                  </select>
                  <svg
                    className='absolute top-0 right-0 mr-16 mt-2 md:mr-3 pointer-events-none'
                    width='40'
                    height='40'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.5 8L10 11.5L13.5 8'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>

              {filterAndSortTours().length === 0 ? (
                <div className='text-center mt-4'>
                  <section className='w-full mb-4 max-w-5xl bg-[#1A202C]/70 lg:rounded-lg mx-auto py-14 lg:pb-20 px-5 lg:px-0'>
                    <div className='rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center'>
                      <h3 className='text-3xl md:text-4xl lg:text-4xl max-w-xl lg:max-w-3xl mx-auto font-bold text-white text-center'>
                        Sorry, we can't find that tour(s)! Don't worry though,
                        everything is STILL AWESOME!
                      </h3>
                      <p className='text-sm text-white max-w-lg mx-auto text-center'>
                        You’ve got the ideas / destinations, we’ve got the tours
                        and affordable prices allover africa.
                      </p>
                      <button className='bg-[#45B3BA] dark:bg-[#1A202C] w-1/2 md:w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 text-white font-semibold text-sm lg:text-base rounded px-4 py-2'>
                        Continue Browsing
                      </button>
                    </div>
                  </section>
                </div>
              ) : (
                <>
                  <TourCard data={filterAndSortTours()} />
                </>
              )}

              <FAQ data={faq} />

              {/* Favorites */}
              <div className='flex flex-col mt-4'>
                <Favorites />

                <AttractionLinks data={attractions} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
