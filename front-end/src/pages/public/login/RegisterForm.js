import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, memo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authRegister } from "../../../redux/actions/authActions";

function RegisterForm() {
  const [stateLoadingRegister, setStateLoadingRegister] = useState({
    loading: false,
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    cardId: "",
    position: "",
    passwordConfirm: "",
  };
  const dispatch = useDispatch();
  const [stateErr, setStateErr] = useState("");
  const [stateSuccess, setStateSuccess] = useState("");
  const submitForm = (values, { resetForm }) => {
    setStateLoadingRegister({ loading: true });
    let timeOutRegister = setTimeout(async () => {
      await setStateLoadingRegister({ loading: false });
      dispatch(
        authRegister(
          values.name,
          values.email,
          values.password,
          values.phone,
          values.cardId,
          values.gender,
          values.position
        )
      );
      resetForm({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
      return () => {
        clearTimeout(timeOutRegister);
      };
    }, 2000);
  };
  const { user, error, isRegister } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      setStateErr(error);
      setStateSuccess("");
    }
    if (isRegister === true) {
      toast.success("Đăng ký thành công !", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: "text-black",
      });
      setStateErr("");
    }
  }, [dispatch, error, isRegister, stateErr, stateSuccess, user]);
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // tên người dùng
    if (!values.name) {
      errors.name = "! Vui lòng nhập tên";
    } else if (values.name.length < 6) {
      errors.name = "! Tên người tối thiếu phải có 6 ký tự";
    } else if (values.name.length > 30) {
      errors.name = "! Name không vượt quá 30 ký tự";
    }
    // email
    if (!values.email) {
      errors.email = "! Vui lòng nhập Email";
    } else if (!regex.test(values.email)) {
      errors.email = "! Email chưa chính xác";
    } else if (values.email.length > 30) {
      errors.email = "! Email không vượt quá 30 ký tự";
    }
    // password
    if (!values.password) {
      errors.password = "! Vui lòng nhập mật khẩu";
    } else if (values.password.length < 6) {
      errors.password = "! Mật khẩu quá ngắn";
    } else if (values.password.length > 30) {
      errors.password = "! Mật khẩu không vượt quá 30 ký tự";
    }
    // confirm password
    if (values.passwordConfirm !== values.password) {
      errors.passwordConfirm = "! Mật khẩu không khớp với mật khẩu vừa nhập";
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
          <div
            id="register"
            className="relative mb-10 flex flex-col justify-center min-h-screen overflow-hidden"
          >
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-center pt-10 px-10 sm:block lg:hidden"
            >
              <h1 className="text-[25px] font-medium">
                ĐĂNG KÝ TRỰC TUYẾN TRÊN NHIỀU NÊN TẢNG
              </h1>
              <p className="text-[15px] font-thin mt-5">
                Hệ thống luôn hỗ trợ đăng ký thành viên trên nhiều nên tảng khác
                nhau
              </p>
            </div>
            <div className="md:w-[60%] md:border-hidden border lg:w-[70%] w-[90%] p-4 m-auto bg-transparent rounded-md shadow-xl lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-purple-600">
                Đăng Ký Tài Khoản
              </h1>

              <p className="pt-1 text-center font-medium text-green-500">
                {stateSuccess}
              </p>
              <p className="pt-1 text-center font-medium text-red-500">
                {stateErr}
              </p>
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="name"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tên người dùng"
                    className="placeholder-gray-500 block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white  focus:outline-none"
                  />
                  {errors.name && touched.name && (
                    <span className="text-red-500 text-[13px]">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    className="placeholder-gray-500 block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white  focus:outline-none"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <span className="text-red-500 text-[13px]">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="placeholder:text-gray-500 block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none"
                  />
                  {errors.password && touched.password && (
                    <span className="text-red-500 text-[13px]">
                      {errors.password}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    placeholder="Nhập lại mật khẩu"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="placeholder:text-gray-500 block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none"
                  />
                  {errors.passwordConfirm && touched.passwordConfirm && (
                    <span className="text-red-500 text-[13px]">
                      {errors.passwordConfirm}
                    </span>
                  )}
                </div>
                <div className="mt-6">
                  {stateLoadingRegister.loading === true ? (
                    <button
                      disabled
                      type="button"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 mr-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Vui lòng chờ
                    </button>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                      >
                        Đăng ký
                      </button>
                      <ToastContainer toastStyle={{ color: "black" }} />
                    </>
                  )}
                </div>
              </form>
              <div className="flex mt-4 gap-x-2">
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </button>
                <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </button>
                <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default memo(RegisterForm);
