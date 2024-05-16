"use client";
import {
  Bell,
  Home,
  LineChart,
  ShoppingCart,
  Users,
  Truck,
  Piano,
  LayoutPanelTop,
  Pyramid,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GiAfrica } from "react-icons/gi";
import { signOut } from "next-auth/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar({ bookings }: any) {
  const pathname = usePathname();

  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: Home,
    },
    {
      name: "Tours",
      path: "/dashboard/tours",
      icon: Truck,
    },
    {
      name: "Categories",
      path: "/dashboard/categories",
      icon: LayoutPanelTop,
    },
    {
      name: "Destinations",
      path: "/dashboard/destinations",
      icon: Pyramid,
    },
    {
      name: "Attractions",
      path: "/dashboard/attractions",
      icon: Piano,
    },
    {
      name: "Bookings",
      path: "/dashboard/bookings",
      icon: ShoppingCart,
      badgeCount: bookings.length,
    },
    {
      name: "Customers",
      path: "/dashboard/customers",
      icon: Users,
    },
    {
      name: "Blogs",
      path: "/dashboard/blogs",
      icon: LineChart,
      new: true,
    },
  ];

  const router = useRouter();

  async function handleLogout() {
    await signOut();
    router.push("/");
  }

  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <GiAfrica className='h-6 w-6' />
            <span className=''>Jazz Africa</span>
          </Link>
          <Button variant='outline' size='icon' className='ml-auto h-8 w-8'>
            <Bell className='h-4 w-4' />
            <span className='sr-only'>Toggle notifications</span>
          </Button>
        </div>
        <div className='flex-1'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            {sidebarLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  href={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary",
                    pathname === `${item.path}`
                      ? "bg-muted text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <Icon className='h-4 w-4' />
                  {item.name}
                  {item.new && ( // Conditionally render the "new" indicator
                    <div className='ml-auto bg-green-500 text-white text-xs font-bold px-2 rounded'>
                      New
                    </div>
                  )}
                  <div className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                    {item.badgeCount && (
                      <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                        {item.badgeCount}
                      </Badge>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className='mt-auto p-4'>
          <Button
            onClick={() => handleLogout()}
            size='sm'
            className='w-full cursor-pointer'
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
