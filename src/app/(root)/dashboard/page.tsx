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
      <div className="grid grid-cols-3 gap-[30px]">
        {LIST_ROUTERS.map((items, index: number) => {
          return (
            <div
              key={index}
              className="rounded-[18px] p-6 bg-[#1F1F1F] border-2 border-[#434343] shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.15)]"
            >
              <div className="w-[50px] h-[50px] mb-9">
                <Image src={items?.icon} alt="" width={1000} height={1000} />
              </div>
              <div className="font-semibold text-base">{items?.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
