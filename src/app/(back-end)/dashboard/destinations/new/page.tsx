import React from "react";
import { getTours } from "@/actions/tours";
import DestinationForm from "@/components/(back-end)/Forms/DestinationForm";

export default async function page() {
  const tours = await getTours();

  return (
    <div>
      <DestinationForm tours={tours} />
    </div>
  );
}
