/* eslint-disable react-hooks/exhaustive-deps */
import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import UserForm from "./userForm";
import { getOneUser, updateOneUser } from "../../../redux/actions/authActions";
import { useParams } from "react-router-dom";

function UpdateUser() {
  const dispatch = useDispatch();
  const userId = useParams();
  const { userInfo } = useSelector((state) => state.userInfo);
  const { isUpdated } = useSelector((state) => state.editUser);
  const initialValues = {
    name: userInfo.name,
    phone: userInfo.phone,
    email: userInfo.email,
    password: userInfo.password,
    cardId: userInfo.cardId,
    position: userInfo.position,
    gender: userInfo.gender,
  };
  const submitForm = async (values) => {
    dispatch(updateOneUser(userInfo._id, values));
    if (isUpdated) {
      toast.success("Cập nhật người dùng thành công !", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: "text-black",
      });
    }
  };
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    return errors;
  };

  useEffect(() => {
    dispatch(getOneUser(userId.id));
  }, []);
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
                      cập nhật người dùng hệ thống
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

export default UpdateUser;
