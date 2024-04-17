"use server";
import {
  Icon_Dashboard_1,
  Icon_Dashboard_2,
  Icon_Dashboard_3,
  Icon_Dashboard_4,
  Icon_Dashboard_5,
  Icon_Dashboard_6,
} from "@/assets/dashboard";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";

const LIST_ROUTERS = [
  {
    id: 1,
    icon: Icon_Dashboard_1,
    title: "Wallet",
    link: "https://wallet.datgach.vn/user/verify-token-cognito",
  },
  {
    id: 2,
    icon: Icon_Dashboard_2,
    title: "Pocket",
    link: "/",
  },
  {
    id: 3,
    icon: Icon_Dashboard_3,
    title: "Sitdown",
    link: "https://datgach.vn/en/verify-token-cognito",
  },
  {
    id: 4,
    icon: Icon_Dashboard_4,
    title: "E-commece",
    link: "/",
  },
  {
    id: 5,
    icon: Icon_Dashboard_5,
    title: "Live Stream",
    link: "/",
  },
  {
    id: 6,
    icon: Icon_Dashboard_6,
    title: "Design",
    link: "https://datgach.vn/en/verify-token-cognito?code=string",
  },
];

export default async function Dashboard() {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get("IdToken");
  return (
    <section className="container">
      <div className="flex justify-center items-center gap-[30px] mb-[30px]">
        {LIST_ROUTERS.slice(0, 3).map((items, index: number) => {
          return (
            <Link
              href={`${items?.link}?code=${cookieValue?.value ? cookieValue?.value : ""}`}
              key={index}
              className="rounded-[18px] p-6 bg-[#1F1F1F] border-2 border-[#434343] shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.15)] group hover:border-[#13C2C2] w-[180px] cursor-pointer"
              target="_blank"
            >
              <div className="w-[50px] h-[50px] mb-9">
                <Image src={items?.icon} alt="" width={1000} height={1000} />
              </div>
              <div className="font-semibold text-base group-hover:text-[#13C2C2]">
                {items?.title}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-[30px]">
        {LIST_ROUTERS.slice(3, 6).map((items, index: number) => {
          return (
            <div
              key={index}
              className="rounded-[18px] p-6 bg-[#1F1F1F] border-2 border-[#434343] shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.15)] group hover:border-[#13C2C2] w-[180px] cursor-pointer"
            >
              <div className="w-[50px] h-[50px] mb-9">
                <Image src={items?.icon} alt="" width={1000} height={1000} />
              </div>
              <div className="font-semibold text-base group-hover:text-[#13C2C2]">
                {items?.title}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
