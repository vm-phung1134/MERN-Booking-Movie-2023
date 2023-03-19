/* eslint-disable react-hooks/exhaustive-deps */
//import logic
import React, {useCallback, useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllCinema } from "../../../../redux/actions/cinemaActions";
import { getOneMovieSoon } from "../../../../redux/actions/movieSoonActions";
//import components
import HeaderPublic from "../../components/headerPublic";
import SpinnerLoading from "../../components/spinnerLoading";
import MovieSoonList from "../homeMovie/movieSoonList";
import Cinema from "./cinema";
import {
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import FooterPublic from "../../components/footerPublic"

const DetailMovieSoon = () => {
  const dispatch = useDispatch();
  const movieSoonId = useParams();
  const { movieSoon } = useSelector((state) => state.movieSoon);
  const cinemas = useSelector((state) => state.cinemas.cinemas);
const [size, setSize] = useState(null);
    const [vlYoutube, setVlYoutube] = useState("");
  const [loadingPage, setLoadingPage] = useState(false);
  const handleOpen = useCallback((value, embed) => {
      setSize(value);
      setVlYoutube(embed);
    }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    setTimeout(async () => {
      await dispatch(getOneMovieSoon(movieSoonId.id));
      dispatch(getAllCinema());
      setLoadingPage(false);
    }, 1300);
  }, []);
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
                  backgroundImage: `url("${movieSoon.bg}")`,
                }}
                className="bg-cover bg-center"
              >
                <div className="bg-gradient-to-t from-black/100 to-black/40">
                  <div className="grid lg:grid-cols-3 2xl:gap-x-0 md:gap-x-3 grid-cols-1 p-6 lg:p-10">
                    <div className="mt-5 flex justify-center">
                      <div className="relative">
                        <img
                          src={movieSoon.poster}
                          className="w-[340px]"
                          alt=""
                        ></img>
                        <div className="absolute opacity-0 hover:opacity-100 transition duration-500 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/60">
                          <button
                            onClick={() => handleOpen("xl", movieSoon.trailer)}
                            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                          border text-[17px] border-white py-[13px] rounded-lg px-[35px] hover:bg-[#c40404] hover:border-none"
                          >
                            <i className="fas fa-play"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="px-0 pt-3 text-white justify-end">
                      <button className="mb-3 text-sm lg:text-[15px] py-[10px] border-b-[3px] border-[#E50914]">
                        THÔNG TIN CHI TIẾT PHIM
                      </button>
                      <h1 className="lg:text-[40px] text-[30px]  font-medium uppercase">
                        {movieSoon.name}
                      </h1>
                      <h2 className="text-[17px] lg:text-[25px] text-green-500 font-medium uppercase">
                        {movieSoon.namevn}
                      </h2>
                      <div className="lg:text-[20px] text-[15px] leading-9">
                        <p>Năm sản xuất: {movieSoon.year}</p>
                        <p>Đạo diễn: {movieSoon.director}</p>
                        <p>Quốc gia: {movieSoon.country}</p>
                        <p>Thời lượng: {movieSoon.duration} phút</p>
                        <p>Đạo diễn: {movieSoon.director}</p>
                        <p>Thể loại: {movieSoon.type}</p>
                        <div>
                          <h1>Diễn viên</h1>
                        </div>
                        <p className="text-[#e75353]">
                          Ngày khởi chiếu: {movieSoon.released}
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
                          <button className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] text-lg rounded-full text-white hover: bg-gradient-to-t hover:to-[#f01404] hover:from-black/80 font-medium bg-transparent">
                            MUA VÉ
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
              <div className="lg:p-10 p-6">
                <div className="mb-5">
                  <button className="uppercase text-sm lg:text-[15px] py-[10px] text-white border-b-2 border-[#E50914]">
                    nội dung phim
                  </button>
                  <p className="text-white mt-5 font-thin text-sm md:text-[15px] lg:text-[15px] text-justify">
                    &emsp;{movieSoon.discription}
                  </p>
                </div>
                <div className="mb-5">
                  <button className="uppercase text-sm lg:text-[15px] py-[10px] text-white border-b-2 border-[#E50914]">
                    lịch chiếu
                  </button>
                  <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-3 lg:gap-5">
                    {cinemas.map((cinema) => (
                      <Cinema key={cinema._id} cinema={cinema} />
                    ))}
                  </div>
                </div>
                <div className="mb-5">
                  <button className="uppercase text-sm lg:text-[15px] py-[10px] text-white border-b-2 border-[#E50914]">
                    phim sắp chiếu
                  </button>
                  <div>
                    <MovieSoonList />
                  </div>
                </div>
              </div>
              <FooterPublic/>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailMovieSoon;
