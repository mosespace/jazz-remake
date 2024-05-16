import React from "react";
import { getDaysByTour } from "@/actions/days";
import { getTourById } from "@/actions/tours";
import { getFAQsByTour } from "@/actions/faqs";
import { getCategories } from "@/actions/categories";
import TourForms from "@/components/(back-end)/ToursForms/TourForms";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const tour = await getTourById(id);
  const categories = (await getCategories()) || [];
  const days = (await getDaysByTour(id)) || [];
  const faqs = (await getFAQsByTour(id)) || [];

  // const { tab } = searchParams;
  // console.log(tab);
  return (
    <>
      {tour && tour.id && (
        <div>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4'>
            {tour?.title}
          </h2>
          <div className=''>
            <TourForms
              faqs={faqs}
              days={days}
              tour={tour}
              categories={categories}
            />
          </div>
        </div>
      )}
    </>
  );
}
