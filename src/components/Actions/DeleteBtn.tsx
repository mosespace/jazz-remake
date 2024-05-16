"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Trash2, Loader } from "lucide-react";
import { deleteDayById } from "@/actions/days";
import { deleteFaqById } from "@/actions/faqs";
import { deleteTourById } from "@/actions/tours";
import { deleteBlogById } from "@/actions/blogs";
import { deleteBookingById } from "@/actions/booking";
import { deleteCategoryById } from "@/actions/categories";
import { deleteAttractionById } from "@/actions/attractions";
import { deleteDestinationById } from "@/actions/destinations";

export default function DeleteBtn({
  title,
  title2,
  id,
  secondaryId,
}: {
  title?: string | undefined;
  title2?: string | undefined;
  id: string | undefined;
  secondaryId?: string | undefined;
}) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        if (title?.toLowerCase() === "category") {
          await deleteCategory(id);
        } else if (title?.toLowerCase() === "tour") {
          await deleteTour(id);
        } else if (title?.toLowerCase() === "booking") {
          await deleteBooking(id);
        } else if (title?.toLowerCase() === "attraction") {
          await deleteAttraction(id);
        } else if (title?.toLowerCase() === "destination") {
          await deleteDestination(id);
        } else if (title?.toLowerCase() === "blog") {
          await deleteBlog(id);
        } else if (title2?.toLowerCase() === "day") {
          await deleteDay(id, secondaryId);
        } else if (title2?.toLowerCase() === "faq") {
          await deleteFaq(id, secondaryId);
        }
        toast.success(`${title || title2} Deleted Successfully`);
      } catch (error) {
        console.error("Error deleting:", error);
        toast.error(`Failed to delete ${title}`);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const deleteCategory = async (categoryId: string | undefined) => {
    const res = await deleteCategoryById(categoryId);
    if (!res?.ok) {
      throw new Error("Failed to delete category");
    }
  };

  const deleteTour = async (tourId: string | undefined) => {
    const res = await deleteTourById(tourId);
    if (!res?.ok) {
      throw new Error("Failed to delete tour");
    }
  };

  const deleteBooking = async (bookId: string | undefined) => {
    const res = await deleteBookingById(bookId);
    if (!res?.ok) {
      throw new Error("Failed to delete a Booking");
    }
  };

  const deleteAttraction = async (attractionId: string | undefined) => {
    const res = await deleteAttractionById(attractionId);
    if (!res?.ok) {
      throw new Error("Failed to delete Attraction");
    }
  };

  const deleteDestination = async (destinationId: string | undefined) => {
    const res = await deleteDestinationById(destinationId);
    if (!res?.ok) {
      throw new Error("Failed to delete Destination");
    }
  };

  const deleteBlog = async (blogId: string | undefined) => {
    const res = await deleteBlogById(blogId);
    if (!res?.ok) {
      throw new Error("Failed to delete Blog");
    }
  };

  const deleteDay = async (
    tourId: string | undefined,
    secondaryId: string | undefined
  ) => {
    const res = await deleteDayById(tourId, secondaryId);
    if (!res?.ok) {
      throw new Error("Failed to delete tour");
    }
  };

  const deleteFaq = async (
    tourId: string | undefined,
    secondaryId: string | undefined
  ) => {
    const res = await deleteFaqById(tourId, secondaryId);
    if (!res?.ok) {
      throw new Error("Failed to delete Frequently Asked Question");
    }
  };

  return (
    <>
      <button
        onClick={handleDelete}
        className='font-medium text-red-600 dark:text-red-500 flex items-center space-x-1'
      >
        {loading ? (
          <Loader className='w-4 h-4 animate-spin' />
        ) : (
          <Trash2 className='w-4 h-4' />
        )}
        <span>Delete {title}</span>
      </button>
    </>
  );
}
