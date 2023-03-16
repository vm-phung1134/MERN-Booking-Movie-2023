/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import HeaderPublic from "../components/headerPublic";
import FooterPublic from "../components/footerPublic";
import SpinnerLoading from "../components/spinnerLoading";
import { Select, Option } from "@material-tailwind/react";
import {
  getAllCinema,
  getOneCinema,
} from "../../../redux/actions/cinemaActions";
import { getAllMovie, getOneMovie } from "../../../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import Session from "./session";
import {
  getAllShowTime,
  getOneShowTime,
} from "../../../redux/actions/showTimeActions";
import { getAllTicket } from "../../../redux/actions/ticketActions";
import TicketTable from "./ticketTable";
import FoodTable from "./foodTable";
import { getAllFood } from "../../../redux/actions/foodActions";
import {
  getAllSeat,
  updateStatusSeat,
} from "../../../redux/actions/seatActions";
import { createReservation } from "../../../redux/actions/reservationActions";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
} from "@material-tailwind/react";
import { isCheckQuanlitySeat } from "../middleware";
import Data from "../components/TranslationEnglish/Data.json";

function Booking() {
  const dispatch = useDispatch();
  // CALL STORE FROM GET API
  const baseURL = "http://localhost:5000";
  const cinemas = useSelector((state) => state.cinemas.cinemas);
  const movies = useSelector((state) => state.movies.movies);
  const showtimes = useSelector((state) => state.showtimes.showtimes);
  const tickets = useSelector((state) => state.tickets.tickets);
  const foods = useSelector((state) => state.foods.foods);
  const movie = useSelector((state) => state.movie.movie);
  const cinema = useSelector((state) => state.cinema.cinema);
  const showtime = useSelector((state) => state.showtime.showtime);
  const seats = useSelector((state) => state.seats.seats);
  const language = useSelector((state) => state.language.language);
  // COUNT SỐ VÉ KHÁCH HÀNG ĐÃ CHỌN
  let [countTicket, setCountTicket] = useState(0);
  tickets.map((ticket) => (countTicket = countTicket + ticket.quantity));
  const [size, setSize] = useState(null);
  const [loadingPage, setLoadingPage] = useState(false);
  const [stateLoadingLogin, setStateLoadingLogin] = useState({
    loading: false,
  });
  const [content, setContent] = useState("");
  const [valueCinema, setValueCinema] = useState("");
  const [valueMovie, setValueMovie] = useState("");
  const [valueSeats, setValueSeats] = useState("");
  const [valueShowTime, setValueShowTime] = useState({
    id: "",
    timeVl: "",
    startTimeId: "",
  });
  let [vlPriceTicket, setvlPriceTicket] = useState(0);
  let [vlPriceFood, setvlPriceFood] = useState(0);
  const [selectSeats, setSelectSeats] = useState([]);
  // CHECK QUANLITY TICKET AND SEAT SELECTED
  isCheckQuanlitySeat(selectSeats, countTicket);
  const newSelectSeats = [...new Set(selectSeats)];
  //const newIsActive = [...new Set(isActive)]
  const handleOpen = (value) => setSize(value);
  // GET VALUE CINEMA
  const handleChangeCinema = useCallback(
    (value) => {
      setValueMovie("");
      setValueCinema(value);
    },
    [setValueCinema]
  );
  // GET VALUE MOVIE
  const handleChangeMovie = useCallback(
    (value) => {
      setValueShowTime({ id: "", timeVl: "", startTimeId: "" });
      setValueMovie(value);
    },
    [setValueMovie]
  );
  // GET ARRAY VALUES SEAT
  const handleSeat = (e, seat, seats_id) => {
    setValueSeats(seats_id);
    setSelectSeats((prev) => [...prev, seat.name]);
    if (selectSeats.includes(seat.name) === true) {
      setCountTicket(countTicket - 1);
    }
  };
  const tokenId = localStorage.getItem("userId");
  const ticketPayment = {
    nameMovie: movie.name,
    imgMovie: movie.bg,
    nameCinema: cinema.name,
    tickets: tickets,
    seats: newSelectSeats.join(),
    foods: foods,
    startTime: valueShowTime.timeVl,
    startDate: showtime.startDate,
    total: vlPriceFood + vlPriceTicket,
  };

  const handlePayment = () => {
    setStateLoadingLogin({ loading: true });
    setTimeout(async () => {
      setStateLoadingLogin({ loading: false });
      await axios
        .post(`${baseURL}/api/v1/payment/create-checkout-session`, {
          ticketPayment,
          userId: tokenId,
        })
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
            dispatch(createReservation(ticketPayment));
            newSelectSeats.map((item) =>
              dispatch(updateStatusSeat(valueSeats, item))
            );
          }
        })
        .catch((err) => console.log(err.message));
    }, 3000);
  };
  useMemo(() => {
    dispatch(getOneCinema(valueCinema));
    dispatch(getOneMovie(valueMovie));
    dispatch(getOneShowTime(valueShowTime.id));
  }, [dispatch, valueCinema, valueMovie, valueShowTime.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllMovie());
      await dispatch(getAllCinema());
      await dispatch(getAllShowTime());
      await dispatch(getAllTicket());
      await dispatch(getAllFood());
      await dispatch(getAllSeat());
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
      <div className=" bg-cover bg-center bg-[url('https://wallpaperaccess.com/full/435988.jpg')]">
        <div className="bg-black/70">
          <HeaderPublic />
          {loadingPage === true ? (
            <SpinnerLoading />
          ) : (
            <div className="lg:px-14 md:px-12 px-6 md:py-16 py-14 lg:py-20 min-h-screen max-h-full bg-transparent">
              <Breadcrumbs className="bg-transparen p-0">
                <Link to="/home" className="text-gray-400">
                  {content === "" ? "Trang chủ" : content.booking.linkHome}
                </Link>
                <Link to="/booking" className="text-gray-200">
                  {content === "" ? "Đặt vé xem phim" : content.booking.link}
                </Link>
              </Breadcrumbs>
              <div className="flex justify-between">
                <button
                  disabled
                  className="text-white uppercase lg:mb-0 mb-3 text-sm lg:text-[15px] pr-6 py-[17px] border-b-[3px] border-[#E50914]"
                >
                  {content === "" ? "Trang chủ" : content.booking.titleMovie}
                </button>
              </div>

              <div className="grid lg:grid-cols-2 lg:gap-x-5 lg:my-10 gap-y-3 grid-cols-1">
                <div>
                  <Select
                    className="text-white uppercase"
                    label={
                      content === ""
                        ? "CHỌN RẠP CHIẾU"
                        : content.booking.selectCinema
                    }
                    onChange={handleChangeCinema}
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 30 },
                    }}
                  >
                    {cinemas.map((cinema) => (
                      <Option
                        className="text-black border-b text-sm lg:text-[15px] border-gray-500 py-5 focus:text-white focus:bg-blue-gray-600"
                        key={cinema._id}
                        value={cinema._id}
                      >
                        {cinema.name}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Select
                    className="text-white uppercase"
                    label={
                      content === "" ? "CHỌN PHIM" : content.booking.selectFilm
                    }
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 30 },
                    }}
                    onChange={handleChangeMovie}
                  >
                    {movies.map((movie) =>
                      valueCinema !== "" ? (
                        <Option
                          className="text-black border-b border-gray-500 py-5 focus:text-white focus:bg-blue-gray-600"
                          key={movie._id}
                          value={movie._id}
                        >
                          <div className="flex justify-between">
                            <div>
                              <span className="capitalize">{movie.name}</span> -{" "}
                              {movie.namevn}
                            </div>
                            <p className="text-[13px] ml-5 text-[#c40404] rounded">
                              C{movie.limitAge}
                            </p>
                          </div>
                        </Option>
                      ) : (
                        <></>
                      )
                    )}
                  </Select>
                </div>
              </div>
              <div>
                {valueCinema !== "" && valueMovie !== "" ? (
                  <button
                    disabled
                    className="text-white uppercase text-sm lg:text-[15px] pr-6 py-[17px] border-b-2 border-[#E50914]"
                  >
                    {content === ""
                      ? "CHỌN SUẤT CHIẾU"
                      : content.booking.selectSession}
                  </button>
                ) : (
                  <></>
                )}
              </div>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5 mb-10">
                {showtimes.map(
                  (showtime) =>
                    valueMovie !== "" &&
                    valueCinema !== "" &&
                    valueMovie === showtime.movieId &&
                    valueCinema === showtime.cinemaId && (
                      <Session
                        seats={seats}
                        key={showtime._id}
                        showtime={showtime}
                        setValueShowTime={setValueShowTime}
                      />
                    )
                )}
              </div>
              <div>
                {valueMovie !== "" &&
                  valueCinema !== "" &&
                  valueShowTime.id !== "" && (
                    <>
                      <button
                        disabled
                        className="text-white uppercase text-sm lg:text-[15px] mb-5 pr-6 py-[17px] border-b-[3px] border-[#E50914]"
                      >
                        {content === ""
                          ? "CHỌN LOẠI VÉ & GÓI TIỆN ÍCH"
                          : content.booking.selectOption}
                      </button>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5">
                        <div className="lg:col-span-2">
                          <TicketTable
                            setvlPriceTicket={setvlPriceTicket}
                            tickets={tickets}
                          />
                          <FoodTable
                            setvlPriceFood={setvlPriceFood}
                            foods={foods}
                          />
                        </div>
                        <div
                          className="md:mx-6 mx-0 lg:mx-0 xl:mx-6 mt-10 lg:mt-0 h-[100%] lg:h-[70%] bg-cover bg-center"
                          style={{ backgroundImage: `url("${movie.poster}")` }}
                        >
                          <div className="bg-gradient-to-r from-black/100 to-black/40  text-white text-sm w-full h-full">
                            <div className="px-5 py-10">
                              <div>
                                <p className="font-medium text-[20px] uppercase py-1">
                                  {movie.name}
                                </p>
                                <p className="font-medium text-[17px] uppercase py-1 text-green-700">
                                  {movie.namevn}
                                </p>
                                <p className="py-1 mt-2">
                                  <span className="text-gray-400">
                                    Rạp chiếu:{" "}
                                  </span>{" "}
                                  {cinema.name}
                                </p>
                                <p className="py-1 mt-2">
                                  <span className="text-gray-400">
                                    Suất chiếu:{" "}
                                  </span>{" "}
                                  {valueShowTime.timeVl} | Ngày{" "}
                                  {showtime.startDate}
                                </p>
                                <p className="py-1 mt-2">
                                  <span className="text-gray-400">
                                    Loại vé:{" "}
                                  </span>{" "}
                                  {tickets.map(
                                    (ticket) =>
                                      ticket.quantity > 0 && (
                                        <span key={ticket._id}>
                                          {ticket.typeTicket} &#40;x
                                          {ticket.quantity}
                                          &#41;&ensp;
                                        </span>
                                      )
                                  )}
                                </p>
                                <div className="grid grid-cols-3 gap-x-1 mt-2">
                                  <p className="py-1 col-span-2">
                                    <span className="text-gray-400">Ghế: </span>{" "}
                                    {newSelectSeats.map((newSeat) => (
                                      <span key={newSeat}>
                                        {newSeat}, &ensp;
                                      </span>
                                    ))}
                                  </p>
                                  {countTicket > 0 && (
                                    <button
                                      className="text-[13px] p-2 text-white bg-[#E51409]"
                                      onClick={() => handleOpen("lg")}
                                    >
                                      CHỌN GHẾ
                                    </button>
                                  )}
                                </div>
                                <p className="py-1">
                                  <span className="text-gray-400">Combo: </span>{" "}
                                  {foods.map(
                                    (food) =>
                                      food.quantity > 0 && (
                                        <span key={food._id}>
                                          {food.typeFood} &#40;x{food.quantity}
                                          &#41; &ensp;
                                        </span>
                                      )
                                  )}
                                </p>

                                <p className="py-1 mt-2 text-red-500 text-[17px]">
                                  <span className="text-gray-500">Tổng: </span>
                                  {vlPriceFood + vlPriceTicket}.000 VNĐ
                                </p>
                                <p className="text-[10px] text-gray-200">
                                  &#40; Nếu bạn không muốn lên nóc nhà ngồi. Thì
                                  hãy chọn ghế &#41;
                                </p>
                              </div>
                              <div>
                                <Dialog
                                  open={size === "lg"}
                                  size={size || "lg"}
                                  handler={handleOpen}
                                  style={{ borderRadius: "0px" }}
                                >
                                  <DialogHeader>
                                    <h2 className="text-sm lg:text-[15px] text-[#E50914]">
                                      CHỌN GHẾ
                                    </h2>
                                  </DialogHeader>
                                  <DialogBody divider>
                                    <p className="text-black">Lối vào</p>
                                    {seats.map((seats) => (
                                      <div key={seats._id}>
                                        {valueShowTime.startTimeId ===
                                          seats.startTimeId && (
                                          <div>
                                            <ul className="grid grid-cols-9 gap-1 py-5 px-0 lg:px-14">
                                              {seats.seats.map((seat) => (
                                                <div key={seat._id}>
                                                  {seat.status === true ? (
                                                    <li
                                                      style={{
                                                        backgroundColor: newSelectSeats.includes(seat.name) === true ? "green" : "", 
                                                        color: newSelectSeats.includes(seat.name) === true ? "white" : ""
                                                      }}
                                                      value={seat.name}
                                                      onClick={(e) =>
                                                        handleSeat(
                                                          e,
                                                          seat,
                                                          seats._id
                                                        )
                                                      }
                                                      className="bg-blue-gray-200 hover:bg-green-600 text-sm text-center text-gray-900 cursor-pointer"
                                                    >
                                                      {seat.name}
                                                    </li>
                                                  ) : (
                                                    <li
                                                      disabled
                                                      className="bg-red-600 text-sm text-center text-white"
                                                    >
                                                      {seat.name}
                                                    </li>
                                                  )}
                                                </div>
                                              ))}
                                            </ul>
                                            <div className="">
                                              <p className="text-center text-black px-10">
                                                Màn hình
                                              </p>
                                              <p className="border-2 border-black"></p>
                                            </div>
                                            <div className="flex mt-5 text-[12px] md:text-sm text-black">
                                              <p className=" mr-2 md:mx-2">
                                                <span className="bg-red-600 px-2">
                                                  {" "}
                                                </span>
                                                &ensp; Đã đặt
                                              </p>
                                              <p className=" mx-1 md:mx-2">
                                                <span className="bg-green-600 px-2">
                                                  {" "}
                                                </span>
                                                &ensp; Đang chọn
                                              </p>
                                              <p className=" ml-2 md:mx-2">
                                                <span className="bg-gray-400 px-2">
                                                  {" "}
                                                </span>
                                                &ensp; Còn trống
                                              </p>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </DialogBody>
                                  <DialogFooter>
                                    <p className="text-black mx-0 md:mx-5 text-sm">
                                      Bạn hiện có thể chọn{" "}
                                      <span className="text-green-500">
                                        {countTicket}
                                      </span>{" "}
                                      vị trí ghế
                                    </p>
                                    <button
                                      className="px-6 my-5 py-2 text-sm text-white bg-[#E51409]"
                                      onClick={() => handleOpen(null)}
                                    >
                                      TIẾP TỤC
                                    </button>
                                  </DialogFooter>
                                </Dialog>
                              </div>
                              <div className="justify-center flex mt-10">
                                {stateLoadingLogin.loading === true ? (
                                  <button
                                    disabled
                                    className="px-8 my-3 py-3 text-[15px] text-white bg-gradient-to-r from-[#E50914] to-[#b8a608]"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      role="status"
                                      className="inline w-4 h-4 mr-3 text-white animate-spin"
                                      viewBox="0 0 100 101"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB"
                                      />
                                      <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                    Vui lòng chờ
                                  </button>
                                ) : (
                                  <div>
                                    {newSelectSeats.length > 0 ? (
                                      <button
                                        onClick={handlePayment}
                                        className="px-8 my-3 text-sm lg:text-[15px] py-3 text-white bg-gradient-to-r from-[#E50914] to-[#b8a608]"
                                      >
                                        TIẾP TỤC
                                      </button>
                                    ) : (
                                      <Tooltip content="Chọn Vé và Ghế để tiếp tục">
                                        <button className="px-8 text-sm lg:text-[15px] my-3 py-3 cursor-pointer text-white bg-gradient-to-r from-[#E50914] to-[#b8a608]">
                                          TIẾP TỤC
                                        </button>
                                      </Tooltip>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
              </div>
            </div>
          )}
        </div>
      </div>
      <FooterPublic />
    </>
  );
}

export default Booking;
