import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createMovie } from "../../../redux/actions/movieActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MovieNowAdd() {
  const dispatch = useDispatch();
  const { movie, isCreated } = useSelector((state) => state.movie);
  console.log(movie)
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
    if (isCreated === true) {
      toast.success("Một bộ phim đã được thêm vào mục đang chiếu !", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: "text-black",
      });
    }
  };
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    if (!values.name) {
      errors.name = "! Vui lòng nhập tên";
    } else if (values.name.length < 6) {
      errors.name = "! Tên người tối thiếu phải có 6 ký tự";
    } else if (values.name.length > 30) {
      errors.name = "! Name không vượt quá 30 ký tự";
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
                        className="md:mx-6 mx-0 lg:mx-0 xl:mx-6 mt-10 lg:mt-0 h-[100%] lg:h-[70%] bg-cover bg-center"
                        style={{ backgroundImage: `url("${values.poster}")` }}
                      >
                        <div className="bg-gradient-to-r from-black/100 to-black/40  text-white text-sm w-full h-full">
                          <div className="px-5 py-10">
                            <div>
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
                    <div className="col-span-6">
                      <form className="" onSubmit={handleSubmit}>
                        <div className="mb-2">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Tên phim"
                            className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.name && touched.name && (
                            <span className="text-red-500 text-[13px]">
                              {errors.name}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            name="namevn"
                            id="namevn"
                            value={values.namevn}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Tên việt hóa"
                            className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.name && touched.name && (
                            <span className="text-red-500 text-[13px]">
                              {errors.name}
                            </span>
                          )}
                        </div>
                        <div className="mb-2 grid grid-cols-3 gap-3">
                          <div>
                            <div>
                              <input
                                type="number"
                                name="year"
                                id="year"
                                value={values.year}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Năm sản xuất"
                                className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
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
                              <input
                                type="number"
                                name="limitAge"
                                id="limitAge"
                                placeholder="Độ tuổi giới hạn"
                                value={values.limitAge}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="placeholder:text-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black focus:outline-none"
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
                              <input
                                type="number"
                                name="duration"
                                id="duration"
                                value={values.duration}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Thời lượng"
                                className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
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
                          <input
                            type="text"
                            name="country"
                            id="country"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Quốc gia"
                            className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.country && touched.country && (
                            <span className="text-red-500 text-[13px]">
                              {errors.country}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            name="type"
                            id="type"
                            value={values.type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Thể loại"
                            className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.type && touched.type && (
                            <span className="text-red-500 text-[13px]">
                              {errors.type}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                          <input
                            type="date"
                            name="released"
                            id="released"
                            value={values.released}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.released && touched.released && (
                            <span className="text-red-500 text-[13px]">
                              {errors.released}
                            </span>
                          )}
                        </div>

                        <div className="mb-2">
                          <input
                            type="text"
                            name="poster"
                            id="poster"
                            value={values.poster}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Poster"
                            className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.poster && touched.poster && (
                            <span className="text-red-500 text-[13px]">
                              {errors.poster}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                          <input
                            type=""
                            name="image"
                            id="image"
                            value={values.image}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Hình ảnh"
                            className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.image && touched.image && (
                            <span className="text-red-500 text-[13px]">
                              {errors.image}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                          <input
                            type=""
                            name="bg"
                            id="bg"
                            value={values.bg}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="BackGround"
                            className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.bg && touched.bg && (
                            <span className="text-red-500 text-[13px]">
                              {errors.bg}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                          <input
                            className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
                            type=""
                            name="director"
                            id="director"
                            placeholder="Đạo diễn"
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
                          <input
                            type=""
                            name="actors"
                            id="actors"
                            placeholder="Diễn viên"
                            value={values.actors}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="placeholder:text-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black focus:outline-none"
                          />
                          {errors.actors && touched.actors && (
                            <span className="text-red-500 text-[13px]">
                              {errors.actors}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                          <input
                            type=""
                            name="discription"
                            id="discription"
                            value={values.discription}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Nội dung phim"
                            className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.discription && touched.discription && (
                            <span className="text-red-500 text-[13px]">
                              {errors.discription}
                            </span>
                          )}
                        </div>
                        <div className="mb-2">
                          <input
                            type=""
                            name="trailer"
                            id="trailer"
                            value={values.trailer}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Trailer"
                            className="placeholder-gray-500 block w-full px-4 py-2 text-sm mt-2 text-black border border-gray-500 rounded-md focus:border-black focus:ring-black  focus:outline-none"
                          />
                          {errors.trailer && touched.trailer && (
                            <span className="text-red-500 text-[13px]">
                              {errors.trailer}
                            </span>
                          )}
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="bg-[#cf1111] text-sm text-white py-2 px-3 rounded-md"
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
