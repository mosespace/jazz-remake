import React from "react";
import { getBookings } from "@/actions/booking";
import BookingForm from "@/components/(back-end)/booking-form";

export default async function page({ params: { id } }: any) {
  const booking = await getBookings();
  const initialData = booking?.find((booking: any) => booking.id === id);

  // console.log(initialData);
  return (
    <div>
      <BookingForm initialData={initialData} />
    </div>
  );
}
