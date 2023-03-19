/* eslint-disable react-hooks/exhaustive-deps */
import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, memo} from "react";
import CinemaForm from "./cinemaForm";
import {
  getOneCinema, updateOneCinema,
} from "../../../redux/actions/cinemaActions";
import { useParams } from "react-router-dom";

function CinemaEdit() {
  const dispatch = useDispatch();
  const cinemaId = useParams();
  const {cinema} = useSelector((state) => state.cinema);
  const {isUpdated} = useSelector((state) => state.editCinema)
  const initialValues = {
    name: cinema.name,
    area: cinema.area,
    address: cinema.address,
  };
  const submitForm = async (values) => {
      dispatch(updateOneCinema(cinema._id, values))
      if(isUpdated){
        toast.success("Cập nhật rạp chiếu thành công", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: "text-black",
      })}
  }
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    return errors;
  };

  useEffect(() => {
    dispatch(getOneCinema(cinemaId.id));
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
          errors,
          touched,
          handleBlur,
        } = formik;
        return (
          <div>
            <div className="grid grid-cols-10">
              <div className="col-span-2 border-r h-screen border-gray-500 text-[15px]">
                <SideBars />
              </div>
              <div className="col-span-8">
                <NavBars />
                <div>
                  <div className="m-5">
                    <h1 className="font-bold text-[35px] uppercase">
                      Thêm suất chiếu mới
                    </h1>
                  </div>
                  <CinemaForm
                    ToastContainer={ToastContainer}
                    touched={touched}
                    errors={errors}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default memo(CinemaEdit);
