"use server";

import { cookies } from "next/headers";

export default async function LoginWallet() {
  const cookieStore = cookies();
  const getCookie = cookieStore.get("IdToken");
  console.log("🚀 ~  getCookie:", getCookie);
  try {
    const response = await fetch("https://wallet.datgach.vn/api/mobile//verify-token-cognito", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: getCookie?.value,
      }),
    });
    console.log(response);
    const data = await response.json();
    console.log("🚀 ~  data:", data);
    // if (response.status === 200) {
    //   const data = await response.json();
    //   console.log("🚀 ~  data:", data);
    // } else {
    //   const statusText = response.json();
    //   let message = await statusText;
    //   return message?.message;
    // }
  } catch (error) {
    return { message: error };
  }
}
