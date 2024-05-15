"use server";

import { prismaClient } from "@/lib/db";
import { Book } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createBooking(data: Book) {
  try {
    const newBooking = await prismaClient.book.create({
      data: {
        name: data.name,
        phone: data.phone,
        adults: data.adults,
        children: data.children,
        email: data.email,
        requirements: data.requirements,
        date: data.date,
        tour: {
          connect: { id: data.tourId },
        },
      },
    });
    console.log(newBooking);
    revalidatePath("/dashboard/bookings");
    console.log(`Booking Created: ${newBooking}`);
    return {
      data: newBooking,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log(error);
    // You might want to handle the error here, e.g., return an error response
  }
}

export async function updateBooking(id: string, data: Book) {
  try {
    if (id) {
      const { name, email, phone, adults, children, date } = data;
      const updatedBooking = await prismaClient.book.update({
        where: {
          id,
        },
        data: {
          name,
          email,
          phone,
          adults,
          children,
          date,
        },
      });
      console.log(updatedBooking);
      revalidatePath("/dashboard/bookings");
      return updatedBooking;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getBookings() {
  try {
    const booking = await prismaClient.book.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return booking;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBooks() {
  try {
    const deleteUsers = prismaClient.book.deleteMany({});
    console.log(`All the following have been deleted: ${deleteUsers}`);
    return deleteUsers;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBookingById(id: string | undefined) {
  try {
    if (id) {
      await prismaClient.book.delete({
        where: {
          id,
        },
      });
      revalidatePath("/dashboard/bookings");
      return {
        ok: true,
      };
    }
  } catch (error) {
    console.log(error);
  }
}
