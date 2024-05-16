import React from "react";
import { columns } from "./columns";
import { getBookings } from "@/actions/booking";
import PageHeader from "@/components/(back-end)/page-header";
import DataTable from "@/components/(back-end)/data-table";

export default async function page() {
  const bookings: any = (await getBookings()) || [];
  return (
    <div>
      <PageHeader
        pageTitle='Bookings'
        path='/dashboard/bookings/new'
        linkText='Add Booking'
      />
      <div className='py-8'>
        <DataTable data={bookings} columns={columns} />
      </div>
    </div>
  );
}
