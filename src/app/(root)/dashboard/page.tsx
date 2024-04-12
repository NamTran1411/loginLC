"use client";
import {
  Icon_Dashboard_1,
  Icon_Dashboard_2,
  Icon_Dashboard_3,
  Icon_Dashboard_4,
  Icon_Dashboard_5,
  Icon_Dashboard_6,
} from "@/assets/dashboard";
import Image from "next/image";
import LoginWallet from "./action";
import { apolloClient, LoginLegacySale } from "@/graphql";

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
  const handleLogin = async () => {
    try {
      const response = await fetch("https://wallet.datgach.vn/api/mobile/verify-token-cognito", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: "eyJraWQiOiI1NlM4Wm16ZnlhbkFtZ0h0ejluRWhoQzR3ckx3S3Z2YTZSQ1wvMmd5bmR5OD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2ZTdlZWZhYi00MzI1LTQ3NGYtOTUwZi04YzAzZjI3YTA3MDkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0xX0VqNHhPRkp2dCIsImNvZ25pdG86dXNlcm5hbWUiOiJseXF1b2NsYW0xMTEyMDAwQGdtYWlsLmNvbSIsIm9yaWdpbl9qdGkiOiIyMmI2YmI1ZC0zNDE0LTQ1ZDAtYjYzNi03NGU1NDc3N2E2ODQiLCJhdWQiOiJvNGQwN29iczNndWE4NTAydTltazlxZ2J1IiwiZXZlbnRfaWQiOiJiY2QxNDc5Mi0xYTVhLTQ4YjItODVlZi0zN2E3ZTg0YTc0OTIiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTcxMjgwNDQ5NywibmFtZSI6IkxhbSBMWSIsImV4cCI6MTcxMjgwODA5NywiaWF0IjoxNzEyODA0NDk3LCJqdGkiOiJhZTVkZmY2YS0wOTdhLTQ2ZDYtOGNhMy03MTRiNWIxNzUwMWUiLCJlbWFpbCI6Imx5cXVvY2xhbTExMTIwMDBAZ21haWwuY29tIn0.NclTiD562PuZhgnOVVjYjD38w3UHJ5dmnd1Ts5he_giwT1i3pxzqGGY-uzxXimzrXcElNkhj-ro4RTWukVSRWioKQPb7095OPaC-qnzZ1_7givsoDujE7_rzH_mGxeFvedjRMHOvwpKKyr8UZm4nw8PbV8NIehOV9y4ZkjaZUK3Ky7ZfEmmnO33ejNHnLbL4KiRckInjKKt9G3pZDgOInwbOW-u572ZluILR0du5fwt4RBr4UP8RjQ8FfqbbOSiLN8oFW0o2QVyOT30VtWgVkgMHBeku7aslEEz_Ks9X495HlR6ACJAXKSKkDWKsZiXmfnCzqrxLCyMUlZk0kOAcrQ",
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
  };

  const handlec = async () => {
    try {
      const { data } = await apolloClient.mutate({
        mutation: LoginLegacySale,
        variables: {
          code: "eyJraWQiOiI1NlM4Wm16ZnlhbkFtZ0h0ejluRWhoQzR3ckx3S3Z2YTZSQ1wvMmd5bmR5OD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2ZTdlZWZhYi00MzI1LTQ3NGYtOTUwZi04YzAzZjI3YTA3MDkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0xX0VqNHhPRkp2dCIsImNvZ25pdG86dXNlcm5hbWUiOiJseXF1b2NsYW0xMTEyMDAwQGdtYWlsLmNvbSIsIm9yaWdpbl9qdGkiOiIyMmI2YmI1ZC0zNDE0LTQ1ZDAtYjYzNi03NGU1NDc3N2E2ODQiLCJhdWQiOiJvNGQwN29iczNndWE4NTAydTltazlxZ2J1IiwiZXZlbnRfaWQiOiJiY2QxNDc5Mi0xYTVhLTQ4YjItODVlZi0zN2E3ZTg0YTc0OTIiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTcxMjgwNDQ5NywibmFtZSI6IkxhbSBMWSIsImV4cCI6MTcxMjgwODA5NywiaWF0IjoxNzEyODA0NDk3LCJqdGkiOiJhZTVkZmY2YS0wOTdhLTQ2ZDYtOGNhMy03MTRiNWIxNzUwMWUiLCJlbWFpbCI6Imx5cXVvY2xhbTExMTIwMDBAZ21haWwuY29tIn0.NclTiD562PuZhgnOVVjYjD38w3UHJ5dmnd1Ts5he_giwT1i3pxzqGGY-uzxXimzrXcElNkhj-ro4RTWukVSRWioKQPb7095OPaC-qnzZ1_7givsoDujE7_rzH_mGxeFvedjRMHOvwpKKyr8UZm4nw8PbV8NIehOV9y4ZkjaZUK3Ky7ZfEmmnO33ejNHnLbL4KiRckInjKKt9G3pZDgOInwbOW-u572ZluILR0du5fwt4RBr4UP8RjQ8FfqbbOSiLN8oFW0o2QVyOT30VtWgVkgMHBeku7aslEEz_Ks9X495HlR6ACJAXKSKkDWKsZiXmfnCzqrxLCyMUlZk0kOAcrQ",
        },
      });

      console.log(data);
    } catch (err: any) {
      console.log("🚀 ~  err:", err);
    }
  };

  return (
    <section className="container">
      <div className="flex justify-center items-center gap-[30px] mb-[30px]">
        {LIST_ROUTERS.slice(0, 3).map((items, index: number) => {
          return (
            <div
              key={index}
              className="rounded-[18px] p-6 bg-[#1F1F1F] border-2 border-[#434343] shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.15)] group hover:border-[#13C2C2] w-[180px] cursor-pointer"
              onClick={handleLogin}
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
              className="rounded-[18px] p-6 bg-[#1F1F1F] border-2 border-[#434343] shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.15)] group hover:border-[#13C2C2] w-[180px] cursor-pointer"
              onClick={async () => await LoginWallet()}
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
