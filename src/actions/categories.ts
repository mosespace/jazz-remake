"use server";

import { prismaClient } from "@/lib/db";
import { CategoryFormProps } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createCategory(data: CategoryFormProps) {
  try {
    const existingCategory = await prismaClient.category.findUnique({
      where: {
        slug: data.slug,
      },
    });
    if (existingCategory) {
      return {
        data: null,
        error: `Category with this title already exists in the Database`,
        status: 409,
      };
    }
    const newCategory = await prismaClient.category.create({
      data,
    });
    console.log(newCategory);
    revalidatePath("/dashboard/categories");
    return {
      data: newCategory,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getCategories() {
  try {
    const categories = await prismaClient.category.findMany({
      include: {
        tours: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return categories;
  } catch (error) {
    console.log(error);
  }
}
export async function getCategoryBySlug(slug: string) {
  try {
    const category = await prismaClient.category.findUnique({
      where: {
        slug,
      },
      include: {
        tours: true,
      },
    });
    return category;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteCategoryById(id: string | undefined) {
  try {
    if (id) {
      await prismaClient.category.delete({
        where: {
          id,
        },
      });
      revalidatePath("/dashboard/categories");
      return {
        ok: true,
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateCategory(id: string, data: CategoryFormProps) {
  try {
    if (id) {
      const { title, slug, description, imageUrl } = data;
      const updatedCategory = await prismaClient.category.update({
        where: {
          id,
        },
        data: {
          title,
          slug,
          description,
          imageUrl,
        },
      });
      revalidatePath("/dashboard/categories");
      // console.log(updatedCategory);
      return updatedCategory;
    }
  } catch (error) {
    console.log(error);
  }
}
