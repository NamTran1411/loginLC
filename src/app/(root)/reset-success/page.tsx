/* eslint-disable @next/next/no-img-element */
"use client";
import BarLoader from "@/component/loading";
import { emailPattern } from "@/utils/config";
import { ArrowLeft } from "iconsax-react";
import { usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function ResetSuccess() {
  const pathname = usePathname();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [inputs, setInputs] = useState<string[]>(Array(6).fill(""));

  return (
    <section>
      <div className="flex justify-center gap-[80px] container mx-auto">
        <div>
          <button className="bg-[#13C2C2] rounded-md px-[12px] py-2 font-medium text-sm">
            Developer
          </button>
          <h1 className="font-bold text-[48px] text-start my-[20px]">Welcome To Live Channel</h1>
          <p className="font-medium text-base text-start xl:w-[600px]">
            Lorem ipsum dolor sit amet consectetur. Dignissim arcu eget erat ipsum arcu. Parturient
            tempus nisl porttitor.
          </p>
          <button className="bg-[#13C2C2] rounded-md px-[20px] py-[10px] font-medium text-base mt-6">
            Get Started
          </button>
        </div>
        <div className="bg-white rounded-2xl p-[20px] lg:w-[394px]">
          <h2 className="text-black font-semibold text-[20px]">Đặt mật khẩu mới thành công</h2>

          <div className="w-[82px] h-[82px] mx-auto my-[20px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/76e3/bea0/282fda12c1815c0ae95c8d940f2ef4d3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WScU9z3ttQ5MPYz0pneUUbQfwVig-LOgI9v74zcHcg95eMArlMU~ThbNpA3lGsVN4QKMtt4vuLOs9ATI3UIZ-OG6lDfzztcOQ36SmuDqe1By0Qyfh2D5~LBBoORXtuERIt7E-ccLxYfYJgz~D8YdAjOSOYy~R67PWH5wcqiB7ND~MHl9do74omQXX5iL8PML406gM~XvZWwV7afUwgHa4oxemqAjSyGbLZ1WmHxF77tHka4Q-xDrUJ5vAoc-SPRMqQSOehg46wKA0joFx5tcVzZylroPiAZz23kIgsbnAjnP1zvKVIjQJEeE6bjjs18lNlQc1a7LRh7DGjmLiaa3FA__"
              alt="icon-gif"
              className="w-full h-full"
            />
          </div>
          <div>
            <button type="submit" className="button-submit" disabled={loading}>
              {loading ? <BarLoader /> : <span>Đăng nhập lại</span>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
