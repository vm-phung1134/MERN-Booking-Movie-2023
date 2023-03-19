/* eslint-disable react-hooks/exhaustive-deps */
import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, memo, useState } from "react";
import {
  getOneReservation,
  updateOneReservation,
} from "../../../redux/actions/reservationActions";
import { useParams } from "react-router-dom";
import {
  decrement,
  getAllTicket,
  increment,
} from "../../../redux/actions/ticketActions";
import {
  decrementFood,
  getAllFood,
  incrementFood,
} from "../../../redux/actions/foodActions";

function UpdateReceipt() {
  const dispatch = useDispatch();
  const receipt = useParams();
  let [vlPriceTicket, setvlPriceTicket] = useState(0);
  let [vlPriceFood, setvlPriceFood] = useState(0);
  const { reservation } = useSelector((state) => state.reservation);
  const { isUpdated } = useSelector((state) => state.editReservation);
  const { tickets } = useSelector((state) => state.tickets);
  const { foods } = useSelector((state) => state.foods);
  const initialValues = {
    author: reservation.author,
    createdAt: reservation.createdAt,
    seats: reservation.seats, // ARRAY
    tickets: reservation.tickets, //ARRAY
    total: reservation.total,
    nameMovie: reservation.nameMovie,
    typeMovie: "2D",
    startTime: reservation.startTime,
    startDate: reservation.startDate,
    foods: reservation.foods,
  };
  const submitForm = async (values) => {
    const newValues = {
      ...values,
      tickets: tickets,
      foods: foods,
      total:
        vlPriceFood === 0 && vlPriceTicket === 0
          ? values.total
          : vlPriceFood + vlPriceTicket,
    };
    dispatch(updateOneReservation(reservation._id, newValues));
    if (isUpdated) {
      toast.success("Cập nhật hóa đơn thành công", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: "text-black",
      });
    }
  };
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    return errors;
  };

  useEffect(() => {
    dispatch(getOneReservation(receipt.id));
    dispatch(getAllTicket());
    dispatch(getAllFood());
  }, []);

  useEffect(() => {
    let totalTicket = 0;
    let totalFood = 0;
    tickets.map(
      (ticket) => (totalTicket = totalTicket + ticket.quantity * ticket.price)
    );
    foods.map((food) => (totalFood = totalFood + food.quantity * food.price));
    setvlPriceTicket(totalTicket);
    setvlPriceFood(totalFood);
  }, [foods, tickets]);

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
          <div>
            <div className="grid grid-cols-10 ">
              <div className="col-span-2 border-r max-h-full border-gray-500 text-[15px]">
                <SideBars />
              </div>
              <div className="col-span-8">
                <NavBars />
                <div className="font-thin">
                  <div className="m-5">
                    <h1 className="font-bold text-[35px] uppercase">
                      Cập nhật hóa đơn
                    </h1>
                  </div>
                  <form className="px-10 py-3" onSubmit={handleSubmit}>
                    <div className="mb-3 ">
                      <label
                        className="text-sm mt-2 font-medium text-black"
                        htmlFor="author"
                      >
                        Mã khách hàng
                      </label>
                      <input
                        type="text"
                        name="author"
                        id="author"
                        value={values.author}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                      />
                    </div>
                    <div className="mb-3 ">
                      <label
                        className="text-sm mt-2 font-medium text-black"
                        htmlFor="createdAt"
                      >
                        Ngày đặt
                      </label>
                      <input
                        type="text"
                        name="createdAt"
                        id="createdAt"
                        value={values.createdAt}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                      />
                    </div>
                    <div className="mb-3 ">
                      <label
                        className="text-sm mt-2 font-medium text-black"
                        htmlFor="nameMovie"
                      >
                        Phim
                      </label>
                      <input
                        type=""
                        name="nameMovie"
                        id="nameMovie"
                        value={values.nameMovie}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                      />
                    </div>
                    <div className="mb-3 ">
                      <label
                        className="text-sm mt-2 font-medium text-black"
                        htmlFor="typeMovie"
                      >
                        Thể loại chiếu
                      </label>
                      <input
                        type="text"
                        name="typeMovie"
                        id="typeMovie"
                        value={values.typeMovie}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-x-3">
                      <div className="mb-3 ">
                        <label
                          className="text-sm mt-2 font-medium text-black"
                          htmlFor="startDate"
                        >
                          Ngày chiếu
                        </label>
                        <input
                          type=""
                          name="startDate"
                          id="startDate"
                          value={values.startDate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                        />
                      </div>
                      <div className="mb-3 ">
                        <label
                          className="text-sm mt-2 font-medium text-black"
                          htmlFor="startTime"
                        >
                          Giờ chiếu
                        </label>
                        <input
                          type="time"
                          name="startTime"
                          id="startTime"
                          value={values.startTime}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="mb-3 ">
                      <label
                        className="text-sm mt-2 font-medium text-black"
                        htmlFor="seats"
                      >
                        Vị trí ghế
                      </label>
                      <input
                        type=""
                        name="seats"
                        id="seats"
                        value={values.seats}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled
                        className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-x-3">
                      <div className="mb-3 text-sm">
                        <label
                          className="text-sm mt-2 font-medium text-black"
                          htmlFor=""
                        >
                          Vé người dùng đã đặt
                        </label>
                        <p className="text-sm my-5 font-thin">
                          {values.tickets === undefined
                            ? []
                            : values.tickets.map(
                                (ticket) =>
                                  ticket.quantity > 0 && (
                                    <li key={ticket._id}>
                                      {ticket.typeTicket} &#40;x
                                      {ticket.quantity}
                                      &#41;&ensp;
                                    </li>
                                  )
                              )}
                        </p>
                        <label
                          className="text-sm mt-2 font-medium text-black"
                          htmlFor="ticket"
                        >
                          Cập nhật vé
                        </label>
                        {tickets.map((ticket, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-3 mt-2 gap-x-3"
                          >
                            <p className="pl-5">- {ticket.typeTicket}</p>
                            <div className="flex col-span-2 justify-start items-center">
                              <p className="mr-5"></p>
                              <p
                                onClick={() => dispatch(decrement(ticket._id))}
                                className="px-2 mx-3 text-sm rounded-full cursor-pointer border border-gray-600"
                              >
                                {" "}
                                -{" "}
                              </p>
                              <p>{ticket.quantity}</p>
                              <p
                                onClick={() => dispatch(increment(ticket._id))}
                                className="px-2 mx-3 text-sm rounded-full cursor-pointer border border-gray-600"
                              >
                                {" "}
                                +{" "}
                              </p>
                              <p className="pl-5">{ticket.price}.000 VNĐ</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mb-3 text-sm">
                        <label
                          className="text-sm mt-2 font-medium text-black"
                          htmlFor=""
                        >
                          Combo người dùng đã đặt
                        </label>
                        <p className="text-sm my-5 font-thin">
                          {values.foods === undefined
                            ? []
                            : values.foods.map(
                                (food) =>
                                  food.quantity > 0 && (
                                    <li key={food._id}>
                                      {food.typeFood} &#40;x
                                      {food.quantity}
                                      &#41;&ensp;
                                    </li>
                                  )
                              )}
                        </p>
                        <label
                          className="text-sm mt-2 font-medium text-black"
                          htmlFor="ticket"
                        >
                          Cập nhật combo
                        </label>
                        {foods.map((food, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-2 mt-2 gap-x-1"
                          >
                            <p className="pl-5">- {food.typeFood}</p>
                            <div className="flex justify-start items-center col-span-1">
                              <p className="mr-3"></p>
                              <p
                                onClick={() =>
                                  dispatch(decrementFood(food._id))
                                }
                                className="px-2 mx-3 text-sm rounded-full cursor-pointer border border-gray-600"
                              >
                                {" "}
                                -{" "}
                              </p>
                              <p>{food.quantity}</p>
                              <p
                                onClick={() =>
                                  dispatch(incrementFood(food._id))
                                }
                                className="px-2 mx-3 text-sm rounded-full cursor-pointer border border-gray-600"
                              >
                                {" "}
                                +{" "}
                              </p>
                              <p className="pl-5">{food.price}.000 VNĐ</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3 grid grid-cols-2 gap-x-5">
                      <div>
                        <label
                          className="text-sm mt-2 font-medium text-black"
                          htmlFor="total"
                        >
                          Tổng hóa đơn
                        </label>
                        <input
                          type="number"
                          name="total"
                          id="total"
                          value={values.total}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                        />
                      </div>
                      <div>
                        <label
                          className="text-sm mt-2 font-medium text-black"
                          htmlFor="subtotal"
                        >
                          Tổng hóa đơn sau điều chỉnh
                        </label>
                        <input
                          type="number"
                          name="subtotal"
                          id="subtotal"
                          value={vlPriceTicket + vlPriceFood}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-5">
                      {vlPriceFood === 0 && vlPriceTicket === 0 ? (
                        <button
                          type="submit"
                          disabled
                          className="bg-[#cf1111] text-[13px] text-white py-2 px-6 rounded-md"
                        >
                          KHỞI TẠO
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="bg-[#cf1111] text-[13px] text-white py-2 px-6 rounded-md"
                        >
                          KHỞI TẠO
                        </button>
                      )}

                      <ToastContainer toastStyle={{ color: "black" }} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default memo(UpdateReceipt);
