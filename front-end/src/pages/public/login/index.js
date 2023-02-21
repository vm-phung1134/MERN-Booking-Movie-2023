import Logo from "./mylogo.png";
import LoginForm from "./loginForm";
import RegisterForm from "./RegisterForm";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function Login() {
  const { isChanged } = useSelector((state) => state.newUser);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isChanged === true) {
      toast.success(
        "Đã cập nhật mật khẩu thành công - Vui lòng đăng nhập lại !",
        {
          position: toast.POSITION.BOTTOM_LEFT,
          className: "text-black",
        }
      );
    }
  }, [isChanged]);

  return (
    <>
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/e39414f0-9714-4480-8e82-119dc943cfc1/VN-vi-20221219-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover w-full h-screen relative">
        <div className="bg-black/[0.65] h-screen">
          <div className="flex justify-between p-6 bg-transparent">
            <img
              src={Logo}
              alt="Logo"
              className="lg:w-[200px] md:w-[170px] w-[150px]"
            />
            <div>
              <button
                className="
                        py-1 px-3
                        text-white border-2
                        border-gray-50
                        bg-transparent
                        text-sm
                        lg:text-[15px]
                        text-white
                        rounded
                        "
              >
                <i className="fas fa-globe"></i>&ensp; Tiếng Việt
              </button>
            </div>
          </div>
          {/* -----------HEADER LOGIN PAGE-------------- */}
          <div className="md:left-[50%] left-[30%] text-center text-white translate-x-[-20%]  md:translate-x-[-50%] absolute top-[25%]">
            <h2 className="lg:text-[40px] md:text-[35px] text-[30px] font-bold">
              TUYỂN CHỌN TỪ NHỮNG PHIM CHIẾU RẠP ĐẶC SẮC NHẤT
            </h2>
            <p className="lg:text-[18px] text-[15px] mt-5 px-3 md:px-5">
              Bạn đã có tài khoản để đặt vé chưa. Nhanh chóng đăng ký thành viên
              để nhận nhiều ưu đãi
            </p>
            <div className="mt-5 flex justify-center">
              <a href="#login">
                <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                  <div className="buttons">
                    <button className="btn">
                      <span></span>
                      <p
                        data-start="good luck!"
                        data-text="Bắt đầu!"
                        data-title="Khám phá"
                      ></p>
                    </button>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*-----------------FORM ĐĂNG NHẬP---------------- */}
      <div className="grid lg:grid-cols-2 grid-cols-1 border-t border-zinc-400 gap-x-4 p-4 text-white bg-black h-full">
        <div className="relative lg:block hidden ">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="absolute translate-x-[-40%] top-[25%] left-[20%]"
          >
            <h1 className="text-[35px] font-medium">
              ƯU ĐÃI DÀNH CHO THÀNH VIÊN HỆ THỐNG
            </h1>
            <p className="text-[20px] my-4">
              Trở thành viên của hệ thống để nhận nhiều ưu đãi. Tích lũy R-start
              để có cơ hội nhận nhiều phần quà hấp dẫn.
            </p>
            <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
              <div className="buttons">
                <button className="btn">
                  <span></span>
                  <p
                    data-start="good luck!"
                    data-text="Let's go!"
                    data-title="Xem thêm"
                  ></p>
                </button>
              </div>
            </button>
          </div>
        </div>
        <LoginForm />
      </div>
      {/*-----------------FORM ĐĂNG KÝ---------------- */}
      <div className="grid lg:grid-cols-2 grid-cols-1  gap-x-4 p-4  text-white bg-black h-full">
        <RegisterForm />
        <div className="relative lg:block hidden">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="absolute translate-x-[40%] top-[15%] right-[20%]"
          >
            <h1 className="text-[35px] font-medium">
              ĐĂNG KÝ TRỰC TUYẾN TRÊN NHIỀU NÊN TẢNG
            </h1>
            <p className="text-[20px] mt-4">
              Hệ thống luôn hỗ trợ đăng ký thành viên trên nhiều nên tảng khác
              nhau
            </p>
            <img
              className="w-[400px]"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
