import React from "react";
import { getCategories } from "@/actions/categories";
import CategoryForm from "@/components/(back-end)/Forms/CategoryForm";

export default async function page({ params: { id } }: any) {
  const categories = await getCategories();
  const initialData = categories?.find((category: any) => category.id === id);

  // console.log(initialData);
  return (
    <div>
      <CategoryForm initialData={initialData} />
    </div>
  );
}
