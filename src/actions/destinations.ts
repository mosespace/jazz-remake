"use server";

import { prismaClient } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createDestination(data: any) {
  try {
    const existingDestination = await prismaClient.destination.findUnique({
      where: {
        slug: data.slug,
      },
    });
    if (existingDestination) {
      return {
        data: null,
        error: `Destination with this title already exists in the Database`,
        status: 409,
      };
    }
    const newDestination = await prismaClient.destination.create({
      data,
    });
    // console.log(`Created Destination: ${newDestination}`);
    revalidatePath("/dashboard/destinations");
    return {
      data: newDestination,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getDestinations() {
  try {
    const destinations = await prismaClient.destination.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return destinations;
  } catch (error) {
    console.log(error);
  }
}

export async function getDestinationById(id: string) {
  try {
    const destination = await prismaClient.destination.findUnique({
      where: {
        id,
      },
    });
    return destination;
  } catch (error) {
    console.log(error);
  }
}

export async function getDestinationBySlug(slug: string) {
  try {
    const destination = await prismaClient.destination.findUnique({
      where: {
        slug,
      },
    });
    return destination;
  } catch (error) {
    console.log(error);
  }
}

export async function updateDestination(id: string, data: any) {
  try {
    if (id) {
      const { title, slug, imageUrl, description, tourIds } = data;
      const updatedDestination = await prismaClient.destination.update({
        where: {
          id,
        },
        data: {
          title,
          slug,
          imageUrl,
          description,
          tourIds,
        },
      });
      revalidatePath("/dashboard/destinations");
      console.log(`Updated Attraction: ${updatedDestination}`);
      return updatedDestination;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteDestinationById(id: string | undefined) {
  try {
    if (id) {
      await prismaClient.destination.delete({
        where: {
          id,
        },
      });
      revalidatePath(`/dashboard/destinations`);
      return {
        ok: true,
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteDestinations() {
  try {
    const deleteDestinations = prismaClient.destination.deleteMany({});
    console.log(`All the following have been deleted: ${deleteDestinations}`);
    return deleteDestinations;
  } catch (error) {
    console.log(error);
  }
}
