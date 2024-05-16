import Hero from "@/components/(front-end)/hero";
import { getCategories } from "@/actions/categories";
import { getAttractions } from "@/actions/attractions";
import CategoriesList from "@/components/(front-end)/categories/categories";
import Attractions from "@/components/(front-end)/attractions/attractions";
import Favorites from "@/components/favorites";
import ToursList from "@/components/(front-end)/tours/tour-list";
import { getTours } from "@/actions/tours";
import OurTeam from "@/components/(front-end)/our-team";
import Destinations from "@/components/(front-end)/destinations";
import { getDestinations } from "@/actions/destinations";
import Testimonials from "@/components/(front-end)/testimonials";
import RecentlyViewed from "@/components/(front-end)/recently-viewed";
import Blogs from "@/components/(front-end)/blogs";
import { getBlogs } from "@/actions/blogs";
import AttractionLinks from "@/components/(front-end)/attraction-links";

export default async function page() {
  const tours = (await getTours()) ?? [];
  const blogs = (await getBlogs()) ?? [];
  const categories = (await getCategories()) ?? [];
  const attractions = (await getAttractions()) ?? [];
  const destinations = (await getDestinations()) ?? [];

  return (
    <div className='bg-background dark:bg-background'>
      <Hero />
      <div className='max-w-7xl mx-auto  py-8 px-4 sm:px-6 lg:px-8'>
        <CategoriesList categories={categories} />
      </div>

      <Attractions attractions={attractions} />

      <div className='max-w-7xl mx-auto  py-8 px-4 sm:px-6 lg:px-8'>
        {/* Favorites */}
        <Favorites />

        {/* Tours */}
        <ToursList tours={tours} />

        <OurTeam />

        {/* Destinations */}
        <Destinations destinations={destinations} />

        <Testimonials />

        {/* Recently Viewed */}
        <RecentlyViewed />

        {/* Blogs */}
        <Blogs blogs={blogs} />

        {/* Attraction Links */}
        <AttractionLinks data={attractions} />
      </div>
    </div>
  );
}
