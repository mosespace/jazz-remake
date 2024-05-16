"use client";
import { CheckCheck, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TourSkeletonLoader from "./tour-skeleton-loader";


export default function TourCard({ data }: any) {
  const [recentlyViewedTours, setRecentlyViewedTours] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true); // State variable to track loading status

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }

    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after timeout
    }, 2000); // Adjust timeout duration as needed

    return () => clearTimeout(timer); // Cleanup function
  }, []); // Empty dependency array ensures this effect runs only once, after mount

  const addToRecentlyViewed = (tour: any) => {
    const storedTours = localStorage.getItem("recentlyViewedTours");
    let updatedTours: any[];

    if (storedTours) {
      // Parse storedTours from localStorage
      const parsedTours = JSON.parse(storedTours);

      // Check if the tour already exists in recently viewed tours
      const existingTourIndex = parsedTours.findIndex(
        (t: any) => t.id === tour.id
      );

      if (existingTourIndex !== -1) {
        // If the tour exists, remove it from the array
        parsedTours.splice(existingTourIndex, 1);
      }

      // Add the new tour to the beginning of the array
      updatedTours = [tour, ...parsedTours.slice(0, 9)]; // Limit to 10 recently viewed tours
    } else {
      // If no recently viewed tours exist, initialize the array with the new tour
      updatedTours = [tour];
    }

    // Update state and localStorage with the updated array
    setRecentlyViewedTours(updatedTours);
    localStorage.setItem("recentlyViewedTours", JSON.stringify(updatedTours));
  };

  const toggleFavorite = (tour: any) => {
    const existingIndex = favorites.findIndex(
      (favorite: any) => favorite.id === tour.id
    );
    if (existingIndex !== -1) {
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(existingIndex, 1);
      setFavorites(updatedFavorites);
      toast.success("Removed Tour from favorites Added");
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, tour];
      setFavorites(updatedFavorites);
      toast.success("Added Tour to favorites");
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className='grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
      {loading ? (
        <>
          {data.map((item: any) => (
            <TourSkeletonLoader key={item.id} />
          ))}
        </>
      ) : (
        <>
          {data.map((item: any) => {
            return (
              <Link
                key={item.id}
                href={`/tours/${item.slug}`}
                onClick={() => addToRecentlyViewed(item)}
                className='relative space-y-2'
              >
                <div
                  className='absolute top-2 right-0 bg-background p-2 m-2 rounded-full text-sm font-medium cursor-pointer'
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(item);
                  }}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      favorites.some((favorite: any) => favorite.id === item.id)
                        ? "text-red-500 fill-red-500"
                        : ""
                    }`}
                  />
                </div>
                <Image
                  alt='Lake Victoria'
                  className='w-full h-auto rounded-xl'
                  height={500}
                  loading='lazy'
                  blurDataURL={item.imageUrl ?? "placeholder.svg"}
                  layout='responsive'
                  placeholder='blur'
                  src={item.imageUrl ?? "placeholder.svg"}
                  style={{
                    aspectRatio: "250/200",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <h3 className='text-md font-bold'>{item.title}</h3>
                <div className='flex flex-col md:flex-row gap-2'>
                  <p>
                    <span className='text-sm'>from</span>
                    &nbsp;
                    <span className='font-bold'>${item.pricePerAdult}</span>
                  </p>
                  <div className='flex items-center'>
                    {Array.from({ length: 5 }).map((_, i) => {
                      return (
                        <Star key={i} className='fill-yellow-400 w-4 h-4' />
                      );
                    })}
                    <span className='ml-2 text-sm text-gray-400'>4,444</span>
                  </div>
                </div>
                <div className='flex gap-2 items-center'>
                  <p className='text-sm flex items-center text-gray-600 dark:text-gray-400'>
                    <CheckCheck className='w-3 h-3' />
                    &nbsp;1 to 3 day(s)
                  </p>
                </div>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}
