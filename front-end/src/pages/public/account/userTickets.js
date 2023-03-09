/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import { Breadcrumbs } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllReservation,
  deleteTicket,
} from "../../../redux/actions/reservationActions";
import HeaderPublic from "../components/headerPublic";
import { getAllMovie } from "../../../redux/actions/movieActions";
import SpinnerLoading from "../components/spinnerLoading";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterPublic from "../components/footerPublic"
function UserTickets() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const reservations = useSelector((state) => state.reservations.reservations);
  const [size, setSize] = useState(null);
  const [sizeQR, setSizeQR] = useState(null);
  const userId = localStorage.getItem("userId");
  const [loadingPage, setLoadingPage] = useState(false);
  const [id, setId] = useState("");
  const [idQR, setIdQR] = useState("");
  const [newReservations, setNewReservations] = useState([]); //CREATE ONE EMPTY ARRAY TO SAVE CURRENT RESERVATION
  const handleOpen = useCallback((value, id) => {
    setSize(value);
    setId(id);
  }, []);
  const handleOpenQR = useCallback((value, id) => {
    setSizeQR(value);
    setIdQR(id);
  }, []);
  const handleDeleteTicket = async (id) => {
    await dispatch(deleteTicket(id));

    setSize(null); //DISMISS MODAL
    setNewReservations(reservations.filter((item) => item._id !== id)); //AFTER DELETE SAVE INTO NEW RESERVATION
    toast.success("Hủy vé thành công !", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllReservation());
      await dispatch(getAllMovie());
      setLoadingPage(false);
    }, 1300);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  useEffect(() => {
    setNewReservations(reservations); //INIT NEW ARRAY IS CURRENT ARRAY
  }, [reservations]);
  return (
    <>
      <div className="bg-[#11161d]">
        <HeaderPublic />
        <ToastContainer toastStyle={{ color: "black" }} />
        {loadingPage === true ? (
          <SpinnerLoading />
        ) : (
          <div className="lg:px-16 px-5 py-20 text-white min-h-screen max-h-full w-full">
            <Breadcrumbs className="bg-transparen p-0">
              <Link to="/home" className="text-gray-400">
                Trang chủ
              </Link>
              <Link className="text-gray-200">Vé đã đặt</Link>
            </Breadcrumbs>
            <button
              disabled
              className="text-white text-sm lg:text-[15px] pr-6 py-[10px] border-b-[3px] border-[#E50914]"
            >
              VÉ CỦA BẠN
            </button>
            <div data-aos="fade-left" data-aos-duration="1000">
              {newReservations.reverse().map(
                (
                  reservation // GET LASTEST ITEM IN ARRAY
                ) => (
                  <div key={reservation._id}>
                    {reservation.author._id === userId && (
                      <div
                        style={{
                          backgroundImage: `url("${reservation.imgMovie}")`,
                        }}
                        className="bg-center bg-cover rounded-lg"
                      >
                        <div className="bg-gradient-to-r from-black/60 to-black/20 text-sm w-full text-white mt-5 px-2 lg:px-3 py-1 lg:py-3">
                          <div className="bg-transparent">
                            <div className="grid grid-cols-3 lg:px-2">
                              <div className="lg:flex lg:items-center justify-start col-span-2">
                                <h1 className="lg:mr-5 mr-0 lg:ml-3 ml-0 pt-2 text-sm lg:text-[15px] text-gray-500">
                                  Phim:{" "}
                                  <span className="text-white font-thin text-[12px] lg:text-[15px] uppercase">
                                    {reservation.nameMovie}
                                  </span>
                                </h1>
                                <h2 className="lg:ml-5 lg:pt-2 text-sm lg:text-[15px] text-gray-500">
                                  Rạp chiếu:{" "}
                                  <span className="text-white font-thin">
                                    {reservation.nameCinema}
                                  </span>
                                </h2>
                              </div>
                              <div className="flex items-center justify-end">
                                <h1 className="mx-2 text-sm lg:text-[15px] hidden lg:block">
                                  Mã vé QR
                                </h1>
                                <button
                                  onClick={() =>
                                    handleOpenQR("md", reservation._id)
                                  }
                                  className="border font-bold p-2 text-[12px] rounded-full"
                                >
                                  Xem
                                </button>
                                &ensp;
                                <h1 className="mx-2 text-sm lg:text-[15px] hidden lg:block">
                                  Hủy vé đặt
                                </h1>

                                <button
                                  onClick={() =>
                                    handleOpen("lg", reservation._id)
                                  }
                                  className=" bg-[#c40404] font-bold p-2 text-[12px] rounded-full"
                                >
                                  Hủy
                                </button>

                              </div>
                            </div>
                            <div className="bg-black/70 rounded-lg">
                              <div className="bg-transparent grid grid-cols-6 lg:grid-cols-8 gap-x-1 mt-5 lg:px-5 px-2 py-1 lg:py-2">
                                <div>
                                  <h3 className="text-sm ml-2 lg:ml-0 lg:text-[15px] text-gray-500">
                                    Ngày chiếu
                                  </h3>
                                  <p className="text-[12px] font-thin lg:text-[15px]">
                                    {reservation.startDate}
                                  </p>
                                </div>
                                <div className="sm:text-center lg:text-left">
                                  <h3 className="text-sm lg:text-[15px] text-gray-500">
                                    Giờ chiếu
                                  </h3>
                                  <p className="text-[12px] font-thin lg:text-[15px]">
                                    {reservation.startTime}
                                  </p>
                                </div>
                                <div className="px-0 lg:mx-0">
                                  <h3 className="text-sm lg:text-[15px] text-gray-500">
                                    Loại vé
                                  </h3>
                                  <p className="text-[12px] font-thin lg:text-[15px]">
                                    {reservation.tickets.map(
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
                                </div>
                                <div className="text-center">
                                  <h3 className="text-sm lg:text-[15px] text-gray-500">
                                    Ghế
                                  </h3>
                                  <p className="text-[12px] lg:text-[15px] font-thin">
                                    {reservation.seats}
                                  </p>
                                </div>
                                <div className="col-span-2 ml-2 lg:ml-0  lg:px-14">
                                  <h3 className="text-sm lg:text-[15px] text-gray-500">
                                    Combo
                                  </h3>
                                  <p className="text-[12px] lg:text-[15px] font-thin">
                                    {reservation.foods.map(
                                      (food) =>
                                        food.quantity > 0 && (
                                          <span key={food._id}>
                                            {food.typeFood} &#40;x
                                            {food.quantity}
                                            &#41; &ensp;
                                          </span>
                                        )
                                    )}
                                  </p>
                                </div>
                                <div className="col-span-2 lg:text-end">
                                  <h3 className="text-sm lg:text-[15px] text-gray-500">
                                    Tống thanh toán
                                  </h3>
                                  <p className="font-bold text-[15px] lg:text-[17px]">
                                    {reservation.total * 1000} VNĐ
                                  </p>
                                  <p className="text-[12px] lg:text-sm text-green-800">
                                    Đã thanh toán
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
            <Dialog
              open={size === "lg"}
              size={size || "lg"}
              handler={handleOpen}
              style={{ borderRadius: "0px" }}
            >
              <DialogHeader>
                <h2 className="text-sm lg:text-[17px] text-[#c40404] font-bold">
                  HỦY ĐẶT VÉ
                </h2>
              </DialogHeader>
              <DialogBody divider>
                <div className="mb-5 w-full">
                  <p className="my-2 text-[#000000]">
                    Bạn có chắc là muốn hủy vé đã đặt không?
                  </p>
                  <Select color="gray" label="Chọn lý do hủy">
                    <Option value="1">Không còn nhu cầu</Option>
                    <Option value="2">Muốn đặt lại sản phẩm khác</Option>
                    <Option value="3">Mua trùng vé phim</Option>
                  </Select>
                </div>
                <Input color="gray" variant="standard" label="khác" />
              </DialogBody>
              <DialogFooter>
                <button
                  className="px-6 my-5 py-2 text-sm text-white bg-[#c40404]"
                  onClick={() => handleDeleteTicket(id)}
                >
                  Tiếp tục
                </button>
              </DialogFooter>
            </Dialog>
            <Dialog
              open={sizeQR === "md"}
              size={sizeQR || "md"}
              handler={handleOpenQR}
              style={{ borderRadius: "0px" }}
            >
              <DialogHeader>
                <h2 className="text-[17px] text-[#c40404] font-bold">
                  Mã QR Code
                </h2>
              </DialogHeader>
              <DialogBody divider>
                <div className="mb-5">
                  <p className="mt-2 text-[#000000]">
                    Mã vé:{" "}
                    <span className="text-[#000000] text-[12px] md:text-sm lg:text-[15px]">
                      {idQR}
                    </span>
                  </p>
                  <p className="my-2 text-[#e97a3a] text-sm">
                    Bạn có thể dùng điện thoại lưu lại để đưa nhân viên tại quầy
                    nhé!
                  </p>

                  <QRCode
                    id="qrcode"
                    value={idQR}
                    style={{ height: "150px", width: "100%" }}
                    level={"H"}
                    includeMargin={true}
                  ></QRCode>
                </div>
              </DialogBody>
              <DialogFooter>
                <button
                  className="px-6 py-2 text-sm text-white bg-[#c40404]"
                  onClick={() => handleOpenQR(null, null)}
                >
                  Tiếp tục
                </button>
              </DialogFooter>
            </Dialog>
            <button
              disabled
              className="text-white text-sm lg:text-[15px] mt-[3%] pr-6 py-[10px] border-b-[3px] border-[#E50914]"
            >
              PHIM ĐANG CHIẾU
            </button>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-x-10 pt-10">
              {movies.map((movie, index) => (
                <div key={movie._id}>
                  {index < 4 && (
                    <div className="">
                      <div className="relative">
                        <img
                          className="w-[370px] bg-cover"
                          src={movie.poster}
                          alt=""
                        ></img>
                        <Link to={`/movie-now/${movie._id}`}>
                          <div className="absolute opacity-0 hover:opacity-100 transition duration-400 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
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
                        <p className="text-gray-300 uppercase">
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
        )}
      </div>
      <FooterPublic/>
    </>
  );
}

export default memo(UserTickets);
