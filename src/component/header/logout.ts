"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Delete() {
  cookies().delete("IdToken");
  redirect("/login");
}
