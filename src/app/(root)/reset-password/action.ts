"use server";

import { redirect } from "next/navigation";

export default async function LoginForm(formData: FormData, email: string, code: string) {
  const password = formData.get("confirm_password");
  let status = 0;
  console.log(
    JSON.stringify({
      email: email,
      code: code,
      new_password: password,
    })
  );
  try {
    const response = await fetch("https://auth.livechannel.vn/confirm-forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        code: code,
        new_password: password,
      }),
    });
    if (response.status === 200) {
      status = response.status;
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
    redirect("/reset-success");
  }
}
