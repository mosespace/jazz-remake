import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Metadata } from "next";
import TourCard from "@/components/(front-end)/tours/tour-card";
import FAQ from "@/components/(front-end)/faq";
import RecentlyViewed from "@/components/(front-end)/recently-viewed";
import { getCategoryBySlug } from "@/actions/categories";
import { getTours } from "@/actions/tours";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Detailed Category",
  description:
    "Delve deeper into the wonders of Kenya with Jazz Africa Adventures' detailed category. Whether you're a nature enthusiast, a history buff, or a thrill-seeker, our curated selection of detailed categories offers specialized experiences tailored to your interests. Explore the diverse ecosystems of Kenya's national parks and reserves, embark on cultural tours to uncover the rich heritage of local communities, or indulge in adrenaline-pumping adventures such as hiking, safaris, and water sports. With meticulous attention to detail and insider knowledge, our experienced guides ensure an immersive and unforgettable journey through Kenya's most captivating landscapes and attractions. Discover the essence of Kenya with Jazz Africa Adventures' detailed category and create memories to last a lifetime.",
};

export default async function page({ params: { slug } }: any) {
  const category: any = await getCategoryBySlug(slug);

  const tours: any = (await getTours()) ?? [];

  const toursRelatedToCategory = tours.filter(
    (tour: any) => tour.categoryId === category.id
  );

  const faq = [
    {
      id: "1",
      question: "Are meals included in the tour packages?",
      answer:
        "Meal inclusions vary depending on the specific tour package. Some tours may include meals while others may not. You can check the details of each tour package for information on meal inclusions.",
    },
    {
      id: "2",
      question: "What is the cancellation policy for the tours?",
      answer:
        "Cancellation policies differ based on the tour operator and the specific tour package. We recommend reviewing the cancellation policy of each tour before making a booking. You can find detailed cancellation information on the tour page.",
    },
    {
      id: "3",
      question: "Are tour guides provided for all tours?",
      answer:
        "Tour guides are included in most of our tour packages. However, there may be some self-guided tours where you explore at your own pace. You can find information about tour guides in the tour description.",
    },
    {
      id: "4",
      question: "Can I customize the itinerary of a tour?",
      answer:
        "Some tour packages offer customization options, while others have fixed itineraries. If customization is available, it will be mentioned in the tour description. Alternatively, you can contact our customer service team for assistance with customizing your tour.",
    },
  ];

  return (
    <>
      {/* <!-- intro section --> */}
      <div className='relative w-full h-[650px]'>
        <div className='relative h-[650px]'>
          <Image
            src={category?.imageUrl ?? "/placeholder.svg"}
            alt={category.description}
            className='object-cover object-center w-full h-full'
            width={1000}
            height={1000}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent dark:to-black to-[#FFFBF5]'></div>
        </div>

        <div className='max-w-6xl mx-auto absolute inset-9 flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-[60%] mb-4 md:mb-0'>
            <h1 className='text-foreground dark:text-grey-700 text-5xl md:text-5xl leading-tight mb-2 font-black'>
              {category.title}
            </h1>
            <p className='font-regular font-bold dark:font-medium text-base mb-8 mt-4'>
              {category.description}
            </p>
            <div className='mb-4 md:mb-0'>
              <Link
                href='#tours'
                className='px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]transition duration-200'
              >
                Discover tours
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='min-h-screen bg-background dark:bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='mt-4'>
          <h2 className='font-bold text-xl'>
            Tours and Experiences in {category.title}
          </h2>

          <p>
            Explore the wonders of the world with Jazz Adventures captivating
            tour safaris, offering wildlife encounters, ${slug} immersions,
            thrilling expeditions, and customizable adventures for an
            unforgettable journey of a lifetime.
          </p>
          <div className='flex flex-col md:flex-row space-y-3 md:items-center justify-between mt-4'>
            <p className='text-sm'>
              <span className='font-bold'>
                {toursRelatedToCategory.length} results
              </span>
              - Revenue may affect this sort order
            </p>
            <Select>
              <SelectTrigger className='w-[180px] rounded-full'>
                <SelectValue placeholder='Sort by: Price Range' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose your desired range</SelectLabel>
                  <SelectItem value='apple'>Price (1000-2000)</SelectItem>
                  <SelectItem value='banana'>Price (3000-4000)</SelectItem>
                  <SelectItem value='blueberry'>Price (5000-6000)</SelectItem>
                  <SelectItem value='grapes'>Price (7000-8000)</SelectItem>
                  <SelectItem value='pineapple'>Price (9000-1000)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div id='tours'>
            <TourCard data={toursRelatedToCategory} />
          </div>

          <FAQ data={faq} />

          {/* Recently Viewed */}
          <div className='flex flex-col mt-8'>
            <h2 className='capitalize text-2xl font-bold'>
              Recently Viewed Tours
            </h2>
            <RecentlyViewed />
          </div>
        </div>
      </div>
    </>
  );
}
