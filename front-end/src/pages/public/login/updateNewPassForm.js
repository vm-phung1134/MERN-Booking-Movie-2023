/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateNewPasswordUser } from "../../../redux/actions/authActions";

function UpdateNewPassForm({
  codeConfirm,
  email,
  setCodeConfirm,
  isActive,
  setIsActive,
}) {
  const dispatch = useDispatch();
  const initialValues = {
    email: email,
    password: "",
    confirmPassword: "",
    code: "",
  };
  const submitForm = async (values, { resetForm }) => {
    dispatch(updateNewPasswordUser(email, values.password));
    resetForm({ password: "", confirmPassword: "", code: "" });
    toast.success("Cập nhật mật khẩu mới thành công!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  const validate = (values) => {
    let errors = {};
    if (!values.password) {
      errors.password = "! Vui lòng nhập mật khẩu";
    } else if (values.password.length < 6) {
      errors.password = "! Mật khẩu quá ngắn";
    } else if (values.password.length > 30) {
      errors.password = "! Mật khẩu không vượt quá 30 ký tự";
    }
    // confirm password
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "! Mật khẩu không khớp với mật khẩu vừa nhập";
    }
    if (!values.code) {
      errors.code = "! Bạn chưa nhập mã xác thực";
    }
    if (values.code !== codeConfirm.code) {
      errors.code = "! Mã xác thực không đúng";
    }
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
          errors,
          touched,
          handleBlur,
        } = formik;
        return (
          <form
            data-aos="fade-left"
            data-aos-duration="700"
            className="px-0 md:px-2 lg:px-10 py-3 col-span-2"
            onSubmit={handleSubmit}
          >
            <h1 className="text-[17px] font-medium mb-3">QUÊN MẬT KHẨU</h1>
            <div className="mb-3">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="password"
              >
                Nhập mật khẩu mới
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Mật khẩu mới"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 rounded-lg py-2 text-sm  border border-gray-400 bg-transparent focus:border-gray-400 focus:ring-gray-700  focus:outline-none"
              />
              {errors.password && touched.password && (
                <span className="text-red-500 text-[13px]">
                  {errors.password}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="confirmPassword"
              >
                Nhập lại mật khẩu
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 rounded-lg py-2 text-sm  border border-gray-400 bg-transparent focus:border-gray-400 focus:ring-gray-700  focus:outline-none"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <span className="text-red-500 text-[13px]">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="code"
              >
                Mã xác thực
              </label>
              <input
                type="number"
                name="code"
                id="code"
                value={values.code}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-[50%] lg:w-[40%] text-black px-4 rounded-lg py-2 text-sm  border border-gray-400 bg-transparent focus:border-gray-400 focus:ring-gray-700  focus:outline-none"
              />
              {errors.code && touched.code && (
                <span className="text-red-500 text-[13px]">{errors.code}</span>
              )}
            </div>
            <div className="flex justify-end">
              <p
                onClick={() => {
                  setIsActive(!isActive) && setCodeConfirm("");
                }}
                className="font-medium text-sm cursor-pointer text-black px-4 py-2"
              >
                Quay lại
              </p>
              <button
                type="submit"
                className="bg-[#114ecf] text-sm text-white py-2 px-6 rounded-md"
              >
                Cập nhật
              </button>
            </div>
            <ToastContainer toastStyle={{ color: "black" }} />
          </form>
        );
      }}
    </Formik>
  );
}

export default UpdateNewPassForm;
