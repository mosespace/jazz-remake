import React from "react";
import { getTours } from "@/actions/tours";
import { Announcement } from "./announcement";
import { getCategories } from "@/actions/categories";
import { CommandMenuHero } from "./command-menu-hero";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "./page-header";

export default async function Hero() {
  const tourData = (await getTours()) ?? [];
  const categoriesData = (await getCategories()) ?? [];

  return (
    <div className='relative container max-w-full items-center justify-center flex hero-bg-dark min-h-screen'>
      <PageHeader>
        <div className='hidden md:block'>
          <Announcement />
        </div>
        <PageHeaderHeading className='hidden md:block md:font-black text-slate-50'>
          Explore the Africa's Wonders with Our Adventure Tours!
        </PageHeaderHeading>
        <PageHeaderHeading className='md:hidden text-slate-50'>
          Adventure Awaits: Explore the Africa with Us – Anytime, Anywhere!
        </PageHeaderHeading>
        <PageHeaderDescription className='text-slate-200'>
          Discover thrilling africa's adventures! From awe-inspiring landscapes
          to cultural treasures, our tours promise unforgettable experiences.
        </PageHeaderDescription>
        <PageActions>
          <CommandMenuHero
            tourData={tourData}
            categoriesData={categoriesData}
          />
        </PageActions>
      </PageHeader>
    </div>
  );
}
