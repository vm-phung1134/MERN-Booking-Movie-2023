/* eslint-disable react-hooks/exhaustive-deps */
import HeaderPublic from "../components/headerPublic";
import SpinnerLoading from "../components/spinnerLoading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FooterPublic from "../components/footerPublic";
import { getAllMovieSoon } from "../../../redux/actions/movieSoonActions";

function CheckoutSuccess() {
  const dispatch = useDispatch();
  const [loadingPage, setLoadingPage] = useState(false);
  const { movieSoons } = useSelector((state) => state.movieSoons);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllMovieSoon());
      setLoadingPage(false);
    }, 1300);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <>
      <div className="bg-fixed bg-cover bg-[url('https://gameranx.com/wp-content/uploads/2022/07/Star-Guardian-Key-Visual-1-scaled.jpg')] max-h">
        <div className="h-full bg-gradient-to-t from-black/100 to-black/60">
          
          {loadingPage === true ? (
            <SpinnerLoading />
          ) : (
            <>
              <HeaderPublic />
              <div className="bg-transparent">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="text-white flex justify-center pt-[10%]"
                >
                  <div className="text-center p-3 md:p-0">
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
                <div className="lg:mx-16 md:mx-10 mx-2">
                  <button
                    disabled
                    className="text-white text-sm lg:text-[15px] mt-[3%] pr-6 py-[10px] border-b-[3px] border-[#E50914]"
                  >
                    PHIM ĐANG CHIẾU
                  </button>
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-x-5 pt-10">
                    {movieSoons.map((movie, index) => (
                      <div key={movie._id}>
                        {index < 8 && (
                          <div className="">
                            <div className="relative">
                              <img
                                className="w-[370px] h-[270px] md:h-[370px] lg:h-[470px] bg-cover"
                                src={movie.poster}
                                alt=""
                              ></img>
                              <Link to={`/movie-soon/${movie._id}`}>
                                <div className="absolute opacity-0 hover:opacity-100 transition duration-500 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                                  <Link to="/booking">
                                    <button
                                      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                          border text-[12px] md:text-sm border-white py-[7px] px-[15px] md:py-[13px] md:px-[25px] hover:bg-[#c40404] hover:border-none"
                                    >
                                      MUA VÉ
                                    </button>
                                  </Link>
                                </div>
                              </Link>
                            </div>
                            <div className="text-sm lg:text-[15px] mt-3">
                              <p className="text-gray-300 truncate uppercase">
                                {movie.namevn}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-5">
                    <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                      <Link to="/movie">
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
                      </Link>
                    </button>
                  </div>
                </div>
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
