import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowTimeForm from "./showtimeForm"
import { useEffect, useState } from "react";
import { getAllCinema } from "../../../redux/actions/cinemaActions";
import { getAllMovie } from "../../../redux/actions/movieActions";

function ShowTimeAdd() {
  const dispatch = useDispatch();
  const cinemas = useSelector(state => state.cinemas.cinemas)
  const movies = useSelector(state => state.movies.movies)
  const inputArr = [
    {
      type: "time",
      id: 1,
    }
  ];
  const [arr, setArr] = useState(inputArr);
  const createInput =  () => {
    setArr(s => {
      return [
        ...s,
        {
          type: "time",
        }
      ];
    });
  }
  const initialValues = {
    name: ""
  };
  
  const submitForm = async (values, { resetForm }) => {
    resetForm({
      
    });
    toast.success("Một bộ phim đã được thêm vào mục đang chiếu !", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    if (!values.name) {
      errors.name = "! Vui lòng nhập tên phim";
    } else if (values.name.length > 30) {
      errors.name = "! Tên phim không vượt quá 30 ký tự";
    }
    return errors;
  };
  useEffect(() => {
    dispatch(getAllCinema());
    dispatch(getAllMovie())
  },[dispatch])

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
                  <ShowTimeForm movies={movies} cinemas={cinemas} arr={arr} createInput={createInput} ToastContainer={ToastContainer} touched={touched} errors={errors} handleSubmit={handleSubmit} handleChange={handleChange} handleBlur={handleBlur} values = {values}/>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default ShowTimeAdd;
