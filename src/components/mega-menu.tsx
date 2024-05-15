"use client";

import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Explore = [
  {
    id: "12",
    title: "About",
    href: "/about-us",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    id: "13",
    title: "Tours",
    href: "/tours",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    id: "14",
    title: "Cancellation",
    href: "/cancellation-policy",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Discover = [
  {
    id: "15",
    title: "Why Book With Us",
    href: "/why-book-with-us",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    id: "16",
    title: "Travel Info",
    href: "/travel-info",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    id: "17",
    title: "Uganda Overview",
    href: "/uganda-overview",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Connect = [
  {
    id: "18",
    title: "Our Team",
    href: "/our-team",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    id: "19",
    title: "Contact",
    href: "/contact-us",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function MegaMenu({ categoriesData }: { categoriesData?: [] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* explore */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent hover:bg-transparent hover:text-current'>
            Explore
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <Link href='/' className='mr-6 flex flex-col items-center'>
                    <div className='flex space-x-2 items-center'>
                      <Image
                        width={200}
                        height={200}
                        className='h-7 w-7'
                        src='/logo.webp'
                        alt={`${siteConfig.name}, Adventures Ug`}
                      />
                      <div className='hidden text-xs uppercase py-2 md:flex md:flex-col font-bold'>
                        <span className='mb-1'>{siteConfig.name}</span>
                        <span className='border-t-2 border-black'></span>
                        <span className='mt-1'>Adventures UG</span>
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='mb-2 mt-4 text-lg font-medium'></div>
                      <p className='text-sm leading-tight text-muted-foreground'>
                        Explore Uganda's wonders with Jazz Africa Adventures.
                        Unforgettable safaris, national parks, mountains,
                        hiking, and chimpanzee encounters. Expert guides,
                        personalized attention. Discover Uganda today!
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>

              {Explore.map((link) => (
                <ListItem key={link.id} title={link.title} href={link.href}>
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* discover */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent hover:bg-transparent hover:text-current'>
            Discover
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {Discover.map((link) => (
                <ListItem key={link.id} title={link.title} href={link.href}>
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* connect */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent hover:bg-transparent hover:text-current'>
            Connect
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {Connect.map((link) => (
                <ListItem key={link.id} title={link.title} href={link.href}>
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* categories */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent hover:bg-transparent hover:text-current'>
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {categoriesData?.map((link: any) => (
                <ListItem
                  key={link.id}
                  title={link.title}
                  href={`c/${link.slug}`}
                >
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
