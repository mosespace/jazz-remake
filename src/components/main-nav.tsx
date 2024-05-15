"use client";

import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MegaMenu } from "@/components/mega-menu";

export function MainNav({ categoriesData }: { categoriesData?: [] }) {
  return (
    <div className='mr-4 hidden md:flex'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Image
          width={200}
          height={200}
          className='h-7 w-7'
          src='/logo.webp'
          alt={`${siteConfig.name}, Adventures Ug`}
        />
        <div className='hidden text-xs uppercase py-2 md:flex md:flex-col font-bold'>
          <span className='mb-1'>{siteConfig.name}</span>
          <span className='border-t-2 dark:border-foreground border-black'></span>
          <span className='mt-1'>Adventures UG</span>
        </div>
      </Link>
      <MegaMenu categoriesData={categoriesData} />
    </div>
  );
}
