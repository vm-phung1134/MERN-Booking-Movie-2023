/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { memo } from "react";
import { sendFeedBack } from "../../../redux/actions/feedBackActions";
import { useDispatch, useSelector } from "react-redux";

function SendFeedback() {
  const dispatch = useDispatch();
  const { feedBack } = useSelector((state) => state.feedBack);
  console.log(feedBack);
  const initialValues = {
    email: "",
    subtitle: "",
    content: "",
  };
  const submitForm = async (values, { resetForm }) => {
    dispatch(sendFeedBack(values));
    toast.success("Đã gửi phản hồi qua Email!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
    resetForm();
  };
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    return errors;
  };
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
          //   errors,
          //   touched,
          handleBlur,
        } = formik;
        return (
          <form
            className="py-3 mt-5 px-5 shadow-xl rounded-lg w-[50%]"
            onSubmit={handleSubmit}
          >
            <div className="mb-3 ">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
            </div>
            <div className="mb-3 ">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="subtitle"
              >
                Tiêu đề
              </label>
              <input
                type="text"
                name="subtitle"
                id="subtitle"
                value={values.subtitle}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
            </div>
            <div className="mb-3 ">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="content"
              >
                Nội dung
              </label>
              <textarea
                type="text"
                name="content"
                id="content"
                row="50"
                value={values.content}
                onChange={handleChange}
                onBlur={handleBlur}
                alt=""
                className="block w-full text-black px-4 py-1 text-sm  border border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
            </div>
            <div className="flex justify-end mt-5">
              <button
                type="submit"
                className="bg-[#cf1111] text-[13px] text-white py-2 px-6 rounded-md"
              >
                Gửi Email
              </button>
              <ToastContainer toastStyle={{ color: "black" }} />
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default memo(SendFeedback);
