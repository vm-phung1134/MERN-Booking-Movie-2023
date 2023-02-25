import { Select, Option } from "@material-tailwind/react";

function ShowTimeForm({
  values,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  ToastContainer,
  errors,
  createInput,
  arr,
  cinemas,
  movies
}) {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 px-10 py-3 mb-5">
        <Select variant="standard" label="Chọn Rạp">
            {
                cinemas.map((cinema) => (
                    <Option  className="text-black">{cinema.name}</Option>
                ))
            }
          
        </Select>
        <Select variant="standard" color="black" label="Chọn Phim">
            {
                movies.map((movie) => (
                    <Option className="text-black">{movie.name}</Option>
                ))
            }
          
        </Select>
      </div>
      <form className="px-10 py-3" onSubmit={handleSubmit}>
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
        <div className="mb-2">
          <label
            className="text-sm mt-2 font-medium text-black"
            htmlFor="startTime"
          >
            Chọn giờ chiếu
          </label>
          {arr.map((item, i) => {
            return (
              <input
                type={item.type}
                name="startTime"
                id={i}
                value={values.startTime}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
            );
          })}
          <button
            onClick={createInput}
            className="py-1 px-2 text-[12px] my-3 bg-black text-white"
          >
            Thêm giờ chiếu
          </button>
        </div>
        <div className="mb-2">
          <label
            className="text-sm mt-2 font-medium text-black"
            htmlFor="typeMovie"
          >
            Chọn thể chiếu loại phim
          </label>
          <input
            type="text"
            name="typeMovie"
            id="typeMovie"
            value={values.typeMovie}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
          />
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

export default ShowTimeForm;
