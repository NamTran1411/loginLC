"use server";

import { cookies } from "next/headers";

export default async function LoginForm(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response: any = await fetch("https://auth.livechannel.vn//sign-in-cognito", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      console.log("🚀 ~  data:", data);
      const getCookie = data?.AuthenticationResult?.IdToken;
      const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      cookies().set("IdToken", getCookie, { expires, httpOnly: true });
    } else {
      const statusText = response.json();
      let message = await statusText;
      return message?.message;
    }
  } catch (error) {
    return { message: error };
  }
}
