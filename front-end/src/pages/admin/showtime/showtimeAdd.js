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
import { createShowTime } from "../../../redux/actions/showTimeActions";

function ShowTimeAdd() {
  const dispatch = useDispatch();
  const cinemas = useSelector((state) => state.cinemas.cinemas);
  const movies = useSelector((state) => state.movies.movies);
  const [arrTime, setArrTime] = useState([]);

  const initialValues = {
    typeMovie: "",
    startTime: "",
    screen: "",
    startDate: "",
    movieId: "",
    cinemaId: "",
  };
  const submitForm = async (values, { resetForm }) => {
    const newValues = {
      typeMovie: values.typeMovie,
      startTime: arrTime,
      startDate: values.startDate,
    };
    await dispatch(createShowTime(values.cinemaId, values.movieId, newValues));
    resetForm({
      typeMovie: "",
      startTime: "",
      screen: "",
      startDate: "",
      movieId: "",
      cinemaId: "",
    });
    setArrTime([])
    toast.success("Đã thêm một suất chiếu thành công !", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  const handleAddTime = (screen, time) => {
    setArrTime((prev) => [{ nameScreen: screen, time: time }, ...prev]);
  };
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    return errors;
  };
  useEffect(() => {
    dispatch(getAllCinema());
    dispatch(getAllMovie());
  }, [dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
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
                      Thêm suất chiếu mới
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

export default memo(ShowTimeAdd);
