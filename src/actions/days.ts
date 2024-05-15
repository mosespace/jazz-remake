"use server";

import { Day } from "@prisma/client";
import { prismaClient } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createDay(data: Day) {
  try {
    const newDay = await prismaClient.day.create({
      data,
    });
    console.log(newDay);
    revalidatePath("/dashboard/tours");
    return {
      data: newDay,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error: "Failed to Create Day",
      status: 500,
    };
  }
}
export async function getDays() {
  try {
    const days = await prismaClient.day.findMany({
    });
    return days;
  } catch (error) {
    console.log(error);
  }
}
export async function getDaysByTour(tourId: string) {
  try {
    if (tourId) {
      const days = await prismaClient.day.findMany({
        orderBy: {
          createdAt: "desc",
        },
        where: {
          tourId,
        },
      });
      return days;
    }
  } catch (error) {
    console.log(error);
  }
}
export async function getDaysById(id: string) {
  try {
    if (id) {
      const day = await prismaClient.day.findUnique({
        where: {
          id,
        },
      });
      return day;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateDay(id: string, data: any) {
  try {
    if (id) {
      const { title, description, tourId, meals } = data;
      const updatedDay = await prismaClient.day.update({
        where: {
          id,
        },
        data: {
          title,
          description,
          tourId,
          meals,
        },
      });
      revalidatePath("/dashboard/tours");
      console.log(`Updated Day: ${updatedDay}`);
      return updatedDay;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteDayById(
  id: string | undefined,
  secondaryId: string | undefined
) {
  try {
    if (id) {
      await prismaClient.day.delete({
        where: {
          id,
        },
      });
      revalidatePath(`/dashboard/tours/${secondaryId}`);
      return {
        ok: true,
      };
    }
  } catch (error) {
    console.log(error);
  }
}
