/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCinema } from "../../../redux/actions/cinemaActions";
import { getAllMovie } from "../../../redux/actions/movieActions";
import { getAllShowTime } from "../../../redux/actions/showTimeActions";
import { createSeat, getAllSeat, updateNewSeat } from "../../../redux/actions/seatActions";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function SeatForm() {
  const dispatch = useDispatch();
  const { showtimes } = useSelector((state) => state.showtimes);
  const { cinemas } = useSelector((state) => state.cinemas);
  const { movies } = useSelector((state) => state.movies);
  const { seats } = useSelector((state) => state.seats);
  const [size, setSize] = useState(null);
  const [id, setId] = useState("");
  const handleOpen = useCallback((value, id) => {
    setSize(value);
    setId(id);
  }, []);
  const handleUpdateNewSeat = useCallback((seatId, values) => {
    dispatch(updateNewSeat(seatId, values))
    toast.success("Reset danh sách ghế thành công!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  },[])
  const initialValues = {
    cinemaId: "",
    movieId: "",
    showTimeId: "",
    startTimeId: "",
    nameScreen: "",
    seats: [
      {
        name: "A1",
        status: "true",
      },
      {
        name: "A2",
        status: "true",
      },
      {
        name: "A3",
        status: "true",
      },
      {
        name: "A4",
        status: "true",
      },
      {
        name: "A5",
        status: "true",
      },
      {
        name: "A6",
        status: "true",
      },
      {
        name: "A7",
        status: "true",
      },
      {
        name: "A8",
        status: "true",
      },
      {
        name: "A9",
        status: "true",
      },
      {
        name: "B1",
        status: "true",
      },
      {
        name: "B2",
        status: "true",
      },
      {
        name: "B3",
        status: "true",
      },
      {
        name: "B4",
        status: "true",
      },
      {
        name: "B5",
        status: "true",
      },
      {
        name: "B6",
        status: "true",
      },
      {
        name: "B7",
        status: "true",
      },
      {
        name: "B8",
        status: "true",
      },
      {
        name: "B9",
        status: "true",
      },
      {
        name: "C1",
        status: "true",
      },
      {
        name: "C2",
        status: "true",
      },
      {
        name: "C3",
        status: "true",
      },
      {
        name: "C4",
        status: "true",
      },
      {
        name: "C5",
        status: "true",
      },
      {
        name: "C6",
        status: "true",
      },
      {
        name: "C7",
        status: "true",
      },
      {
        name: "C8",
        status: "true",
      },
      {
        name: "C9",
        status: "true",
      },
      {
        name: "D1",
        status: "true",
      },
      {
        name: "D2",
        status: "true",
      },
      {
        name: "D3",
        status: "true",
      },
      {
        name: "D4",
        status: "true",
      },
      {
        name: "D5",
        status: "true",
      },
      {
        name: "D6",
        status: "true",
      },
      {
        name: "D7",
        status: "true",
      },
      {
        name: "D8",
        status: "true",
      },
      {
        name: "D9",
        status: "true",
      },
      {
        name: "E1",
        status: "true",
      },
      {
        name: "E2",
        status: "true",
      },
      {
        name: "E3",
        status: "true",
      },
      {
        name: "E4",
        status: "true",
      },
      {
        name: "E5",
        status: "true",
      },
      {
        name: "E6",
        status: "true",
      },
      {
        name: "E7",
        status: "true",
      },
      {
        name: "E8",
        status: "true",
      },
      {
        name: "E9",
        status: "true",
      },
      {
        name: "F1",
        status: "true",
      },
      {
        name: "F2",
        status: "true",
      },
      {
        name: "F3",
        status: "true",
      },
      {
        name: "F4",
        status: "true",
      },
      {
        name: "F5",
        status: "true",
      },
      {
        name: "F6",
        status: "true",
      },
      {
        name: "F7",
        status: "true",
      },
      {
        name: "F8",
        status: "true",
      },
      {
        name: "F9",
        status: "true",
      },
      {
        name: "G1",
        status: "true",
      },
      {
        name: "G2",
        status: "true",
      },
      {
        name: "G3",
        status: "true",
      },
      {
        name: "G4",
        status: "true",
      },
      {
        name: "G5",
        status: "true",
      },
      {
        name: "G6",
        status: "true",
      },
      {
        name: "G7",
        status: "true",
      },
      {
        name: "G8",
        status: "true",
      },
      {
        name: "G9",
        status: "true",
      },
      {
        name: "H1",
        status: "true",
      },
      {
        name: "H2",
        status: "true",
      },
      {
        name: "H3",
        status: "true",
      },
      {
        name: "H4",
        status: "true",
      },
      {
        name: "H5",
        status: "true",
      },
      {
        name: "H6",
        status: "true",
      },
      {
        name: "H7",
        status: "true",
      },
      {
        name: "H8",
        status: "true",
      },
      {
        name: "H9",
        status: "true",
      },
      {
        name: "J1",
        status: "true",
      },
      {
        name: "J2",
        status: "true",
      },
      {
        name: "J3",
        status: "true",
      },
      {
        name: "J4",
        status: "true",
      },
      {
        name: "J5",
        status: "true",
      },
      {
        name: "J6",
        status: "true",
      },
      {
        name: "J7",
        status: "true",
      },
      {
        name: "J8",
        status: "true",
      },
      {
        name: "J9",
        status: "true",
      },
      {
        name: "K1",
        status: "true",
      },
      {
        name: "K2",
        status: "true",
      },
      {
        name: "K3",
        status: "true",
      },
      {
        name: "K4",
        status: "true",
      },
      {
        name: "K5",
        status: "true",
      },
      {
        name: "K6",
        status: "true",
      },
      {
        name: "K7",
        status: "true",
      },
      {
        name: "K8",
        status: "true",
      },
      {
        name: "K9",
        status: "true",
      },
      {
        name: "L1",
        status: "true",
      },
      {
        name: "L2",
        status: "true",
      },
      {
        name: "L3",
        status: "true",
      },
      {
        name: "L4",
        status: "true",
      },
      {
        name: "L5",
        status: "true",
      },
      {
        name: "L6",
        status: "true",
      },
      {
        name: "L7",
        status: "true",
      },
      {
        name: "L8",
        status: "true",
      },
      {
        name: "L9",
        status: "true",
      },
    ],
  };
  const submitForm = async (values, { resetForm }) => {
    dispatch(createSeat(values.timeId, values.seats));
    toast.success("Đã thêm danh sách ghế vào phòng chiếu!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
    resetForm();
  };
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    return errors;
  };
  useEffect(() => {
    dispatch(getAllCinema());
    dispatch(getAllMovie());
    dispatch(getAllShowTime());
    dispatch(getAllSeat());
  }, []);
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
      enableReinitialize
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          //   errors,
          //   touched,
          handleBlur,
        } = formik;
        return (
          <>
          <div className="grid grid-cols-10 gap-x-3 rounded-lg mt-5">
            <form className="px-10 py-3 col-span-7 shadow-2xl" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  className="text-sm mt-2 font-medium text-black"
                  htmlFor="cinemaId"
                >
                  Chọn rạp chiếu
                </label>
                <select
                  id="cinemaId"
                  name="cinemaId"
                  value={values.cinemaId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-select appearance-none
                              block
                              w-full
                              px-4
                              py-3
                              mt-3
                              text-sm 
                              text-black
                              bg-transparent bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-black bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Chọn rạp
                  </option>
                  {cinemas.map((cinema) => (
                    <option key={cinema._id} value={cinema._id}>
                      {cinema.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3 ">
                <label
                  className="text-sm mt-2 font-medium text-black"
                  htmlFor="movieId"
                >
                  Chọn phim
                </label>
                <select
                  id="movieId"
                  name="movieId"
                  value={values.movieId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-select appearance-none
                              block
                              w-full
                              px-4
                              py-3
                              mt-3
                              text-sm 
                              text-black
                              bg-transparent bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-black bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Chọn phim
                  </option>
                  {movies.map((movie) => (
                    <option key={movie._id} value={movie._id}>
                      {movie.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3 ">
                <label
                  className="text-sm mt-2 font-medium text-black"
                  htmlFor="nameScreen"
                >
                  Chọn phòng chiếu đã thêm
                </label>
                <select
                  id="nameScreen"
                  name="nameScreen"
                  value={values.nameScreen}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-select appearance-none
                              block
                              w-full
                              px-4
                              py-3
                              mt-3
                              text-sm 
                              text-black
                              bg-transparent bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-black bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected value="" disabled>
                    Chọn phòng chiếu
                  </option>
                  <option value="Phòng chiếu 1">Phòng chiếu 1</option>
                  <option value="Phòng chiếu 2">Phòng chiếu 2</option>
                </select>
              </div>
              <div className="mb-3 ">
                <label
                  className="text-sm mt-2 font-medium text-black"
                  htmlFor="startTimeId"
                >
                  Chọn giờ chiếu đã thêm
                </label>
                <select
                  id="startTimeId"
                  name="startTimeId"
                  value={values.startTimeId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-select appearance-none
                              block
                              w-full
                              px-4
                              py-3
                              mt-3
                              text-sm 
                              text-black
                              bg-transparent bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-black bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Chọn khung giờ
                  </option>
                  {showtimes.map(
                    (showtime) =>
                      showtime.cinemaId === values.cinemaId &&
                      showtime.movieId === values.movieId &&
                      showtime.startTime.map(
                        (time) =>
                          time.nameScreen === values.nameScreen && (
                            <option key={time._id} value={time._id}>
                              {time.time}
                            </option>
                          )
                      )
                  )}
                </select>
              </div>
              <div className="flex justify-end mt-5">
                <p
                  onClick={() => handleOpen("lg", values.startTimeId)}
                  className="py-2 px-6 mx-2 cursor-pointer font-medium text-sm bg-white text-black"
                >
                  Xem danh sách
                </p>
                <p 
                onClick={() => handleUpdateNewSeat(values.startTimeId, values.seats)}
                className="py-2 px-6  mx-2 bg-white cursor-pointer font-medium text-sm text-black">
                  Làm mới
                </p>
                <button
                  type="submit"
                  className="bg-[#cf1111] text-[13px] text-white py-2 px-6"
                >
                  Thêm danh sách ghế
                </button>
                <ToastContainer toastStyle={{ color: "black" }} />
              </div>
            </form>
            <div className="col-span-3">
              <div className="flex flex-col text-center shadow-2xl px-5 py-2 rounded-lg">
                <h1>TỔNG DANH SÁCH GHẾ CHO CÁC SUẤT CHIẾU</h1>
                <p className="text-green-500 text-[35px]">
                  {seats.length}
                </p>
              </div>
              <div className="flex flex-col mt-3 text-center shadow-2xl px-5 py-2 rounded-lg">
                <h1>SỐ PHÒNG CHIẾU</h1>
                <p className="text-green-500 text-[35px]">
                  2
                </p>
              </div>
              <div className="flex flex-col mt-3 text-center shadow-2xl px-5 py-2 rounded-lg">
                <h1>SỐ LƯỢNG GHẾ MỖI PHÒNG</h1>
                <p className="text-green-500 text-[35px]">
                  99
                </p>
              </div>
            </div>
          </div>                  
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
                    {seats.startTimeId === id && (
                      <div>
                        <ul className="grid grid-cols-9 gap-1 py-5 px-0 lg:px-14">
                          {seats.seats.map((seat) => (
                            <div key={seat._id}>
                              {seat.status === true ? (
                                <li
                                  value={seat.name}
                                  className="bg-blue-gray-200 cursor-pointer hover:bg-green-600 text-sm text-center text-gray-900 cursor-pointer"
                                >
                                  {seat.name}
                                </li>
                              ) : (
                                <li
                                  disabled
                                  className="bg-red-600 cursor-not-allowed text-sm text-center text-white"
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
                            <span className="bg-red-600 px-2"> </span>
                            &ensp; Đã đặt
                          </p>
                          <p className=" mx-1 md:mx-2">
                            <span className="bg-green-600 px-2"> </span>
                            &ensp; Đang chọn
                          </p>
                          <p className=" ml-2 md:mx-2">
                            <span className="bg-gray-400 px-2"> </span>
                            &ensp; Còn trống
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </DialogBody>
              <DialogFooter>
                <button
                  className="px-6 my-5 py-2 text-sm text-white bg-[#E51409]"
                  onClick={() => handleOpen(null)}
                >
                  TIẾP TỤC
                </button>
              </DialogFooter>
            </Dialog>
          </>
        );
      }}
    </Formik>
  );
}

export default memo(SeatForm);
