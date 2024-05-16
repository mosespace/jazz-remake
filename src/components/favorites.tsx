"use client";

import React, { useEffect, useState } from "react";
import TourCard from "./(front-end)/tours/tour-card";

export default function Favorites() {
  // Favorites viewed tours state
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  return (
    <>
      {favorites.length > 0 && (
        <>
          <h2 className='capitalize text-2xl font-bold'>Your Favorites ❤️</h2>
          <TourCard data={favorites} />
        </>
      )}
    </>
  );
}
