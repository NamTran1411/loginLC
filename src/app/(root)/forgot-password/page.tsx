"use client";
import BarLoader from "@/component/loading";
import { emailPattern } from "@/utils/config";
import { ArrowLeft } from "iconsax-react";
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";
import ForgotPasswordForm from "./action";

interface FormDataSubmit {
  email: string;
}

export default function ForgotPassword() {
  const pathname = usePathname();
  const [formData, setFormData] = useState<FormDataSubmit>({ email: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const [statusMessage, setStatusMessage] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSetEmailLocal = (data: FormData) => {
    const email = data.get("email");
    if (typeof window !== "undefined") {
      localStorage.setItem("email", `${email}`);
    }
  };
  const validateEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    if (!email) {
      event.target.setCustomValidity("Không bỏ trống");
    } else if (!emailPattern.test(email)) {
      event.target.setCustomValidity("Sai định dạng");
    } else {
      event.target.setCustomValidity("");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    await ForgotPasswordForm(formData)
      .then((res) => {
        handleSetEmailLocal(formData);
        setStatusMessage(res);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

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
          <div className="flex gap-[8px] mb-[20px]">
            <ArrowLeft size="24" color="#13C2C2" />
            <div className="text-[#13C2C2] font-medium text-[16px]">Trở lại</div>
          </div>
          <h2 className="text-black font-semibold text-[20px] ">Quên mật khẩu</h2>
          <p className="text-[#8C8C8C] text-[16px] mt-3 mb-[20px]">
            Vui lòng nhập email của bạn để đặt lại mật khẩu
          </p>
          <form onSubmit={handleSubmit}>
            <div className="box-border-form">
              <div className="form-group">
                <label htmlFor="email" className="title-form flex">
                  <span>Your Email</span>
                  <div className="text-[#FF4D4F]">*</div>
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={validateEmail}
                  onInput={(event) => event.currentTarget.setCustomValidity("")}
                  required
                />
              </div>

              <div className="status-error">{statusMessage}</div>
              <button type="submit" className="button-submit" disabled={loading}>
                {loading ? <BarLoader /> : <span>Gửi mã xác nhận</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
