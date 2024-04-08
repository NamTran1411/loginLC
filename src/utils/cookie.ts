"use server";
import { cookies } from "next/headers";
const cookieStore = cookies();
export const cookieValue = cookieStore.get("auth");
