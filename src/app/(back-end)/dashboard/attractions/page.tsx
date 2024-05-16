import React from "react";
import { columns } from "./columns";
import { Attraction } from "@prisma/client";
import { getAttractions } from "@/actions/attractions";
import PageHeader from "@/components/(back-end)/page-header";
import DataTable from "@/components/(back-end)/data-table";

export default async function page() {
  const attractions: Attraction[] = (await getAttractions()) || [];
  // console.log(attractions);
  return (
    <div>
      <PageHeader
        pageTitle='Attractions'
        path='/dashboard/attractions/new'
        linkText='Add Attraction'
      />
      <div className='py-8'>
        <DataTable data={attractions} columns={columns} />
      </div>
    </div>
  );
}
