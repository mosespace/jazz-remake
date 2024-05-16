import { getCategories } from "@/actions/categories";
import React from "react";
import { columns } from "./columns";
import { Category } from "@prisma/client";
import DataTable from "@/components/(back-end)/data-table";
import PageHeader from "@/components/(back-end)/page-header";

export default async function page() {
  const categories: Category[] = (await getCategories()) || [];
  return (
    <div>
      <PageHeader
        pageTitle='Categories'
        path='/dashboard/categories/new'
        linkText='Add Category'
      />
      <div className='py-8'>
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}
