import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { createMovie } from "../../../redux/actions/movieActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MovieNowAdd() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    namevn: "",
    year: 2022,
    country: "",
    type: "",
    released: "",
    duration: 100,
    poster: "",
    image: "",
    bg: "",
    director: "",
    limitAge: 13,
    actors: [],
    discription: "",
    trailer: "",
  };
  const submitForm = async (values, { resetForm }) => {
    await dispatch(createMovie(values));
    resetForm({
      name: "",
      namevn: "",
      year: 2022,
      country: "",
      type: "",
      released: "",
      duration: 100,
      poster: "",
      image: "",
      bg: "",
      director: "",
      limitAge: 13,
      actors: "",
      discription: "",
      trailer: "",
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
    if (!values.namevn) {
      errors.namevn = "! Vui lòng nhập tên việt hóa";
    } else if (values.namevn.length > 30) {
      errors.namevn = "! Tên phim không vượt quá 30 ký tự";
    }
    if (!values.country) {
      errors.country = "! Vui lòng nhập quốc gia sản xuất";
    } else if (values.country.length > 30) {
      errors.country = "! Tên quốc gia không vượt quá 30 ký tự";
    }
    if (!values.type) {
      errors.type = "! Vui lòng nhập thể loại phim";
    } else if (values.type.length > 30) {
      errors.type = "! Tên thể loại không vượt quá 30 ký tự";
    }
    if (!values.released) {
      errors.released = "! Vui lòng chọn ngày khởi chiếu";
    } else if (values.released.length > 12) {
      errors.released = "! Không phải định dạng ngày";
    }
    if (!values.director) {
      errors.director = "! Vui lòng nhập tên đạo diễn";
    } else if (values.director > 30) {
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
                      Thêm phim đang chiếu
                    </h1>
                  </div>
                  <div className="grid-cols-10 grid m-5">
                    <div className="col-span-4">
                      <div
                        className="md:mx-6 mx-0 lg:mx-0 xl:mx-6 mt-10 lg:mt-0 h-[100%] lg:h-[80%] bg-cover bg-center"
                        style={{ backgroundImage: `url("${values.poster}")` }}
                      >
                        <div className="bg-gradient-to-r from-black/100 to-black/40  text-black text-sm w-full h-full">
                          <div className="px-5 py-10">
                            <div className="text-white">
                              <p className="py-1 mt-2">
                                <span className="text-gray-400">Tên phim:</span>{" "}
                                {values.name}
                              </p>
                              <p className="py-1 mt-2">
                                <span className="text-gray-400">
                                  Tên việt hóa:
                                </span>{" "}
                                {values.namevn}
                              </p>
                              <p className="py-1 mt-2">
                                <span className="text-gray-400">
                                  Năm sản xuất:
                                </span>{" "}
                                {values.year}
                              </p>
                              <p className="py-1 mt-2">
                                <span className="text-gray-400">Quốc gia:</span>
                                {values.country}
                              </p>
                              <p className="py-1 mt-2">
                                <span className="text-gray-400">
                                  Thể loại:{" "}
                                </span>
                                {values.type}
                              </p>
                              <p className="py-1 mt-2">
                                <span className="text-gray-400">
                                  Ngày khởi chiếu:{" "}
                                </span>
                                {values.released}
                              </p>
                              <p className="py-1">
                                <span className="text-gray-400">
                                  Thời lượng:{" "}
                                </span>
                                {values.duration}
                              </p>
                              <p className="py-1">
                                <span className="text-gray-400">
                                  Đạo diễn:{" "}
                                </span>
                                {values.director}
                              </p>
                              <p className="py-1">
                                <span className="text-gray-400">
                                  Độ tuổi giới hạn:{" "}
                                </span>
                                {values.limitAge}
                              </p>
                              <p className="py-1">
                                <span className="text-gray-400">
                                  Đạo diễn:{" "}
                                </span>
                                {values.director}
                              </p>
                              <p className="py-1">
                                <span className="text-gray-400">
                                  Diễn viên:{" "}
                                </span>
                                {values.actors}
                              </p>
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 shadow-2xl py-5 px-8">
                      <form className="" onSubmit={handleSubmit}>
                        <div className="mb-2">
                          <label
                            className="text-sm mt-2 text-black"
                            htmlFor="name"
                          >
                            Tên phim
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.name && touched.name && (
                            <span className="text-red-500 text-[13px]">
                              {errors.name}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                        <label
                            className="text-sm mt-2 text-black"
                            htmlFor="namevn"
                          >
                            Tên phim việt hóa
                          </label>
                          <input
                            type="text"
                            name="namevn"
                            id="namevn"
                            value={values.namevn}
                            onChange={handleChange}
                            onBlur={handleBlur}
        
                            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.namevn && touched.namevn && (
                            <span className="text-red-500 text-[13px]">
                              {errors.namevn}
                            </span>
                          )}
                        </div>
                        <div className="mb-2 grid grid-cols-3 gap-3">
                          <div>
                            <div>
                            <label
                            className="text-sm mt-2 text-black"
                            htmlFor="year"
                          >
                            Năm sản xuất
                          </label>
                              <input
                                type="number"
                                name="year"
                                id="year"
                                value={values.year}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                              />
                              {errors.year && touched.year && (
                                <span className="text-red-500 text-[13px]">
                                  {errors.year}
                                </span>
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2">
                            <label
                            className="text-sm mt-2 text-black"
                            htmlFor="limitAge"
                          >
                            Độ tuổi giới hạn
                          </label>
                              <input
                                type="number"
                                name="limitAge"
                                id="limitAge"
                                value={values.limitAge}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                              />
                              {errors.limitAge && touched.limitAge && (
                                <span className="text-red-500 text-[13px]">
                                  {errors.limitAge}
                                </span>
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2">
                            <label
                            className="text-sm mt-2 text-black"
                            htmlFor="duration"
                          >
                            Thời lượng phim
                          </label>
                              <input
                                type="number"
                                name="duration"
                                id="duration"
                                value={values.duration}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                              />
                              {errors.duration && touched.duration && (
                                <span className="text-red-500 text-[13px]">
                                  {errors.duration}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="mb-2">
                        <label
                            className="text-sm mt-2 text-black"
                            htmlFor="country"
                          >
                            Quốc gia
                          </label>
                          <input
                            type="text"
                            name="country"
                            id="country"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.country && touched.country && (
                            <span className="text-red-500 text-[13px]">
                              {errors.country}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                        <label
                            className="text-sm mt-2 text-black"
                            htmlFor="type"
                          >
                            Thể loại
                          </label>
                          <input
                            type="text"
                            name="type"
                            id="type"
                            value={values.type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.type && touched.type && (
                            <span className="text-red-500 text-[13px]">
                              {errors.type}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                        <label
                            className="text-sm mt-2 text-black"
                            htmlFor="released"
                          >
                            Thời gian khởi chiếu
                          </label>
                          <input
                            type="date"
                            name="released"
                            id="released"
                            value={values.released}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.released && touched.released && (
                            <span className="text-red-500 text-[13px]">
                              {errors.released}
                            </span>
                          )}
                        </div>

                        <div className="mb-2">
                        <label
                            className="text-sm mt-2 text-black"
                            htmlFor="poster"
                          >
                            Poster
                          </label>
                          <input
                            type="text"
                            name="poster"
                            id="poster"
                            value={values.poster}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.poster && touched.poster && (
                            <span className="text-red-500 text-[13px]">
                              {errors.poster}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                        <label
                            className="text-sm mt-2 text-black"
                            htmlFor="image"
                          >
                            Hình ảnh
                          </label>
                          <input
                            type=""
                            name="image"
                            id="image"
                            value={values.image}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.image && touched.image && (
                            <span className="text-red-500 text-[13px]">
                              {errors.image}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                        <label
                            className="text-sm mt-2 text-black"
                            htmlFor="bg"
                          >
                            Ảnh nền
                          </label>
                          <input
                            type=""
                            name="bg"
                            id="bg"
                            value={values.bg}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.bg && touched.bg && (
                            <span className="text-red-500 text-[13px]">
                              {errors.bg}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                        <label
                            className="text-sm mt-2 text-black"
                            htmlFor="director"
                          >
                            Đạo diễn
                          </label>
                          <input
                            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                            type=""
                            name="director"
                            id="director"
                            value={values.director}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.director && touched.director && (
                            <span className="text-red-500 text-[13px]">
                              {errors.director}
                            </span>
                          )}
                        </div>

                        <div className="mb-2">
                        <label
                            className="text-sm mt-2 text-black"
                            htmlFor="actors"
                          >
                            Diễn viên
                          </label>
                          <input
                            type=""
                            name="actors"
                            id="actors"
                            value={values.actors}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.actors && touched.actors && (
                            <span className="text-red-500 text-[13px]">
                              {errors.actors}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                        <label
                            className="text-sm mt-2 text-black"
                            htmlFor="discription"
                          >
                            Nội dung phim
                          </label>
                          <input
                            type=""
                            name="discription"
                            id="discription"
                            value={values.discription}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.discription && touched.discription && (
                            <span className="text-red-500 text-[13px]">
                              {errors.discription}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                        <label
                            className="text-sm mt-2 text-black"
                            htmlFor="trailer"
                          >
                            Trailer
                          </label>
                          <input
                            type=""
                            name="trailer"
                            id="trailer"
                            value={values.trailer}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.trailer && touched.trailer && (
                            <span className="text-red-500 text-[13px]">
                              {errors.trailer}
                            </span>
                          )}
                        </div>
                        <div className="flex justify-end mt-5">
                          <button
                            type="submit"
                            className="bg-[#cf1111] text-[13px] text-white py-2 px-6 rounded-md"
                          >
                            KHỞI TẠO
                          </button>
                          <ToastContainer toastStyle={{ color: "black" }} />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default MovieNowAdd;
