"use server";

import { Faq } from "@prisma/client";
import { prismaClient } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createFAQ(data: Faq) {
  try {
    const newFaq = await prismaClient.faq.create({
      data,
    });
    console.log(newFaq);
    revalidatePath("/dashboard/tours");
    return {
      data: newFaq,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error: "Failed to Create FAQ",
      status: 500,
    };
  }
}
export async function getFaqs() {
  try {
    const FAQS = await prismaClient.faq.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return FAQS;
  } catch (error) {
    console.log(error);
  }
}
export async function getFAQsByTour(tourId: string) {
  try {
    if (tourId) {
      const faqs = await prismaClient.faq.findMany({
        orderBy: {
          createdAt: "desc",
        },
        where: {
          tourId,
        },
      });
      return faqs;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFaqById(
  id: string | undefined,
  secondaryId: string | undefined
) {
  try {
    if (id) {
      await prismaClient.faq.delete({
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

export async function updateFaq(id: string, data: any) {
  try {
    if (id) {
      const { qn, ans, tourId } = data;
      const updatedFaq = await prismaClient.faq.update({
        where: {
          id,
        },
        data: {
          qn,
          ans,
          tourId,
        },
      });
      revalidatePath("/dashboard/tours");
      console.log(`Updated Day: ${updatedFaq}`);
      return updatedFaq;
    }
  } catch (error) {
    console.log(error);
  }
}
