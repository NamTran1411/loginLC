import { Bg_1, Bg_2, Bg_3 } from "@/assets/home";
import Header from "@/component/header";
import "@/style/globals.css";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative h-full min-h-screen flex justify-center items-center overflow-hidden">
      <Header />
      <Suspense fallback={<>Loading...</>}>{children}</Suspense>

      <div className="bg_hidden_top_left">
        <Image src={Bg_3?.src} alt="" width={1000} height={1000} />
      </div>

      <div className="bg_hidden_center">
        <Image src={Bg_2?.src} alt="" width={1000} height={1000} />
      </div>

      <div className="bg_hidden_bottom_right">
        <Image src={Bg_1?.src} alt="" width={1000} height={1000} />
      </div>
    </main>
  );
}
