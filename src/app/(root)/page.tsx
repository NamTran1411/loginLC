"use client";
import BarLoader from "@/component/loading";
import { emailPattern } from "@/utils/config";
import { Eye, EyeSlash } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface FormDataSubmit {
  email: string;
  password: string;
}

export default function Home() {
  const pathname = usePathname();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataSubmit>({ email: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [statusMessage, setStatusMessage] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setFormData({ ...formData, [event.target.name]: event.target.value });
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

  const validatePassword = (event: React.FocusEvent<HTMLInputElement>) => {
    const password = event.target.value;
    if (!password) {
      event.target.setCustomValidity("Không bỏ trống");
    } else {
      event.target.setCustomValidity("");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Ngăn form submit theo cách truyền thống
    setLoading(true);
    // const formData = new FormData(event.currentTarget);
    // await LoginForm(formData)
    //   .then((res) => {
    //     setStatusMessage(res?.message);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
          <h2 className="text-black font-semibold text-[20px] mb-[20px]">
            Vui lòng đăng nhập để
            <br /> sử dụng
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="box-border-form">
              <div className="form-group">
                <label htmlFor="email" className="title-form flex">
                  <span>User name</span>
                  <div className="text-[#FF4D4F]">*</div>
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Name"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={validateEmail}
                  onInput={(event) => event.currentTarget.setCustomValidity("")}
                  required
                />
              </div>
              <div className="form-group my-[20px]">
                <label htmlFor="idEmail" className="title-form flex">
                  <span>Password</span>
                  <div className="text-[#FF4D4F]">*</div>
                </label>
                <div className="flex items-center justify-between w-full relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={validatePassword}
                    onInput={(event) => event.currentTarget.setCustomValidity("")}
                    required
                  />
                  {showPassword ? (
                    <Eye
                      size="14"
                      color="#141414"
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer icon_show_password"
                    />
                  ) : (
                    <EyeSlash
                      size="14"
                      color="#141414"
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer icon_show_password"
                    />
                  )}
                </div>
              </div>
              <Link href={`${pathname}/register`}>
                <div className="text-center cursor-pointer text-[#13C2C2] font-normal text-sm">
                  Forgot password?
                </div>
              </Link>
              <div className="status-error">{statusMessage}</div>
              <button type="submit" className="button-submit" disabled={loading}>
                {loading ? <BarLoader /> : <span>Login</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
