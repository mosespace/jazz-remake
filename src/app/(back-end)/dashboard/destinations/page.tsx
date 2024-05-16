import React from "react";
import { columns } from "./columns";
import { getDestinations } from "@/actions/destinations";
import PageHeader from "@/components/(back-end)/page-header";
import DataTable from "@/components/(back-end)/data-table";

export default async function page() {
  const destinations: any = (await getDestinations()) || [];
  // console.log(attractions);
  return (
    <div>
      <PageHeader
        pageTitle='Destinations'
        path='/dashboard/destinations/new'
        linkText='Add Destination'
      />
      <div className='py-8'>
        <DataTable data={destinations} columns={columns} />
      </div>
    </div>
  );
}
