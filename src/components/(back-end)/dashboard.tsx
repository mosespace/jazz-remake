"use client";

import { Button } from "@/components/ui/button";
import { Crosshair, Cpu, FolderSync, Activity } from "lucide-react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Dashboard({
  bookings,
  categories,
  tours,
  attractions,
}: any) {
  const router = useRouter();
  const handleViewAllClick = () => {
    router.push("/dashboard/bookings");
  };

  const handleCategoryViewAll = () => {
    router.push("/dashboard/categories");
  };
  return (
    <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
      <div className='grid gap-2 grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Tours</CardTitle>
            <Cpu className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{tours.length}</div>
            <p className='text-xs text-muted-foreground'>
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Tour categories
            </CardTitle>
            <Crosshair className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{categories.length}</div>
            <p className='text-xs text-muted-foreground'>
              +180.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Bookings
            </CardTitle>
            <FolderSync className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{bookings.length}</div>
            <p className='text-xs text-muted-foreground'>
              +19% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Attractions
            </CardTitle>
            <Activity className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{attractions.length}</div>
            <p className='text-xs text-muted-foreground'>
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      {/* recent-bookings */}
      <div className='mt-4 md:mt-6'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-base font-bold'>
              Recent Bookings
            </CardTitle>
            <Button
              onClick={() => handleViewAllClick()}
              size='sm'
              variant='outline'
            >
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='font-bold'>Name</TableHead>
                  <TableHead className='font-bold'>Email</TableHead>
                  <TableHead className='font-bold'>Phone</TableHead>
                  <TableHead className='text-right font-bold'>
                    Booked On
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.slice(0, 4).map((item: any) => {
                  const originalDate = new Date(item.date);

                  const day = originalDate.getDate();
                  const month = originalDate.toLocaleString("default", {
                    month: "short",
                  });
                  const year = originalDate.getFullYear();

                  const formatted = `${day}th ${month} ${year}`;

                  return (
                    <TableRow key={item.id}>
                      <TableCell className='font-medium'>{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      <TableCell className='text-right'>{formatted}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* recent-categories */}
      <div className='mt-4 md:mt-6'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-base font-bold'>
              Recent Categories
            </CardTitle>
            <Button
              onClick={() => handleCategoryViewAll()}
              size='sm'
              variant='outline'
            >
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='font-bold'>Title</TableHead>
                  <TableHead className='font-bold'>Image</TableHead>
                  <TableHead className='font-bold'>Description</TableHead>
                  <TableHead className='text-right font-bold'>
                    CreatedAt
                  </TableHead>
                  <TableHead className='text-right font-bold'>
                    UpdatedAt
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.slice(0, 4).map((item: any) => {
                  // created-at
                  const createdAtDate = new Date(item.createdAt);
                  const day = createdAtDate.getDate();
                  const month = createdAtDate.toLocaleString("default", {
                    month: "short",
                  });
                  const year = createdAtDate.getFullYear();
                  const formattedCreatedAt = `${day}th ${month} ${year}`;

                  // updated-at
                  const updatedAtDate = new Date(item.createdAt);
                  const day2 = updatedAtDate.getDate();
                  const month2 = updatedAtDate.toLocaleString("default", {
                    month: "short",
                  });
                  const year2 = updatedAtDate.getFullYear();
                  const formattedUpdatedAt = `${day2}th ${month2} ${year2}`;

                  return (
                    <TableRow key={item.id}>
                      <TableCell className='font-medium'>
                        {item.title}
                      </TableCell>

                      <TableCell>
                        <Image
                          width={400}
                          height={400}
                          src={item.imageUrl}
                          alt={item.title}
                          className='w-10 h-10 rounded-lg object-cover object-center'
                        />
                      </TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell className='text-right'>
                        {formattedCreatedAt}
                      </TableCell>
                      <TableCell className='text-right'>
                        {formattedUpdatedAt}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
