import { Formik } from "formik";

function CreateEvent({initialValues, ToastContainer, validate, submitForm}) {

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const { values, handleChange, handleSubmit, handleBlur } = formik;
        return (
          <form
            className="px-10 py-3  shadow-lg rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-3 ">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="name"
              >
                Tên sự kiện
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="mb-3 ">
                <label
                  className="text-sm mt-2 font-medium text-black"
                  htmlFor="startDate"
                >
                  Ngày bắt đầu
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
              <div className="mb-3 ">
                <label
                  className="text-sm mt-2 font-medium text-black"
                  htmlFor="endDate"
                >
                  Ngày kết thúc
                </label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={values.endDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="mb-3 ">
                <label
                  className="text-sm mt-2 font-medium text-black"
                  htmlFor="startTime"
                >
                  Giờ bắt đầu
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
              <div className="mb-3 ">
                <label
                  className="text-sm mt-2 font-medium text-black"
                  htmlFor="endTime"
                >
                  Giờ kết thúc
                </label>
                <input
                  type="time"
                  name="endTime"
                  id="endTime"
                  value={values.endTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end mt-5">
              <button
                type="submit"
                className="bg-[#cf1111] text-[13px] text-white py-2 px-6 rounded-md"
              >
                Thêm sự kiện
              </button>
              <ToastContainer toastStyle={{ color: "black" }} />
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default CreateEvent;
