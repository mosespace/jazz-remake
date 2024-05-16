import FAQ from "./faq";
import Link from "next/link";
import Image from "next/image";
import RecentlyViewed from "./recently-viewed";
import Favorites from "@/components/favorites";
import AttractionLinks from "./attraction-links";

export default function AboutUs({ faq, attractions }: any) {
  return (
    <section className=''>
      <div className='min-h-screen flex flex-col bg-background dark:bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8'>
        <div className='grid grid-cols-1 mb-4 md:grid-cols-2 items-center gap-8'>
          <div className='max-w-lg'>
            <h2 className='text-3xl font-extrabold text-primary dark:text-foreground sm:text-4xl'>
              Jazz Africa Adventures Welcomes You To Africa
            </h2>
            <p className='mt-4 text-base'>
              Jazz Africa Adventures welcomes you to beautiful Africa. We are a
              leading tour company based in Uganda with over eight years’
              experience running wildlife safaris in East Africa. We help design
              itineraries for activities like mountain hiking, trekking safaris,
              Uganda wildlife safaris, birding trips, cultural tours, camping
              and honeymoon trips.
              <br></br>
              <br></br>
              Whether you are seeking a budget or luxury experience, we will do
              our best to make it a memorable adventure in Africa. We love
              customizing each adventure to reflect each person’s needs, desires
              and dreams.
              <br></br>
              <br></br>
              We also have global knowledge expertise to assist with short and
              long tourist visas. We want to make your East African travel an
              unforgettable experience.
            </p>
            <div className='mt-8'>
              <Link
                href='/tours'
                className='text-blue-500 dark:text-primary hover:text-blue-600 dark:hover:text-primary/80 font-medium'
              >
                Browse through ou tours
                <span className='ml-2'>&#8594;</span>
              </Link>
            </div>
          </div>
          <div className='mt-12 md:mt-0'>
            <Image
              width={7000}
              height={4901}
              src='/africa.jpg'
              alt='about-us-image-jazz-african-adventures'
              className='object-cover rounded-lg shadow-md'
            />
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
