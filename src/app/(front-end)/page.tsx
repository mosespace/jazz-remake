import Hero from "@/components/(front-end)/hero";
// import { getBlogs } from "@/actions/blogs";
// import { getTours } from "@/actions/tours";
// import OurTeam from "@/components/our-team";
// import { Attraction } from "@prisma/client";
// import Blogs from "@/components/Blogs/blogs";
// import Favorites from "@/components/favorites";
// import Testimonials from "@/components/testimonials";
// import { getCategories } from "@/actions/categories";
// import ToursList from "@/components/Tours/ToursList";
// import { getAttractions } from "@/actions/attractions";
// import { getDestinations } from "@/actions/destinations";
// import RecentlyViewed from "@/components/recently-viewed";
// import Attractions from "@/components/Attractions/Attractions";
// import CategoriesList from "@/components/Categories/Categories";
// import Destinations from "@/components/Destinations/Destinations";
// import AttractionLinks from "@/components/Attractions/attraction-links";

export default async function page() {
  // const tours = (await getTours()) ?? [];
  // const blogs = (await getBlogs()) ?? [];
  // const categories = (await getCategories()) ?? [];
  // const attractions = (await getAttractions()) ?? [];
  // const destinations = (await getDestinations()) ?? [];

  return (
    <div className='bg-background dark:bg-background'>
      <Hero />
      {/* <div className='max-w-7xl mx-auto  py-8 px-4 sm:px-6 lg:px-8'>
        <CategoriesList categories={categories} />
      </div> */}
    </div>
  );
}
