"use server";

import { prismaClient } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createAttraction(data: any) {
  try {
    const existingAttraction = await prismaClient.attraction.findUnique({
      where: {
        slug: data.slug,
      },
    });
    if (existingAttraction) {
      return {
        data: null,
        error: `Attraction with this title already exists in the Database`,
        status: 409,
      };
    }
    const newAttraction = await prismaClient.attraction.create({
      data,
    });
    // console.log(newAttraction);
    revalidatePath("/dashboard/attractions");
    return {
      data: newAttraction,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getAttractions() {
  try {
    const attractions = await prismaClient.attraction.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return attractions;
  } catch (error) {
    console.log(error);
  }
}

export async function getAttractionById(id: string) {
  try {
    const attraction = await prismaClient.attraction.findUnique({
      where: {
        id,
      },
    });
    return attraction;
  } catch (error) {
    console.log(error);
  }
}

export async function getAttractionBySlug(slug: string) {
  try {
    const attraction = await prismaClient.attraction.findUnique({
      where: {
        slug,
      },
    });
    return attraction;
  } catch (error) {
    console.log(error);
  }
}

export async function updateAttraction(id: string, data: any) {
  try {
    if (id) {
      const {
        title,
        slug,
        description,
        imageUrl,
        tourIds,
        location,
        history,
        thingsToKnow,
        how,
        when,
      } = data;
      const updatedAttraction = await prismaClient.attraction.update({
        where: {
          id,
        },
        data: {
          title,
          slug,
          description,
          imageUrl,
          tourIds,
          location,
          history,
          thingsToKnow,
          how,
          when,
        },
      });
      revalidatePath("/dashboard/attractions");
      console.log(`Updated Attraction: ${updatedAttraction}`);
      return updatedAttraction;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAttractionById(id: string | undefined) {
  try {
    if (id) {
      await prismaClient.attraction.delete({
        where: {
          id,
        },
      });
      revalidatePath("/dashboard/attractions");
      return {
        ok: true,
      };
    }
  } catch (error) {
    console.log(error);
  }
}
