"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ForgotPasswordForm(formData: FormData) {
  const email = formData.get("email");
  let status = 0;
  try {
    const response: any = await fetch("https://auth.livechannel.vn/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (response.status === 200) {
      status = response.status;
      // const data = await response.json();
    } else {
      const statusText = response.json();
      console.log("🚀 ~  statusText:", response);

      let message = await statusText;

      return message?.message;
    }
  } catch (error) {
    return { message: error };
  }
  if (status === 200) {
    redirect("/confirm-email");
  }
}
