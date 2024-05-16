import { getAttractions } from "@/actions/attractions";
import { getCategories } from "@/actions/categories";
import { getTours } from "@/actions/tours";
import ToursPage from "@/components/(front-end)/tours/tours-page";
import { Attraction } from "@prisma/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Explore the wonders of Kenya with Jazz Africa Adventures' curated selection of tours. Whether you're seeking thrilling safaris, relaxing beach getaways, or immersive cultural experiences, we have the perfect itinerary to suit your interests and preferences. Embark on unforgettable adventures to iconic destinations such as the Maasai Mara, Amboseli National Park, and the beautiful coastal towns of Mombasa and Lamu. Led by experienced guides and designed with your comfort and enjoyment in mind, our tours offer a seamless blend of exploration, relaxation, and cultural immersion. Let Jazz Africa Adventures be your guide to the breathtaking beauty and boundless adventures of Kenya.",
};

export default async function page() {
  const tours = (await getTours()) ?? [];
  const categories = (await getCategories()) ?? [];
  const attractions: Attraction[] = (await getAttractions()) ?? [];

  const faq = [
    {
      id: "12",
      question: "Can i purchase any of these tours for later?",
      answer:
        "Yes, according to our terms and conditions, you can purchase any of the listed tours for future reference. Also each tour has a return policy which you can get into details when you click on the tour it's self.",
    },
  ];
  return (
    <ToursPage
      faq={faq}
      tours={tours}
      categories={categories}
      attractions={attractions}
    />
  );
}
