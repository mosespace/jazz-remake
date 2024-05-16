import React from "react";
import { getBlogById } from "@/actions/blogs";
import BlogForm from "@/components/(back-end)/blog-form";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const blogId = id;
  const blog = await getBlogById(blogId);

  return (
    <div>
      <BlogForm blog={blog || undefined} />
    </div>
  );
}
