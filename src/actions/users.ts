"use server";

import { prismaClient } from "@/lib/db";

export async function getUserById(id: string) {
  try {
    const user = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function getUsers() {
  try {
    const users = await prismaClient.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUserById(id: string) {
  try {
    const user = await prismaClient.user.update({
      where: {
        id,
      },
      data: {
        isVerfied: true,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}
