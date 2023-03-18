/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from "formik";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { forgotPassword, clearErrors} from "../../../redux/actions/authActions";

function ForgetForm({ setIsActive, isActive, setEmail, setSize }) {
  const dispatch = useDispatch();
  const [stateError, setStateError] = useState("");
  const initialValues = {
    email: "",
  };

  const {errorChangePw, code } = useSelector((state) => state.user);
  const submitForm = async (values) => {
    await dispatch(forgotPassword(values));
    if(code){
      setEmail(values.email);
      setIsActive(!isActive);
    }
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // email
    if (!regex.test(values.email)) {
      errors.email = "! Email chưa chính xác";
    } else if (values.email.length > 30) {
      errors.email = "! Email không vượt quá 30 ký tự";
    }
    return errors;
  };
  useEffect(() => {
    if (errorChangePw) {
      setStateError(errorChangePw);
      dispatch(clearErrors(errorChangePw));
    }
  }, [dispatch, errorChangePw]);

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
          <form 
          data-aos="fade-right"
          data-aos-duration="600"
          className="px-0 md:px-5 lg:px-10 py-3 col-span-2" onSubmit={handleSubmit}>
            <h1 className="text-[17px] font-medium mb-3">QUÊN MẬT KHẨU</h1>
            <p className="pt-1 text-center text-sm font-medium text-[#e01414]">
              {stateError}
            </p>
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
                placeholder="Nhập email"
                className="block w-full text-black px-4 rounded-lg py-2 text-sm  border border-gray-400 bg-transparent focus:border-gray-400 focus:ring-gray-700  focus:outline-none"
              />
              {errors.email && touched.email && (
                <span className="text-red-500 text-[14px]">{errors.email}</span>
              )}
            </div>
            <div className="flex items-end flex-col">
              <p className="py-1 text-center font-medium text-gray-800 text-[11px]">
                Mã xác nhận sẽ được gửi qua email của bạn
              </p>
              <div className="flex">
              <p
                onClick={() => {
                  setSize(null);
                }}
                className="font-medium text-sm cursor-pointer text-black px-5 py-2"
              >
                Hủy
              </p>
                <button
                type="submit"
                className="bg-[#114ecf] text-sm text-white py-2 px-6 rounded-md"
              >
                Nhận code
              </button>

              </div>
              
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default ForgetForm;
