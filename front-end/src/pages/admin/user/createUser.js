import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserForm from "./userForm";
import { memo } from "react";
import { authRegister } from "../../../redux/actions/authActions";

function CreateUser() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
    cardId: "",
    position: "",
    gender: "",
  };
  const submitForm = async (values, { resetForm }) => {
    await dispatch(
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
    resetForm({});
    toast.success("Đã thêm 1 người dùng hệ thống thành công !", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
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
              <div className="col-span-2 border-r h-screen border-gray-500 text-[15px]">
                <SideBars />
              </div>
              <div className="col-span-8">
                <NavBars />
                <div>
                  <div className="m-5">
                    <h1 className="font-bold text-[35px] uppercase">
                      THÊM NGƯỜI DÙNG HỆ THỐNG
                    </h1>
                  </div>
                  <UserForm
                    ToastContainer={ToastContainer}
                    touched={touched}
                    errors={errors}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default memo(CreateUser);
