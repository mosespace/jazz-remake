import { getCategories } from "@/actions/categories";
import TourForm from "@/components/(back-end)/Forms/TourForm";
import { Category } from "@prisma/client";
import React from "react";

export default async function page() {
  const categories: Category[] = (await getCategories()) || [];
  return (
    <div>
      <TourForm categories={categories} />
    </div>
  );
}
