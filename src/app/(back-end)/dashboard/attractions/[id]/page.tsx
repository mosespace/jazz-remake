import React from "react";
import { getTours } from "@/actions/tours";
import { getAttractionById } from "@/actions/attractions";
import AttractionsForm from "@/components/(back-end)/Forms/AttractionsForm";

export default async function page({ params: { id } }: any) {
  const attraction = await getAttractionById(id);
  const tours = (await getTours()) ?? [];
  //   console.log(attraction);
  return (
    <div>
      <AttractionsForm initialData={attraction} tours={tours} />
    </div>
  );
}
