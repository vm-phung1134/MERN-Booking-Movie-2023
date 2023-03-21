/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, memo, useState } from "react";
import { getAllMovie } from "../../../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import HeaderPublic from "../components/headerPublic";
import SpinnerLoading from "../components/spinnerLoading";
import ChangePassForm from "./changePassForm";
import { getOneUser } from "../../../redux/actions/authActions";
import InfoForm from "./infoForm";
import { getAllReservation } from "../../../redux/actions/reservationActions";
import FooterPublic from "../components/footerPublic";

function Account() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const movies = useSelector((state) => state.movies.movies);
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const reservations = useSelector((state) => state.reservations.reservations);
  const [loadingPage, setLoadingPage] = useState(false);
  let [countTotal, setCountTotal] = useState(0);
  const [isActive, setIsActive] = useState("1");
  const handleClickActive = (e) => {
    setIsActive(e.target.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getOneUser(userId));
      await dispatch(getAllMovie());
      await dispatch(getAllReservation());
      setLoadingPage(false);
    }, 1300);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  useEffect(() => {
    let total = 0;
    reservations.map((reservation) => (total = total + reservation.total));
    setCountTotal(total);
  }, [reservations]);

  return (
    <>
      <div className="bg-black">
        <HeaderPublic />
        {loadingPage === true ? (
          <SpinnerLoading />
        ) : (
          <div>
            <div className="lg:px-16 px-5 py-20 text-white max-h-full w-full">
              <Breadcrumbs className="bg-transparen p-0">
                <Link to="/home" className="text-gray-400">
                  Trang chủ
                </Link>
                <Link to="/account" className="text-gray-200">
                  Thành viên
                </Link>
                <Link className="text-gray-200">Thông tin tài khoản</Link>
              </Breadcrumbs>
              <div className="mb-10">
                <button
                  value="1"
                  style={{
                    borderBottom: isActive === "1" ? "3px solid #E50914" : "",
                  }}
                  onClick={handleClickActive}
                  className="text-white text-sm lg:text-[15px] mr-6 py-5 my-[17px]"
                >
                  THÔNG TIN TÀI KHOẢN
                </button>
                <button
                  value="2"
                  style={{
                    borderBottom: isActive === "2" ? "3px solid #E50914" : "",
                  }}
                  onClick={handleClickActive}
                  className="text-white text-sm lg:text-[15px] py-5 my-[15px]"
                >
                  LICH SỬ GIAO DỊCH
                </button>
                <div>
                  {isActive === "2" && (
                    <div>
                      <div className="grid lg:grid-cols-2  lg:gap-x-5 grid-cols-1">
                        <div className="lg:my-5 my-2 p-5 text-black text-center rounded-lg bg-white">
                          <h1 className="text-sm">
                            Số tiền bạn đã chi trong năm 2023
                          </h1>
                          <p className="font-bold">{countTotal * 1000} VNĐ</p>
                        </div>
                        <div className="lg:my-5 my-2 p-5 text-black text-center rounded-lg bg-white">
                          <h1 className="text-sm">Cấp độ tài khoản</h1>
                          {countTotal > 1000 ? (
                            <p className="font-bold">Thành viên</p>
                          ) : (
                            <p className="font-bold">Khách hàng thân thiết</p>
                          )}
                        </div>
                      </div>
                      <div className="lg:my-5 my-2 p-5 text-black text-left rounded-lg bg-white">
                        <h1 className="text-sm">Lịch sử tài khoản</h1>
                        
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  {isActive === "1" && (
                    <div className="grid lg:grid-cols-3  lg:gap-x-10 sm:grid-cols-1">
                      <div className="lg:col-span-2 ">
                        <InfoForm userInfo={userInfo} />
                      </div>
                      <ChangePassForm userInfo={userInfo} />
                    </div>
                  )}
                </div>
              </div>
              <button
                disabled
                className="text-white text-sm lg:text-[15px] pr-6 py-[17px] border-b-2 border-[#E50914]"
              >
                PHIM ĐANG CHIẾU
              </button>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-10 gap-3">
                {movies.map((movie, index) => (
                  <div key={movie._id}>
                    {index < 8 && (
                      <div className="">
                        <div className="relative">
                          <img
                            className="w-[370px] h-[270px] md:h-[370px] lg:h-[470px] bg-cover"
                            src={movie.poster}
                            alt=""
                          ></img>
                          <Link to={`/movie-now/${movie._id}`}>
                            <div className="absolute opacity-0 hover:opacity-100 transition duration-400 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                              <Link to="/booking">
                                <button
                                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                          border md:text-sm text-[12px] border-white py-[7px] px-[15px] md:py-[13px] md:px-[25px] hover:bg-[#E50914] hover:border-none"
                                >
                                  MUA VÉ
                                </button>
                              </Link>
                            </div>
                          </Link>
                        </div>
                        <div className="text-[15px]">
                          <p className="text-white truncate uppercase">{movie.name}</p>
                          <p className="text-gray-500 truncate uppercase">
                            {movie.namevn}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div>
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
            </div>
            <div className="py-10"></div>
            <FooterPublic />
          </div>
        )}
      </div>
    </>
  );
}

export default memo(Account);
