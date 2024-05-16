import {
  Fingerprint,
  FlaskConical,
  MapPinned,
  Plane,
  TentTree,
} from "lucide-react";
import React from "react";
import Favorites from "@/components/favorites";
import { getAttractions } from "@/actions/attractions";
import { Metadata } from "next";
import RecentlyViewed from "@/components/(front-end)/recently-viewed";
import AttractionLinks from "@/components/(front-end)/attraction-links";

export const metadata: Metadata = {
  title: "Why Book With Us",
  description:
    "Discover the reasons why Jazz Africa Adventures is your ultimate choice for unforgettable travel experiences in East Africa. With a passion for excellence and a commitment to customer satisfaction, we pride ourselves on offering personalized service, expert guidance, and seamless travel arrangements from start to finish. Our dedicated team of professionals possesses intimate knowledge of the region's attractions, ensuring that every itinerary is thoughtfully crafted to exceed your expectations. Whether you're seeking thrilling wildlife safaris, immersive cultural encounters, or relaxing beach retreats, we go above and beyond to tailor each experience to your preferences and interests. With Jazz Africa Adventures, you can trust that your journey will be filled with adventure, discovery, and unforgettable memories. Book with us today and embark on the adventure of a lifetime.",
};

export default async function page() {
  const attractions: any = (await getAttractions()) ?? [];

  return (
    <section className='min-h-screen flex flex-col bg-background dark:bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8'>
      <div className='container mx-auto px-4 py-8'>
        <section id='new-features' className='py-8 sm:py-10 lg:py-16'>
          <div className='px-4 mx-auto sm:px-6 lg:px-8'>
            <div className='flex items-center justify-center flex-col text-center'>
              <h2 className='text-3xl font-bold leading-tight  sm:text-4xl xl:text-5xl'>
                Why Book With Us?
              </h2>
              <p className='mt-4 text-base leading-7 max-w-2xl sm:mt-8'>
                We love Africa. Our team of safari experts are all African born
                and raised. We’ve grown up on game reserves, worked as head
                rangers and lodge managers, and spend our own holidays on
                safari; we understand what goes into making every trip to Africa
                a once in a lifetime experience. Most travel companies claim to
                be the best, so here is our public pledge that keeps you, our
                client, firmly at the heart of what we do.
              </p>
            </div>

            <div className='grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24'>
              {/* <!-- Reason 1 --> */}
              <div className='md:p-8 lg:p-14 flex flex-col justify-center items-center'>
                <div className='w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center'>
                  <Fingerprint className='text-3xl dark:text-background' />
                </div>
                <h3 className='mt-12 text-xl font-bold '>Security</h3>
                <p className='mt-5 text-base '>
                  As a Ugandan-owned business since January 2015, we prioritize
                  honesty, competence, and value. Count on personalized support
                  from planning to post-travel. If issues arise during your
                  trip, rely on us and our trusted local partners for prompt
                  assistance. Wherever you are, we're just a call away,
                  committed to old-fashioned service.
                </p>
              </div>

              {/* <!-- Reason 2 --> */}
              <div className='md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center'>
                <div className='w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center'>
                  <MapPinned className='dark:text-background text-3xl ' />
                </div>
                <h3 className='mt-12 text-xl font-bold '>
                  Exceptional Destinations
                </h3>
                <p className='mt-5 text-base '>
                  We select destinations for their natural beauty, wildlife
                  encounters, and cultural richness. From African game parks to
                  mountain climbs, East Africa's historical treasures, safaris,
                  birding, cultural tours, camping, and honeymoons, our global
                  expertise ensures unforgettable experiences for short and long
                  tours.
                </p>
              </div>

              {/* <!-- Reason 3 --> */}
              <div className='md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center'>
                <div className='w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center'>
                  <TentTree className='dark:text-background  text-3xl' />
                </div>
                <h3 className='mt-12 text-xl font-bold '>Tailor Made</h3>
                <p className='mt-5 text-base '>
                  Since 2021, we've specialized in holidays and safaris,
                  offering unrivaled expertise. Our passionate team provides
                  personalized advice and excellent service. From seasonal game
                  movements to top accommodations, we ensure your dream trip
                  becomes reality.
                </p>
              </div>

              {/* <!-- Reason 4 --> */}
              <div className='md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center'>
                <div className='w-14 h-14 rounded-full bg-red-200 flex justify-center items-center'>
                  <FlaskConical className='dark:text-background text-3xl ' />
                </div>
                <h3 className='mt-12 text-xl font-bold '>
                  Complete Financial Protection
                </h3>
                <p className='mt-5 text-base '>
                  Our clients are fully covered by our supplier default
                  insurance, and Our accreditation bond with the Southern Africa
                  Tourism Services Association
                </p>
              </div>

              {/* <!-- Reason 5 --> */}
              <div className='md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center'>
                <div className='w-14 h-14 rounded-full bg-green-200 flex justify-center items-center'>
                  <Plane className='dark:text-background text-3xl '></Plane>
                </div>
                <h3 className='mt-12 text-xl font-bold '>Travel Services</h3>
                <p className='mt-5 text-base '>
                  We have first-hand knowledge of every single destination,
                  lodge and activity we recommend.
                </p>
              </div>

              {/* <!-- Reason 6 --> */}
              <div className='md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center'>
                <div className='w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center'>
                  <FlaskConical className='dark:text-background text-3xl ' />
                </div>
                <h3 className='mt-12 text-xl font-bold '>
                  Full Service, 24/7 On Safari Support
                </h3>
                <p className='mt-5 text-base '>
                  We take care of every detail, offering 24/7 assistance and
                  local know-how from the right time zone, until you return
                  safely home.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Favorites */}
      <Favorites />

      {/* Recently Viewed */}
      <RecentlyViewed />

      {/* Attraction Lists */}
      <AttractionLinks data={attractions} />
    </section>
  );
}
