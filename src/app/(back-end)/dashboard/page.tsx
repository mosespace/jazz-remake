import React from "react";
import { getTours } from "@/actions/tours";
import { getBookings } from "@/actions/booking";
import { getCategories } from "@/actions/categories";
import { getAttractions } from "@/actions/attractions";
import Dashboard from "@/components/(back-end)/dashboard";

export default async function page() {
  const bookings = await getBookings();
  const categories = await getCategories();
  const tours = await getTours();
  const attractions = await getAttractions();
  return (
    <div>
      <Dashboard
        bookings={bookings}
        categories={categories}
        tours={tours}
        attractions={attractions}
      />
    </div>
  );
}
