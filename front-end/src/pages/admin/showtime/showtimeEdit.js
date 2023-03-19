/* eslint-disable react-hooks/exhaustive-deps */
import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowTimeForm from "./showtimeForm";
import { useEffect, useState, memo } from "react";
import { getAllCinema } from "../../../redux/actions/cinemaActions";
import { getAllMovie } from "../../../redux/actions/movieActions";
import { getOneShowTime, updateOneShowTime } from "../../../redux/actions/showTimeActions";
import { useParams } from "react-router-dom";

function ShowTimeEdit() {
  const dispatch = useDispatch();
  const showTimeId = useParams();
  const {cinemas} = useSelector((state) => state.cinemas);
  const {movies} = useSelector((state) => state.movies);
  const {showtime} = useSelector((state) =>state.showtime);
  const [arrTime, setArrTime] = useState(null);
  const {isUpdated} = useSelector(state => state.editShowtime)
  const initialValues = {
    typeMovie: showtime.typeMovie,
    startDate: showtime.startDate,
    startTime: "",
    screen: "",
    movieId: showtime.movieId,
    cinemaId: showtime.cinemaId,
  };
  const submitForm = async (values) => {
    dispatch(updateOneShowTime(showtime._id, 
      {
        typeMovie: values.typeMovie,
        startTime: arrTime,
        startDate: values.startDate,
      })
    )
    if(isUpdated){
      toast.success("Cập nhật suất chiếu thành công", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: "text-black",
      });
    }
  };
  const handleAddTime = (screen, time) => {
    setArrTime((prev) => [{ nameScreen: screen, time: time }, ...prev]);
  };
  const handleDeleteTime = (id) => {
    setArrTime(arrTime.filter(item => item._id !== id))
  }
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    return errors;
  };
  useEffect(() => {
    dispatch(getAllCinema());
    dispatch(getAllMovie());
    dispatch(getOneShowTime(showTimeId.id));
  }, []);

  useEffect(() => {
    setArrTime(showtime.startTime);
  }, [showtime.startTime]);
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
              <div className="col-span-2 border-r max-h-max border-gray-500 text-[15px]">
                <SideBars />
              </div>
              <div className="col-span-8">
                <NavBars />
                <div>
                  <div className="m-5">
                    <h1 className="font-bold text-[35px] uppercase">
                      Cập nhật suất chiếu
                    </h1>
                  </div>
                  <ShowTimeForm
                    arrTime={arrTime}
                    handleAddTime={handleAddTime}
                    movies={movies}
                    cinemas={cinemas}
                    ToastContainer={ToastContainer}
                    touched={touched}
                    errors={errors}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    handleDeleteTime={handleDeleteTime}
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

export default memo(ShowTimeEdit);
