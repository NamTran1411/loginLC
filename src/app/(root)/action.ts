"use server";

import { cookies } from "next/headers";

export default async function LoginForm(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response: any = await fetch("https://queue-dashboard.livechannel.vn/sign-in-cognito", {
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
      const getCookie = data?.AuthenticationResult?.AccessToken;
      const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      cookies().set("auth", getCookie, { expires, httpOnly: true });
    } else {
      const statusText = response.json();
      let message = await statusText;
      return message?.message;
    }
  } catch (error) {
    return { message: error };
  }
}
