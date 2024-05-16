"use server";

import { prismaClient } from "@/lib/db";
import { Blog } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createBlog(data: Blog) {
  try {
    const newBlog = await prismaClient.blog.create({
      data: {
        title: data.title,
        slug: data.slug,
        thumbnail: data.thumbnail,
        description: data.description,
        content: data.content,
      },
    });
    console.log(newBlog);
    revalidatePath("/dashboard/blogs");
    // console.log(`Blog Created: ${newBlog}`);
    return {
      data: newBlog,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log(error);
    // You might want to handle the error here, e.g., return an error response
  }
}

export async function updateBlog(blogId: string, data: Blog) {
  try {
    if (blogId) {
      const { title, slug, thumbnail, description, content } = data;
      const updatedBlog = await prismaClient.blog.update({
        where: {
          id: blogId,
        },
        data: {
          title,
          slug,
          thumbnail,
          description,
          content,
        },
      });
      // console.log(updatedBlog);
      revalidatePath("/dashboard/blogs");
      return updatedBlog;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getBlogs() {
  try {
    const blogs = await prismaClient.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return blogs;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBlogs() {
  try {
    const deletedBlogs = prismaClient.blog.deleteMany({});
    console.log(`All the following have been deleted: ${deletedBlogs}`);
    revalidatePath("/dashboard/blogs");
    return deletedBlogs;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBlogById(blogId: string | undefined) {
  try {
    if (blogId) {
      await prismaClient.blog.delete({
        where: {
          id: blogId,
        },
      });
      revalidatePath("/dashboard/blogs");
      return {
        ok: true,
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getBlogById(blogId: string) {
  try {
    if (blogId) {
      const blog = await prismaClient.blog.findUnique({
        where: {
          id: blogId,
        },
      });
      return blog;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getBlogBySlug(slug: string) {
  try {
    if (slug) {
      const blog = await prismaClient.blog.findUnique({
        where: {
          slug,
        },
      });
      return blog;
    }
  } catch (error) {
    console.log(error);
  }
}
