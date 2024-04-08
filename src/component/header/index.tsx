import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListMenu = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "SERVICES",
    link: "/trip",
  },
  // {
  //   id: 3,
  //   name: "Tin tức",
  //   link: "/news",
  // },
  {
    id: 4,
    name: "CONTACT US",
    link: "/products",
  },
];

const Header: React.FC = () => {
  return (
    <header>
      <nav className="backdrop-blur-3xl">
        <div className="flex justify-between  items-center container mx-auto gap-3">
          <Link href={"/"}>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="23"
                viewBox="0 0 21 23"
                fill="none"
              >
                <path d="M10.5 0.5L20.0263 6V17L10.5 22.5L0.973721 17V6L10.5 0.5Z" fill="#13C2C2" />
              </svg>
              Live Channel
            </div>
          </Link>

          <ul className="flex justify-center items-center" style={{ gap: "24px" }}>
            {ListMenu?.map((items) => (
              <li key={items?.id}>
                <Link href={items.link}>
                  <span className="text-white font-semibold text-base w-full">{items?.name}</span>
                </Link>
              </li>
            ))}
            <button className="bg-[#13C2C2] rounded-md px-[20px] py-[10px] font-medium text-base">
              Login
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
