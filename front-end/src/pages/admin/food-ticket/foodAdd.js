import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import FoodForm from "./foodForm";
import { getAllFood, createOneFood } from "../../../redux/actions/foodActions";

function FoodAdd() {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods.foods);

  const initialValues = {
    typeFood: "",
    discription: "",
    price: 10,
    quantity: 0,
    image: "",
  };
  const submitForm = async (values, { resetForm }) => {
    await dispatch(createOneFood(values));
    resetForm({
      typeFood: "",
      discription: "",
      price: 10,
      quantity: 0,
      image: "",
    });
    toast.success("Đã thêm gói combo thành công", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    return errors;
  };

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

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
                      Thêm gói tiện ích
                    </h1>
                  </div>
                  <FoodForm
                    foods={foods}
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

export default FoodAdd;
