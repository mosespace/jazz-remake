import React from "react";
import { redirect } from "next/navigation";
import { getBookings } from "@/actions/booking";
import Navbar from "@/components/(back-end)/nav-bar";
import Sidebar from "@/components/(back-end)/side-bar";
import { getCurrentUser } from "@/providers/auth-provider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: any = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const bookings = (await getBookings()) ?? [];
  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <Sidebar bookings={bookings} />
      <div className='flex flex-col'>
        <Navbar user={user} />
        <main className='p-4 lg:p-6'>{children}</main>
      </div>
    </div>
  );
}
