/* eslint-disable react-hooks/exhaustive-deps */
import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import MovieForm from "./movieForm";
import { updateOneMovieSoon, getOneMovieSoon } from "../../../redux/actions/movieSoonActions";

function MovieSoonUpdate() {
  const dispatch = useDispatch();
  const movieSoonId = useParams();
  const id = movieSoonId.id;
  const {movieSoon} = useSelector((state) => state.movieSoon);
  const {isUpdated} = useSelector((state) => state.editMovieSoon)
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    if (!values.name) {
      errors.name = "! Vui lòng nhập tên phim";
    } else if (values.name.length > 50) {
      errors.name = "! Tên phim không vượt quá 50 ký tự";
    }
    if (!values.namevn) {
      errors.namevn = "! Vui lòng nhập tên việt hóa";
    } else if (values.namevn.length > 50) {
      errors.namevn = "! Tên phim không vượt quá 50 ký tự";
    }
    if (!values.country) {
      errors.country = "! Vui lòng nhập quốc gia sản xuất";
    } else if (values.country.length > 50) {
      errors.country = "! Tên quốc gia không vượt quá 50 ký tự";
    }
    if (!values.type) {
      errors.type = "! Vui lòng nhập thể loại phim";
    } else if (values.type.length > 50) {
      errors.type = "! Tên thể loại không vượt quá 50 ký tự";
    }
    if (!values.released) {
      errors.released = "! Vui lòng chọn ngày khởi chiếu";
    } else if (values.released.length > 12) {
      errors.released = "! Không phải định dạng ngày";
    }
    if (!values.director) {
      errors.director = "! Vui lòng nhập tên đạo diễn";
    } else if (values.director > 50) {
      errors.director = "! Vui lòng nhập tên khác";
    }
    if (!values.poster) {
      errors.poster = "! Vui lòng nhập đường dẫn poster";
    }
    if (!values.image) {
      errors.image = "! Vui lòng nhập đường dẫn hình ảnh phim";
    }
    if (!values.bg) {
      errors.bg = "! Vui lòng nhập đường dẫn ảnh nền";
    }
    if (!values.discription) {
      errors.discription = "! Vui lòng nhập nội dung phim";
    } else if (values.discription > 1000) {
      errors.discription = "! Nội dung phim không vượt quá 1000 ký tự";
    }
    if (!values.trailer) {
      errors.trailer = "! Vui lòng nhập mã nhúng trailer";
    }
    return errors;
  };

  const submitForm = async (values) => {
    dispatch(updateOneMovieSoon(movieSoon._id, values))
    if(isUpdated){
      toast.success("Một bộ phim đã được cập nhật vào mục sắp chiếu !", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    })}
  };
  const initialValues = {
    name: movieSoon.name,
    namevn: movieSoon.namevn,
    year: movieSoon.year,
    country: movieSoon.country,
    type: movieSoon.type,
    released: movieSoon.released,
    duration: movieSoon.duration,
    poster: movieSoon.poster,
    image: movieSoon.image,
    bg: movieSoon.bg,
    director: movieSoon.director,
    limitAge: movieSoon.limitAge,
    actors: movieSoon.actors,
    discription: movieSoon.discription,
    trailer: movieSoon.trailer,
  };
  useEffect(() => {
    dispatch(getOneMovieSoon(id));
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
              <div className="col-span-2 border-r max-h-max border-gray-500 text-[15px]">
                <SideBars />
              </div>
              <div className="col-span-8">
                <NavBars />
                <div>
                  <div className="m-5">
                    <h1 className="font-bold text-[35px] uppercase">
                      Cập nhật phim sắp chiếu
                    </h1>
                  </div>
                  <MovieForm ToastContainer={ToastContainer} touched={touched} errors={errors} handleSubmit={handleSubmit} handleChange={handleChange} handleBlur={handleBlur} values = {values}/>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default memo(MovieSoonUpdate);
