"use server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/config/auth-options";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}
