import {
  Icon_Dashboard_1,
  Icon_Dashboard_2,
  Icon_Dashboard_3,
  Icon_Dashboard_4,
  Icon_Dashboard_5,
  Icon_Dashboard_6,
} from "@/assets/dashboard";
import Image from "next/image";

const LIST_ROUTERS = [
  {
    id: 1,
    icon: Icon_Dashboard_1,
    title: "Developer",
  },
  {
    id: 2,
    icon: Icon_Dashboard_2,
    title: "Pocket",
  },
  {
    id: 3,
    icon: Icon_Dashboard_3,
    title: "Sitdown",
  },
  {
    id: 4,
    icon: Icon_Dashboard_4,
    title: "E-commece",
  },
  {
    id: 5,
    icon: Icon_Dashboard_5,
    title: "Live Stream",
  },
  {
    id: 6,
    icon: Icon_Dashboard_6,
    title: "Design",
  },
];

export default function Dashboard() {
  return (
    <section className="container">
      <div className="flex justify-center items-center gap-[30px] mb-[30px]">
        {LIST_ROUTERS.slice(0, 3).map((items, index: number) => {
          return (
            <div
              key={index}
              className="rounded-[18px] p-6 bg-[#1F1F1F] border-2 border-[#434343] shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.15)] group hover:border-[#13C2C2] w-[180px]"
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
      <div className="flex justify-center items-center gap-[30px]">
        {LIST_ROUTERS.slice(3, 6).map((items, index: number) => {
          return (
            <div
              key={index}
              className="rounded-[18px] p-6 bg-[#1F1F1F] border-2 border-[#434343] shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.15)] group hover:border-[#13C2C2] w-[180px]"
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
