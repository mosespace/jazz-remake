"use client";

import TourCard from "./tours/tour-card";
import React, { useEffect, useState } from "react";

export default function RecentlyViewed() {
  // Recently viewed tours state
  const [recentlyViewedTours, setRecentlyViewedTours] = useState<string[]>([]);

  useEffect(() => {
    const storedTours = localStorage.getItem("recentlyViewedTours");
    if (storedTours) {
      setRecentlyViewedTours(JSON.parse(storedTours));
    }
  }, []);
  return (
    <>
      {recentlyViewedTours.length > 0 && (
        <>
          <h2 className='capitalize text-2xl font-bold'>
            Recently Viewed Tours 👀
          </h2>
          <TourCard data={recentlyViewedTours} />
        </>
      )}
    </>
  );
}
