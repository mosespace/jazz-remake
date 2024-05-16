import React from "react";
import { getTours } from "@/actions/tours";
import AttractionsForm from "@/components/(back-end)/Forms/AttractionsForm";

export default async function page() {
  const tours = await getTours();

  return (
    <div>
      <AttractionsForm tours={tours} />
    </div>
  );
}
