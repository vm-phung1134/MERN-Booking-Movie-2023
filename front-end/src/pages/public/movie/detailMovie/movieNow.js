/* eslint-disable react-hooks/exhaustive-deps */
//import logic
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllCinema } from "../../../../redux/actions/cinemaActions";
import { getOneMovie } from "../../../../redux/actions/movieActions";
//import components
import HeaderPublic from "../../components/headerPublic";
import SpinnerLoading from "../../components/spinnerLoading";
import MovieNowList from "../homeMovie/movieNowList";
import Cinema from "./cinema";
import FooterPublic from "../../components/footerPublic";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import Data from "../../components/TranslationEnglish/Data.json";

const DetailMovie = () => {
  const dispatch = useDispatch();
  const movieId = useParams();
  const [size, setSize] = useState(null);
  const [vlYoutube, setVlYoutube] = useState("");
  const { movie } = useSelector((state) => state.movie);
  const cinemas = useSelector((state) => state.cinemas.cinemas);
  const [content, setContent] = useState("");
  const language = useSelector((state) => state.language.language);
  const [loadingPage, setLoadingPage] = useState(false);
  const handleOpen = useCallback((value, embed) => {
    setSize(value);
    setVlYoutube(embed);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    setTimeout(async () => {
      await dispatch(getOneMovie(movieId.id));
      dispatch(getAllCinema());
      setLoadingPage(false);
    }, 1300);
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
      <div className="max-h-full min-h-screen w-full">
        <div className="bg-black">
          <HeaderPublic />
          {loadingPage === true ? (
            <SpinnerLoading />
          ) : (
            <div>
              <div
                style={{
                  backgroundImage: `url("${movie.bg}")`,
                }}
                className="bg-cover bg-center"
              >
                <div className="bg-gradient-to-t from-black/100 to-black/40">
                  <div className="grid lg:grid-cols-3 2xl:gap-x-0 md:gap-x-3 grid-cols-1 px-5 md:px-10 md:py-10 py-10">
                    <div className="mt-5 flex justify-center">
                      <div className="relative">
                        <img
                          src={movie.poster}
                          className="w-[340px]"
                          alt=""
                        ></img>
                        <div className="absolute opacity-0 hover:opacity-100 transition duration-500 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/60">
                          <button
                            onClick={() => handleOpen("xl", movie.trailer)}
                            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                          border text-[17px] border-white py-[13px] rounded-lg px-[35px] hover:bg-[#c40404] hover:border-none"
                          >
                            <i className="fas fa-play"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="px-0 pt-3 text-white justify-end">
                      <button className="mb-3 uppercase text-sm lg:text-[16px] py-[10px] border-b-[3px] border-[#E50914]">
                        {content === ""
                          ? "thông tin chi tiết"
                          : content.movieDetail.titleDetail}
                      </button>
                      <h1 className="lg:text-[40px] text-[30px]  font-medium uppercase">
                        {movie.name}
                      </h1>
                      <h2 className="text-[17px] lg:text-[25px] text-green-500 font-medium uppercase">
                        {movie.namevn}
                      </h2>
                      <div className="lg:text-[20px] text-[15px] leading-9">
                        <p>
                          {content === ""
                            ? "Năm sản xuất"
                            : content.movieDetail.year}
                          : {movie.year}
                        </p>
                        <p>
                          {content === ""
                            ? "Đạo diễn"
                            : content.movieDetail.director}
                          : {movie.director}
                        </p>
                        <p>
                          {content === ""
                            ? "Quốc gia"
                            : content.movieDetail.country}
                        </p>
                        <p>
                          {content === ""
                            ? "Thời lượng"
                            : content.movieDetail.duration}
                          : {movie.duration} phút
                        </p>
                        <p>
                          {content === ""
                            ? "Thể loại"
                            : content.movieDetail.type}
                          : {movie.type}
                        </p>
                        <div>
                          <h1>
                            {content === ""
                              ? "Diễn viên"
                              : content.movieDetail.actors}
                            :{" "}
                          </h1>
                        </div>
                        <div>
                          <h1>
                            {content === ""
                              ? "Độ tuổi giới hạn"
                              : content.movieDetail.limit}
                            : {movie.limitAge}
                          </h1>
                        </div>
                        <p className="text-[#bb1010]">
                          {content === ""
                            ? "Ngày khởi chiếu"
                            : content.movieDetail.date}
                          : {movie.released}
                        </p>
                      </div>
                    </div>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-duration="1000"
                      className="flex mt-3 justify-start items-center "
                    >
                      <div className="relative ease-linear duration-500 px-[70px] py-[70px] border-l-[3px] border-r-[3px] border-[#ffffff] shadow-white rounded-full">
                        <Link to="/booking">
                          <button className="absolute uppercase top-[2px] left-[2px] right-[2px] bottom-[2px] text-lg rounded-full text-white hover: bg-gradient-to-t hover:to-[#f01404] hover:from-black/80 font-medium bg-transparent">
                            {content === ""
                              ? "đặt vé"
                              : content.movieDetail.titleBtn}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Dialog
                open={size === "xl"}
                size={size || "xl"}
                handler={handleOpen}
                style={{ background: "transparent" }}
              >
                <DialogBody>
                  <div>
                    <iframe
                      title="youtube"
                      width="100%"
                      height="500px"
                      src={`https://www.youtube.com/embed/${vlYoutube}`}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </DialogBody>
                <DialogFooter>
                  <button
                    className="px-6 py-2 text-sm text-white bg-[#c40404]"
                    onClick={() => handleOpen(null, null)}
                  >
                    Tiếp tục
                  </button>
                </DialogFooter>
              </Dialog>
              <div>
                <div className="p-10">
                  <button className="mb-5 uppercase text-sm lg:text-[16px] py-[10px] text-white border-b-2 border-[#E50914]">
                    {content === ""
                      ? "Nội dung phim"
                      : content.movieDetail.titleContent}
                  </button>
                  <p className="text-white font-thin text-sm md:text-[15px] lg:text-[16px] text-justify">
                    &emsp;{movie.discription}
                  </p>
                </div>
                <div className="p-10">
                  <button className="mb-5 uppercase text-sm lg:text-[16px] py-[10px] text-white border-b-2 border-[#E50914]">
                    {content === ""
                      ? "lịch chiếu"
                      : content.movieDetail.startDate}
                  </button>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
                    {cinemas.map((cinema) => (
                      <Cinema key={cinema._id} cinema={cinema} />
                    ))}
                  </div>
                </div>
                <div className="p-10">
                  <button className="mb-5 uppercase text-sm lg:text-[16px] py-[10px] text-white border-b-2 border-[#E50914]">
                    {content === ""
                      ? "Ngày khởi chiếu"
                      : content.movieDetail.titleMovieNow}
                  </button>
                  <div>
                    <MovieNowList />
                  </div>
                </div>
              </div>
              <FooterPublic />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
