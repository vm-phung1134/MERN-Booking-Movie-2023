/* eslint-disable react-hooks/exhaustive-deps */
import HeaderPublic from "../components/headerPublic";
import { Select, Option } from "@material-tailwind/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SpinnerLoading from "../components/spinnerLoading";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import FooterPublic from "../components/footerPublic";
import { getAllCinema } from "../../../redux/actions/cinemaActions";
import { getAllShowTime } from "../../../redux/actions/showTimeActions";
import { getAllMovie } from "../../../redux/actions/movieActions";
import Data from "../components/TranslationEnglish/Data.json";

function Cinema() {
  const dispatch = useDispatch();
  const [loadingPage, setLoadingPage] = useState(false);
  const cinemas = useSelector((state) => state.cinemas.cinemas);
  const movies = useSelector((state) => state.movies.movies);
  const showtimes = useSelector((state) => state.showtimes.showtimes);
  const [vlCinema, setVlCinema] = useState("");
  const [content, setContent] = useState("");
  const language = useSelector((state) => state.language.language);

  const handleChangeCinema = (value) => {
    setVlCinema(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllCinema());
      await dispatch(getAllShowTime());
      await dispatch(getAllMovie());
      setLoadingPage(false);
    }, 1300);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  useEffect(() => {
    if (language === "English") {
      setContent(Data.english);
    } else {
      setContent("");
    }
  }, [language]);
  return (
    <>
      <div className="bg-black min-h-screen max-h-full">
        <div>
          <HeaderPublic />
          {loadingPage === true ? (
            <SpinnerLoading />
          ) : (
            <div>
              <div className="lg:m-[40px] 2xl:m-[60px] m-[20px] max-h-full">
                <Breadcrumbs className="bg-transparen p-0">
                  <Link to="/home" className="text-gray-400">
                  {content === ""
                      ? "Trang chủ"
                      : content.booking.linkHome
                  }
                  </Link>
                  <Link to="/cinema" className="text-gray-200">
                  {content === ""
                      ? "Rạp chiếu phim"
                      : content.navbar.nav3}
                  </Link>
                </Breadcrumbs>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 lg:gap-x-5 ">
                  <div>
                    <button
                      disabled
                      className="text-white uppercase text-sm lg:text-[16px] pr-6 py-[15px]  border-b-[3px] border-[#E50914]"
                    >
                      {content === ""
                      ? "hệ thống rạp chiếu"
                      : content.cinema.title}
                    </button>
                    <div className="mt-10">
                      <div className="mb-2">
                        <Select
                          className="text-white"
                          label= {content === ""
                          ? "CHỌN RẠP CHIẾU"
                          : content.booking.selectCinema}
                          onChange={handleChangeCinema}
                          animate={{
                            mount: { y: 0 },
                            unmount: { y: 30 },
                          }}
                        >
                          {cinemas.map((cinema) => (
                            <Option
                              className="text-black border-b border-gray-500 py-5 focus:text-white focus:bg-blue-gray-600"
                              key={cinema._id}
                              value={cinema._id}
                            >
                              {cinema.name}
                            </Option>
                          ))}
                        </Select>
                      </div>
                      {vlCinema !== "" && (
                        <div className="grid grid-cols-1 text-white text-sm gap-y-5">
                          {movies.map((movie) => (
                            <div
                              key={movie._id}
                              className="border-gray-400 border grid grid-cols-2 lg:gap-x-1 xl:gap-x-1"
                            >
                              <div>
                                <img
                                  src={movie.image}
                                  alt=""
                                  className="w-[300px] h-full"
                                />
                              </div>
                              <div className="p-2 leading-6">
                                <div className="flex justify-between">
                                  <h1 className="text-gray-400 pr-5">
                                    Tên phim:
                                    <span className="uppercase text-white">
                                      {" "}
                                      {movie.name}
                                    </span>
                                  </h1>
                                  <p className="text-gray-400 flex-shrink-0">
                                    <i className="fas fa-clock"></i>
                                    <span className="text-white">
                                      {" "}
                                      {movie.duration} m
                                    </span>
                                  </p>
                                </div>

                                <p>2D - Phụ đề</p>
                                <div>
                                  {showtimes.map(
                                    (showtime) =>
                                      showtime.movieId === movie._id &&
                                      showtime.cinemaId === vlCinema && (
                                        <div className="">
                                          <p className="">
                                            Ngày {showtime.startDate}{" "}
                                          </p>
                                          <div className="flex w-full">
                                            {showtime.startTime.map((time) => (
                                              <button className="px-2 py-1 my-2 mx-1 border-2 border-gray-600">
                                                {time.time}
                                              </button>
                                            ))}
                                          </div>
                                        </div>
                                      )
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <button
                      disabled
                      className="text-white uppercase text-sm lg:text-[16px] pr-6 py-[15px] my-3  border-b-[3px] border-[#E50914]"
                    >
                       {content === ""
                      ? "Một số hình ảnh"
                      : content.cinema.image}
                    </button>
                    <div>
                      <Carousel>
                        <img
                          src="https://cdn.galaxycine.vn/media/2019/12/27/79838883-139480674153736-6337298685621174272-o_1577418516231.jpg"
                          alt=""
                        ></img>
                        <img
                          src="https://cdn.galaxycine.vn/media/2019/12/27/79844929-139480880820382-5735358774273638400-o_1577418596248.jpg"
                          alt=""
                        ></img>
                        <img
                          src="https://cdn.galaxycine.vn/media/2019/12/27/80077318-139480644153739-5771371117272891392-o_1577418600896.jpg"
                          alt=""
                        ></img>
                      </Carousel>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <button
                        disabled
                        className="text-white uppercase text-sm lg:text-[16px] pr-6 py-[15px]  border-b-[3px] border-[#E50914]"
                      >
                         {content === ""
                      ? "giá vé"
                      : content.cinema.price}
                      </button>
                      <img
                        src="https://cdn.galaxycine.vn/media/2023/1/18/ca-mau-100_1674015086453.jpg"
                        className="brightness-90 mt-10"
                        width="600px"
                        alt=""
                      />
                    </div>
                    <button
                      disabled
                      className="text-white uppercase text-sm lg:text-[16px] pr-6 py-[15px] mt-5  border-b-[3px] border-[#E50914]"
                    >
                       {content === ""
                      ? "thông tin chi tiết"
                      : content.cinema.title}
                    </button>
                    <div className="py-5 text-sm">
                      <p className="text-gray-500">
                        Địa chỉ:{" "}
                        <span className="text-white">
                          Lầu 2, TTTM Sense City, số 9, Trần Hưng Đạo, P.5, tp.
                          Tương lai
                        </span>
                      </p>
                      <p className="text-gray-500">
                        Số điện thoại:{" "}
                        <span className="text-white">099999233</span>
                      </p>
                      <p className="text-gray-300 text-justify">
                        Galaxy Cà Mau tọa lạc tại lầu 2 TTTM Sense City, số 9,
                        Trần Hưng Đạo – rạp chiếu phim được xây dựng theo tiêu
                        chuẩn quốc tế gồm 6 phòng chiếu 2D&3D, âm thanh Dobly
                        7.1. Thiết kế trẻ trung, dịch vụ thân thiện, cập nhật
                        liên tục những bộ phim mới nhất phim hay nhất trong nước
                        cũng như quốc tế và mức giá vô cùng “hạt dẻ”.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-10"></div>
              <FooterPublic />
            </div>
          )}
        </div>
        <div className="py-10"></div>
      </div>
    </>
  );
}

export default Cinema;
