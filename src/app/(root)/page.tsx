import { cookies } from "next/headers";
import { redirect, useRouter } from "next/navigation";

export default function RootPage() {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get("IdToken");
  if (cookieValue?.value) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
