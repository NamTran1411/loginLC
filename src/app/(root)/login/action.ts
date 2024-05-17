"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginForm(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  let status = 0;
  try {
    const response: any = await fetch("https://auth.livechannel.vn/sign-in-cognito", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.status === 200) {
      status = response.status;
      const data = await response.json();
      const getCookie = data?.AuthenticationResult?.IdToken;
      const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      cookies().set("IdToken", getCookie, { expires, httpOnly: true });
    } else if (response.status === 403) {
      const messageStatus = {
        message: "Tài khoản hoặc mật khẩu không chính xác!",
      };
      return messageStatus?.message;
    } else {
      const statusText = response.json();

      let message = await statusText;

      return message?.message;
    }
  } catch (error) {
    return { message: error };
  }
  if (status === 200) {
    redirect("/dashboard");
  }
}
