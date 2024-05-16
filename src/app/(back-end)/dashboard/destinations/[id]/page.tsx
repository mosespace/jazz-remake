import React from "react";
import { getTours } from "@/actions/tours";
import { getDestinationById } from "@/actions/destinations";
import DestinationForm from "@/components/(back-end)/Forms/DestinationForm";

export default async function page({ params: { id } }: any) {
  const destination = await getDestinationById(id);
  const tours = await getTours();
  // console.log(destination);
  return (
    <div>
      <DestinationForm initialData={destination} tours={tours} />
    </div>
  );
}
