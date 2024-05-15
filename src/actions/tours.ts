"use server";

import { prismaClient } from "@/lib/db";
import { Tour } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createTour(data: Tour) {
  try {
    const existingTour = await prismaClient.tour.findUnique({
      where: {
        slug: data.slug,
      },
    });
    if (existingTour) {
      return {
        data: null,
        error: `Tour with this title  already exists in the Database`,
        status: 409,
      };
    }
    const newTour = await prismaClient.tour.create({
      data,
    });
    console.log(newTour);
    revalidatePath("/dashboard/tours");
    return {
      data: newTour,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getTours() {
  try {
    const tours = await prismaClient.tour.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        days: true,
      },
    });
    revalidatePath("/dashboard/tours");
    return tours;
  } catch (error) {
    console.log(error);
  }
}

export async function getTourById(id: string) {
  try {
    const tour = await prismaClient.tour.findUnique({
      where: {
        id,
      },
      include: {
        days: true,
        faqs: true,
      },
    });
    return tour;
  } catch (error) {
    console.log(error);
  }
}

export async function getTourBySlug(slug: string) {
  try {
    const tour = await prismaClient.tour.findUnique({
      where: {
        slug,
      },
      include: {
        days: true,
        faqs: true,
      },
    });
    return tour;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTourById(id: string | undefined) {
  try {
    if (id) {
      await prismaClient.tour.delete({
        where: {
          id,
        },
      });
      revalidatePath(`/dashboard/tours`);
      return {
        ok: true,
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateTour(id: string, data: any) {
  try {
    if (id) {
      const {
        title,
        slug,
        imageUrl,
        imageUrls,
        description,
        pricePerAdult,
        pricePerChild,
        stepCount,
        whatsIncluded,
        additionalInfo,
        travelerPhotos,
        cancellationPolicy,
        departureAndReturn,
        pickupStation,
      } = data;
      const updatedTour = await prismaClient.tour.update({
        where: {
          id,
        },
        data: {
          title,
          slug,
          imageUrl,
          imageUrls,
          description,
          pricePerAdult,
          pricePerChild,
          stepCount,
          whatsIncluded,
          additionalInfo,
          travelerPhotos,
          cancellationPolicy,
          departureAndReturn,
          pickupStation,
        },
      });
      // console.log(`Updated tour; ${updatedTour}`);
      return updatedTour;
    }
  } catch (error) {
    console.log(error);
  }
}
