import Link from "next/link";
import Image from "next/image";
import { FaChrome } from "react-icons/fa";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-white py-10'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
          <div>
            <Link
              href='/'
              className='mr-6 dark:text-background flex items-center space-x-2'
            >
              <Image
                width={200}
                height={200}
                className='h-7 w-7'
                src='/logo.webp'
                alt={`${siteConfig.name}, Adventures Ug`}
              />
              <div className='hidden text-xs uppercase py-2 md:flex md:flex-col font-bold'>
                <span className='mb-1'>{siteConfig.name}</span>
                <span className='border-t-2 border-foreground dark:border-background'></span>
                <span className='mt-1'>Adventures UG</span>
              </div>
            </Link>
            <p className='mt-4 text-sm text-gray-500'>
              Explore a curated list of Our Trusted Partners, where
              collaboration and shared values drive the success of our
              collective endeavors, fostering a network built on trust and
              innovation.
            </p>
            <div className='flex mt-4 space-x-3'>
              <Facebook className='text-blue-600 h-6 w-6' />
              <Twitter className='text-blue-400 h-6 w-6' />
              <Instagram className='text-pink-600 h-6 w-6' />
              <Linkedin className='text-blue-700 h-6 w-6' />
              <FaChrome className='text-red-600 h-6 w-6' />
            </div>
          </div>

          {/* links */}
          <div>
            <h3 className='text-lg font-semibold dark:text-background'>
              Links
            </h3>
            <ul className='mt-4 space-y-2'>
              {docsConfig.mainNav.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      className='text-sm text-gray-600 hover:text-gray-800'
                      href={item.href as string}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* connect */}
          <div>
            <h3 className='text-lg font-semibold  dark:text-background'>
              Connect
            </h3>
            <ul className='mt-4 space-y-2'>
              {docsConfig.sidebarNav[2].items.map((item: any, i: any) => {
                return (
                  <li key={i}>
                    <Link
                      className='text-sm text-gray-600 hover:text-gray-800'
                      href={item.href as string}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}

              <li>
                <Link
                  className='text-sm text-gray-600 hover:text-gray-800'
                  href='#'
                >
                  +256-778-457-411
                </Link>
              </li>
              <li>
                <Link
                  className='text-sm text-gray-600 hover:text-gray-800'
                  href='#'
                >
                  +256-787-439-086
                </Link>
              </li>
            </ul>
          </div>

          {/* discover */}
          <div>
            <h3 className='text-lg font-semibold  dark:text-background'>
              Discover
            </h3>
            <ul className='mt-4 space-y-2'>
              {docsConfig.sidebarNav[1].items.map((item: any, i: any) => {
                return (
                  <li key={i}>
                    <Link
                      className='text-sm text-gray-600 hover:text-gray-800'
                      href={item.href as string}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* explore */}
          <div>
            <h3 className='text-lg font-semibold dark:text-background'>
              Explore
            </h3>
            <ul className='mt-4 space-y-2'>
              {docsConfig.sidebarNav[0].items.map((item: any, i: any) => {
                return (
                  <li key={i}>
                    <Link
                      className='text-sm text-gray-600 hover:text-gray-800'
                      href={item.href as string}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-200 pt-8'>
          <p className='text-sm text-gray-500 text-center'>
            © Copyright by JAZZ AFRICA ADVENTURES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
