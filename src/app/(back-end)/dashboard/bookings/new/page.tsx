import React from "react";
import { getTours } from "@/actions/tours";
import BookingForm from "@/components/(back-end)/booking-form";

export default async function page() {
  const tours = await getTours()
  return (
    <div>
      <BookingForm tours={tours}/>
    </div>
  );
}
