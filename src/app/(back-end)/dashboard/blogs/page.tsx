import React from "react";
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
import { getBlogs } from "@/actions/blogs";
import ActionColumn from "@/components/(back-end)/DataTableColumns/ActionColumn";
import PageHeader from "@/components/(back-end)/page-header";

export default async function page() {
  const blogs = await getBlogs();
  // console.log(blogs);
  return (
    <div>
      <PageHeader
        pageTitle='Blogs'
        path='/dashboard/blogs/new'
        linkText='Add Blog'
      />
      {/* recent-blogs */}
      <div className='mt-4 md:mt-6'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-base font-bold'>Recent Blogs</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='font-bold'>Title</TableHead>
                  <TableHead className='font-bold'>Thumbnail</TableHead>
                  <TableHead className='font-bold'>Description</TableHead>
                  <TableHead className='text-right font-bold'>
                    CreatedAt
                  </TableHead>
                  <TableHead className='text-right font-bold'>
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs?.slice(0, 4).map((item: any) => {
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

                  return (
                    <TableRow key={item.id}>
                      <TableCell className='font-medium'>
                        {item.title}
                      </TableCell>

                      <TableCell>
                        <Image
                          width={200}
                          height={200}
                          src={item.thumbnail}
                          alt={item.description}
                          className='w-10 h-10 rounded-lg object-cover object-center'
                        />
                      </TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell className='text-right'>
                        {formattedCreatedAt}
                      </TableCell>
                      <TableCell className='text-right'>
                        <ActionColumn
                          row=''
                          title='blog'
                          editEndpoint={`blogs/${item.id}`}
                          id={item.id}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
