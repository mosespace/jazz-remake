import { Metadata } from "next";
import { getTours } from "@/actions/tours";
import { getCategories } from "@/actions/categories";
import { getAttractions } from "@/actions/attractions";
import CategoriesPage from "@/components/(front-end)/categories/categories-page";

export const metadata: Metadata = {
  title: "All Categories",
  description:
    "Embark on a journey of discovery with Jazz Africa Adventures' comprehensive selection of categories. Whether you're seeking adventure, relaxation, cultural immersion, or wildlife encounters, our diverse range of categories offers something for every traveler. Explore the untamed wilderness of Kenya's national parks and reserves, where you can witness the iconic Big Five in their natural habitat. Immerse yourself in the vibrant culture and traditions of Kenya's diverse communities through immersive cultural experiences and heritage tours. Indulge in adrenaline-pumping adventures such as hiking, mountain climbing, and hot air balloon safaris for an unforgettable thrill. Or simply unwind on the sun-kissed beaches of the Kenyan coast, where crystal-clear waters and pristine sands beckon. Whatever your passion, Jazz Africa Adventures invites you to embark on an extraordinary journey through the heart and soul of Kenya, where every experience is tailored to exceed your expectations.",
};

export default async function page() {
  const tours: any = (await getTours()) ?? [];
  const categories: any = (await getCategories()) ?? [];
  const attractions: any = (await getAttractions()) ?? [];

  const faq = [
    {
      id: "12",
      question: "Can i purchase any of these tours for later?",
      answer:
        "Yes, according to our terms and conditions, you can purchase any of the listed tours for future reference. Also each tour has a return policy which you can get into details when you click on the tour it's self.",
    },
  ];
  return (
    <CategoriesPage
      faq={faq}
      tours={tours}
      categories={categories}
      attractions={attractions}
    />
  );
}
