import HeaderPublic from "../components/headerPublic";
import SpinnerLoading from "../components/spinnerLoading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieSoonList from "../movie/homeMovie/movieSoonList";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FooterPublic from "../components/footerPublic";
import { getAllMovieSoon } from "../../../redux/actions/movieSoonActions";

function CheckoutSuccess() {
  const dispatch = useDispatch();
  const [loadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllMovieSoon());
      toast.success("Đặt vé thành công !", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: "text-black",
      });
      setLoadingPage(false);
    }, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch]);
  return (
    <>
      <div className=" bg-cover bg-center bg-[url('https://www.pixel4k.com/wp-content/uploads/2019/05/black-panther-movie-4k_1558219995.jpg')] max-h">
        <div className="h-full bg-gradient-to-t from-black/100 to-black/60">
          <HeaderPublic />
          {loadingPage === true ? (
            <SpinnerLoading />
          ) : (
            <>
              <ToastContainer toastStyle={{ color: "black" }} />
              <div className="bg-transparent">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="text-white flex justify-center pt-[5%]"
                >
                  <div className="text-center">
                    <h1 className="lg:text-[30px] text-[18px] md:text-[20px] font-bold uppercase">
                      Chúc mừng - Bạn đã đặt vé thành công!
                    </h1>
                    <p className="font-thin text-sm lg:text-[15px]">
                      Vào vé của bạn để xem mã QR - Hãy dùng nó để check in tại
                      rạp phim trước khi vào nhé
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="flex justify-center text-white mt-5"
                >
                  <div className="text-center  mb-7">
                    <h2 className="text-sm lg:text-[15px]">
                      Xem lại những vé mà bạn đã đặt
                    </h2>
                    <button className="lg:px-5 text-sm lg:text-[15px] px-3 py-2 my-3 lg:py-3 text-white bg-gradient-to-r from-[#E50914] to-[#b8a608]">
                      <Link to="/user-tickets">
                        {" "}
                        <i className="fas fa-wallet"></i> Vé Của Bạn
                      </Link>
                    </button>
                  </div>
                </div>
                <button
                  disabled
                  className="text-white text-[15px] mx-6 mt-[3%] pr-6 py-[10px] border-b-2 border-[#E50914]"
                >
                  PHIM SẮP CHIẾU
                </button>
                <MovieSoonList />
                <div className="py-20"></div>
              </div>
              <FooterPublic />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CheckoutSuccess;
