import { memo } from "react";

function ShowTimeForm({
  values,
  touched,
  handleAddTime,
  arrTime,
  handleBlur,
  handleChange,
  handleDeleteTime,
  handleSubmit,
  ToastContainer,
  errors,
  cinemas,
  movies,
}) {
  return (
    <>
      <form className="px-10 py-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3 mb-5">
          <select
            id="cinemaId"
            name="cinemaId"
            value={values.cinemaId}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="form-select appearance-none
                            block
                            w-full
                            px-4
                            py-2.5
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
              Chọn rạp chiếu
            </option>
            {cinemas.map((cinema) => (
              <option value={cinema._id} className="text-black">
                {cinema.name}
              </option>
            ))}
          </select>
          <select
            id="movieId"
            name="movieId"
            value={values.movieId}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="form-select appearance-none
                            block
                            w-full
                            px-4
                            py-2.5
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
              <option value={movie._id} className="text-black">
                {movie.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2 ">
          <label
            className="text-sm mt-2 font-medium text-black"
            htmlFor="startDate"
          >
            Chọn ngày chiếu
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={values.startDate}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
          />
        </div>
        <div className="mb-2 ">
          <label
            className="text-sm mt-2 font-medium text-black"
            htmlFor="nameScreen"
          >
            Phòng chiếu phim
          </label>
          <select
            id="screen"
            name="screen"
            value={values.screen}
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
              Chọn phòng chiếu
            </option>
            <option value="Phòng chiếu 1">Phòng 1</option>
            <option value="Phòng chiếu 2">Phòng 2</option>
          </select>
        </div>

        <div className="mb-2">
          <label
            className="text-sm mt-2 font-medium text-black"
            htmlFor="startTime"
          >
            Chọn giờ chiếu
          </label>
          <input
            type="time"
            name="startTime"
            id="time"
            value={values.startTime}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
          />
          <div className="text-sm mt-5 font-medium">
            Suất chiếu đã thêm
            {arrTime && arrTime.map((time) => (
              <>
                <p className="font-normal" disabled>
                  - {time.nameScreen} - {time.time} &emsp;
                  <span onClick={() => handleDeleteTime(time._id)} className="font-medium text-lg cursor-pointer"><i className="fas fa-xmark"></i></span>
                </p> 
              </>
            ))}
          </div>
          {values.screen !== "" ? (
            <button
              type="button"
              onClick={() => handleAddTime(values.screen, values.startTime)}
              className="py-1 px-2 text-[12px] my-3 bg-black text-white"
            >
              Thêm giờ chiếu
            </button>
          ) : (
            <button
              type="button"
              disabled
              onClick={() => handleAddTime(values.screen, values.startTime)}
              className="py-1 px-2 text-[12px] my-3 bg-black text-white"
            >
              Thêm giờ chiếu
            </button>
          )}
          <p className="text-[12px] text-red-600">
            ! Hãy chọn phòng chiếu trước khi thêm giờ chiếu
          </p>
        </div>
        <div className="mb-2">
          <label
            className="text-sm mt-2 font-medium text-black"
            htmlFor="typeMovie"
          >
            Thể loại phim
          </label>
          <select
            id="typeMovie"
            name="typeMovie"
            value={values.typeMovie}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="form-select appearance-none
                            block
                            w-full
                            px-4
                            py-2.5
                            text-sm 
                            mt-3

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
              Chọn thể loại chiếu
            </option>
            <option value="2d - Subtitle">2d - Phụ đề</option>
            <option value="2d">2d - Lồng tiếng</option>
            <option value="3d - Subtitle">3d - Phụ đề</option>
            <option value="3d">3d - Lồng tiếng</option>
          </select>
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
    </>
  );
}

export default memo(ShowTimeForm);
