import React from "react";
import { getAttractionBySlug, getAttractions } from "@/actions/attractions";
import { Metadata } from "next";
import { getTours } from "@/actions/tours";
import AttractionPage from "@/components/(front-end)/attractions/attraction-page";

export const metadata: Metadata = {
  title: "Attractions",
  description:
    "Embark on an unforgettable journey with Jazz Africa Adventures and discover the mesmerizing attractions of Kenya. From the majestic savannahs teeming with wildlife to the pristine beaches lapped by turquoise waters, Kenya boasts a treasure trove of natural wonders waiting to be explored. Immerse yourself in the vibrant culture and rich history as you visit iconic landmarks, ancient ruins, and bustling markets. Whether you're seeking adventure, relaxation, or cultural immersion, our curated selection of attractions offers something for every traveler. Let Jazz Africa Adventures be your guide to the extraordinary beauty and diversity of Kenya's attractions.",
};

export default async function page({ params: { slug } }: any) {
  const attraction: any = (await getAttractionBySlug(slug)) ?? {};

  const tours = (await getTours()) ?? [];

  const tourIds = attraction?.tourIds || [];

  const attractions = (await getAttractions()) ?? [];

  // filtering tours whose id is equal to the tourIds
  const toursInAttraction: any = tours?.filter((tour: any) =>
    tourIds.includes(tour.id)
  );
  return (
    <AttractionPage
      data={attraction}
      tours={toursInAttraction}
      attractions={attractions}
    />
  );
}
