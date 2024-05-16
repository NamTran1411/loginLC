"use client";
import BarLoader from "@/component/loading";
import { emailPattern } from "@/utils/config";
import { ArrowLeft } from "iconsax-react";
import { usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import LoginForm from "./action";

interface FormDataSubmit {
  email: string;
  password: string;
}

export default function ConfirmEmail() {
  const pathname = usePathname();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [formData, setFormData] = useState<FormDataSubmit>({ email: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [inputs, setInputs] = useState<string[]>(Array(6).fill(""));

  const [timeLeft, setTimeLeft] = useState<number>(300);

  const handleChange = (value: string, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = value.slice(0, 1);
    setInputs(newInputs);

    if (index < inputs.length - 1 && value) {
      inputRefs.current[index + 1]?.focus();
    }
    const isNumber = !isNaN(parseInt(value));
    const inputElement = inputRefs.current[index];
    if (inputElement) {
      if (isNumber) {
        inputElement.classList.add("border-confirm-email");
      } else {
        inputElement.classList.remove("border-confirm-email");
      }
    }
  };
  const [statusMessage, setStatusMessage] = useState<string>("");

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
    event.preventDefault(); // Ngăn form submit theo cách truyền thống
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    await LoginForm(formData)
      .then((res) => {
        setStatusMessage(res);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };
  useEffect(() => {
    if (timeLeft === 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);
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
          <h2 className="text-black font-semibold text-[20px]">Kiểm tra email của bạn</h2>
          <p className="text-[#8C8C8C] text-[16px] mt-3 mb-[20px]">
            Chúng tôi đã gửi mã xác nhận đến email{" "}
            <b className="text-black font-medium ">polaba24@gmail.com</b> vui lòng kiểm tra.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="box-border-form">
              <div className="form-group">
                <div className="flex gap-3 justify-center md:justify-between w-full">
                  {inputs.map((input, index) => (
                    <input
                      key={index}
                      ref={(el: any) => (inputRefs.current[index] = el)}
                      type="text"
                      name={`code-${index + 1}`}
                      maxLength={1}
                      value={input}
                      onChange={(e) => handleChange(e.target.value, index)}
                      className="bg-white rounded-lg text-[#48484A] font-bold text-[22px] hover:bg-white focus:bg-white active:bg-white h-[45px] text-center w-[45px]"
                      autoComplete="off"
                    />
                  ))}
                </div>
              </div>

              <div className="status-error">{statusMessage}</div>
              <button type="submit" className="button-submit" disabled={loading}>
                {loading ? <BarLoader /> : <span>Đặt lại mật khẩu </span>}
              </button>
              <div className="text-[#13C2C2] font-medium text-[16px] text-center mt-[20px]">
                Gửi lại mã
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
