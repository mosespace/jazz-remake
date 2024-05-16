import Favorites from "@/components/favorites";
import { getAttractions } from "@/actions/attractions";
import { Metadata } from "next";
import FAQ from "@/components/(front-end)/faq";
import RecentlyViewed from "@/components/(front-end)/recently-viewed";
import AttractionLinks from "@/components/(front-end)/attraction-links";

export const metadata: Metadata = {
  title: "Travel Info",
  description:
    "Prepare for your adventure with Jazz Africa Adventures' comprehensive travel info guide. Whether you're a first-time visitor or a seasoned traveler, our travel info page is your go-to resource for everything you need to know before embarking on your journey to Kenya. Discover essential travel tips, visa requirements, health and safety information, currency exchange, and more to ensure a smooth and hassle-free travel experience. With insights from local experts and practical advice tailored to your needs, we're here to help you plan and prepare for the adventure of a lifetime. Let Jazz Africa Adventures be your trusted companion as you explore the wonders of Kenya.",
};

export default async function page() {
  const attractions: any = (await getAttractions()) ?? [];

  const faq = [
    {
      id: "1",
      question: "How do I book a tour with Jazz Africa Adventures?",
      answer:
        "Booking a tour with Jazz Africa Adventures is easy. You can book online through our website by selecting your desired tour, date, and number of participants. Alternatively, you can contact our customer service team for assistance with booking or to inquire about availability.",
    },
    {
      id: "2",
      question: "What types of tours does Jazz Africa Adventures offer?",
      answer:
        "Jazz Africa Adventures offers a wide range of tours to suit different interests and preferences. Our tours include wildlife safaris, cultural experiences, adventure tours, and more. You can explore our website to discover the full range of tour options available.",
    },
    {
      id: "3",
      question: "Are Jazz Africa Adventures tours guided?",
      answer:
        "Yes, most of our tours are guided by experienced and knowledgeable experts who are passionate about sharing their insights and expertise with you. Our guides are well-trained and dedicated to ensuring you have a memorable and enriching experience during your tour.",
    },
    {
      id: "4",
      question: "Can Jazz Africa Adventures customize a tour itinerary?",
      answer:
        "Absolutely! Jazz Africa Adventures understands that every traveler is unique, and we offer customizable tour itineraries to cater to your specific preferences and interests. Whether you're traveling solo, with family, or in a group, we can tailor a tour to suit your needs.",
    },
  ];

  return (
    <section className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <div className='container mb-4 px-5 mx-auto'>
        <h1 className='sm:text-4xl text-3xl dark:text-white text-black font-bold mb-20'>
          Tour(s) Information From
          <br className='hidden sm:block'></br>Our Experts
        </h1>
        <div className='flex flex-col sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
          <div className='p-4 flex items-center'>
            <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-6 h-6'
                viewBox='0 0 24 24'
              >
                <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
              </svg>
            </div>
            <div className='flex-grow pl-6'>
              <h2 className='dark:text-white text-black text-lg font-bold mb-2'>
                When to Visit Uganda and Climbing Rwenzori Mountains
              </h2>
              <p className='leading-relaxed text-base'>
                For most people, it is July, August, and September. The next
                tier of good months consists of October, January, and February.
                These six months, plus December, are considered to be Uganda's
                and Rwenzori's high season. The shoulder season months are
                December, March, and June. Lastly, the rains come in April, May,
                and November. These three months are considered to be Rwenzori's
                low season, and we offer discounts during this time.
              </p>
            </div>
          </div>

          {/* <!-- Best time to trek mountain Gorillas, chimps --> */}
          <div className='p-4 flex items-center'>
            <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-6 h-6'
                viewBox='0 0 24 24'
              >
                <circle cx='6' cy='6' r='3'></circle>
                <circle cx='6' cy='18' r='3'></circle>
                <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
              </svg>
            </div>
            <div className='flex-grow pl-6'>
              <h2 className='dark:text-white text-black text-lg font-bold mb-2'>
                Best time to trek mountain Gorillas, chimps
              </h2>
              <p className='mb-4'>
                Gorilla and chimps trekking can be done throughout the whole
                year, although dry months like June, July, August, and September
                are more preferred to travel and trek in Bwindi and Kibale, as
                the forest becomes easier to trek in.
              </p>
              <p className='mb-4'>
                Although during the dry season, the permits are high compared to
                the low season where they are sold at a low cost of USD 600 but
                subjected to changes. The wet season includes April, May, and
                November, and clients tend to avoid the steep slopes which are
                slippery.
              </p>
            </div>
          </div>

          {/* <!-- What to wear or pack for mountain Gorillas --> */}
          <div className='p-4 flex items-center'>
            <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-6 h-6'
                viewBox='0 0 24 24'
              >
                <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
            </div>
            <div className='flex-grow pl-6'>
              <h2 className='dark:text-white text-black text-lg  font-bold mb-2'>
                What to wear or pack for mountain Gorillas
              </h2>
              <p className='leading-relaxed text-base'>
                Since the forest is thick with steep slopes, one needs to
                prepare what to wear. You need hiking boots, long-sleeved shirts
                and trousers, gloves (some shrubs might itch you), a hat and
                glasses, as well as energy-giving foods. Insect repellent and
                your camera are essential as you may get a big chance to take
                pictures.
              </p>
            </div>
          </div>

          {/* <!-- Hiking Mount Sabinyo from Uganda --> */}
          <div className='p-4 flex items-center'>
            <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-6 h-6'
                viewBox='0 0 24 24'
              >
                <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
            </div>
            <div className='flex-grow pl-6'>
              <h2 className='dark:text-white text-black text-lg  font-bold mb-2'>
                Hiking Mount Sabinyo from Uganda
              </h2>
              <p className='leading-relaxed text-base'>
                In Uganda, Mount Sabinyo is located in Mgahinga Gorilla National
                Park. Climbing Mount Sabyinyo is one of the best mountain
                climbing experiences in Uganda. Despite the sharp ridges and
                crater lakes before the last peak, the Uganda Wildlife Authority
                managed to solve the problem by building handmade ladders.
              </p>
            </div>
          </div>

          {/* <!-- Packing List for climbing Mount Sabyinyo --> */}
          <div className='p-4 flex items-center'>
            <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-6 h-6'
                viewBox='0 0 24 24'
              >
                <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
            </div>
            <div className='flex-grow pl-6'>
              <h2 className='dark:text-white text-black text-lg  font-bold mb-2'>
                Packing List for climbing Mount Sabyinyo
              </h2>
              <p className='leading-relaxed text-base'>
                In Uganda, Mount Sabinyo is located in Mgahinga Gorilla National
                Park. Climbing Mount Sabyinyo is one of the best mountain
                climbing experiences in Uganda. Despite the sharp ridges and
                crater lakes before the last peak, the Uganda Wildlife Authority
                managed to solve the problem by building handmade ladders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Favorites */}
      <Favorites />

      {/* Frequently Asked Questions */}
      <FAQ data={faq} />

      {/* Recently Viewed */}
      <div className='mt-4'>
        <RecentlyViewed />
      </div>

      {/* Attraction Lists */}
      <AttractionLinks data={attractions} />
    </section>
  );
}
