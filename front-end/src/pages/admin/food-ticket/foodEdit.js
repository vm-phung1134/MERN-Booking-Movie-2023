import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import FoodForm from "./foodForm";
import { getOneFood, updateOneFood } from "../../../redux/actions/foodActions";
import { useParams } from "react-router-dom";

function FoodEdit() {
  const dispatch = useDispatch();
  const foodId = useParams();
  const { food } = useSelector((state) => state.food);
  const { isUpdated } = useSelector((state) => state.editFood);
  const initialValues = {
    typeFood: food.typeFood,
    discription: food.discription,
    price: food.price,
    quantity: food.quantity,
    image: food.image,
  };
  const submitForm = async (values) => {
    dispatch(updateOneFood(food._id, values));
  };
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    return errors;
  };

  useEffect(() => {
    dispatch(getOneFood(foodId.id));
  }, [dispatch, foodId.id]);

  useEffect(() => {
    if (isUpdated) {
      toast.success("Cập nhật gói tiện ích thành công", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: "text-black",
      });
    }
  }, [isUpdated]);
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
                      Cập nhật gói tiện ích
                    </h1>
                  </div>
                  <FoodForm
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

export default FoodEdit;
