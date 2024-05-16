import React from "react";
import { columns } from "./columns";
import { Tour } from "@prisma/client";
import { getTours } from "@/actions/tours";
import PageHeader from "@/components/(back-end)/page-header";
import DataTable from "@/components/(back-end)/data-table";

export default async function page() {
  const tours: Tour[] = (await getTours()) || [];
  return (
    <div>
      <PageHeader
        pageTitle='Tours'
        path='/dashboard/tours/new'
        linkText='Add Tour'
      />
      <div className='py-8'>
        <DataTable data={tours} columns={columns} />
      </div>
    </div>
  );
}
