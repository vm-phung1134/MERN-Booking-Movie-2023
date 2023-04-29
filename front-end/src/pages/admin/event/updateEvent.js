/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneEvent, updateEvent } from "../../../redux/actions/eventActions";
import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { useParams } from "react-router-dom";

function UpdateEvent() {
  const dispatch = useDispatch();
  const { event } = useSelector((state) => state.event);
  const eventId = useParams();
  const initialValues = {
    like: event.like,
    name: event.name,
    topContent: event.topContent,
    mainContent: event.mainContent,
    mainContent2: event.mainContent2,
    topImage: event.topImage,
    mainImage: event.mainImage,
    dateStart: event.dateStart,
    dateEnd: event.dateEnd,
  };
  const submitForm = async (values) => {
    dispatch(updateEvent(eventId.id,values));
    toast.success("Đã cập nhật event thành công!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "! Vui lòng nhập tên event";
    } else if (values.name.length > 100) {
      errors.name = "! Tên event không vượt quá 100 ký tự";
    }
    if (!values.topContent) {
      errors.topContent = "! Vui lòng nhập tên tiêu đề";
    } else if (values.topContent.length > 200) {
      errors.topContent = "! Tên tiêu đề không vượt quá 200 ký tự";
    }
    if (!values.topImage) {
      errors.topImage = "! Vui lòng nhập đường dẫn ảnh";
    } else if (values.topImage.length > 100) {
      errors.topImage = "! Đường dẫn ảnh không vượt quá 100 ký tự";
    }
    if (!values.mainImage) {
      errors.mainImage = "! Vui lòng nhập đường dẫn ảnh";
    } else if (values.mainImage.length > 100) {
      errors.mainImage = "! Đường dẫn ảnh không vượt quá 100 ký tự";
    }
    return errors;
  };

  useEffect(() => {
    dispatch(getOneEvent(eventId.id));
  }, [eventId.id]);

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
          <div className="grid grid-cols-10">
            <div className="col-span-2 border-r max-h-max border-gray-500 text-[15px]">
              <SideBars />
            </div>
            <div className="col-span-8">
              <NavBars />
              <div>
                <div className="m-5">
                  <h1 className="font-bold text-[35px] uppercase">
                    Chi tiết sự kiện
                  </h1>
                </div>
                <form
                  className="px-10 m-4 py-3 shadow-2xl"
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
                      className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                    />
                    {errors.name && touched.name && (
                      <span className="text-red-500 text-[13px]">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="mb-3 ">
                    <label
                      className="text-sm mt-2 font-medium text-black"
                      htmlFor="topContent"
                    >
                      Tiêu đề
                    </label>
                    <input
                      type="text"
                      name="topContent"
                      id="topContent"
                      value={values.topContent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                    />
                    {errors.topContent && touched.topContent && (
                      <span className="text-red-500 text-[13px]">
                        {errors.topContent}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-x-2">
                    <div className="mb-3 ">
                      <label
                        className="text-sm mt-2 font-medium text-black"
                        htmlFor="dateStart"
                      >
                        Ngày bắt đầu
                      </label>
                      <input
                        type="date"
                        name="dateStart"
                        id="dateStart"
                        value={values.dateStart}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="block w-full text-black px-4 py-1 text-sm  border border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                      />
                      {errors.dateStart && touched.dateStart && (
                        <span className="text-red-500 text-[13px]">
                          {errors.dateStart}
                        </span>
                      )}
                    </div>
                    <div className="mb-3 ">
                      <label
                        className="text-sm mt-2 font-medium text-black"
                        htmlFor="dateEnd"
                      >
                        Ngày kết thúc
                      </label>
                      <input
                        type="date"
                        name="dateEnd"
                        id="dateEnd"
                        value={values.dateEnd}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="block w-full text-black px-4 py-1 text-sm  border border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                      />
                      {errors.dateEnd && touched.dateEnd && (
                        <span className="text-red-500 text-[13px]">
                          {errors.dateEnd}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 ">
                    <label
                      className="text-sm mt-2 font-medium text-black"
                      htmlFor="topImage"
                    >
                      Hình ảnh chủ đề
                    </label>
                    <input
                      type="text"
                      name="topImage"
                      id="topImage"
                      value={values.topImage}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                    />
                    {errors.topImage && touched.topImage && (
                      <span className="text-red-500 text-[13px]">
                        {errors.topImage}
                      </span>
                    )}
                  </div>
                  <div className="mb-3 ">
                    <label
                      className="text-sm mt-2 font-medium text-black"
                      htmlFor="mainImage"
                    >
                      Hình ảnh nội dung
                    </label>
                    <input
                      type="text"
                      name="mainImage"
                      id="mainImage"
                      value={values.mainImage}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                    />
                    {errors.mainImage && touched.mainImage && (
                      <span className="text-red-500 text-[13px]">
                        {errors.mainImage}
                      </span>
                    )}
                  </div>
                  <div className="mb-3 ">
                    <label
                      className="text-sm mt-2 font-medium text-black"
                      htmlFor="mainContent"
                    >
                      Nội dung
                    </label>
                    <textarea
                      type="text"
                      name="mainContent"
                      id="mainContent"
                      cols="10"
                      rows="5"
                      value={values.mainContent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                    />
                  </div>
                  <div className="mb-3 ">
                    <label
                      className="text-sm mt-2 font-medium text-black"
                      htmlFor="mainContent2"
                    >
                      Nội dung phần 2
                    </label>
                    <textarea
                      type="text"
                      name="mainContent2"
                      id="mainContent2"
                      cols="10"
                      rows="5"
                      value={values.mainContent2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-end mt-5">
                    <button
                      type="submit"
                      className="bg-[#cf1111] text-[13px] text-white py-2 px-6"
                    >
                      Khởi tạo
                    </button>
                    <ToastContainer toastStyle={{ color: "black" }} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default memo(UpdateEvent);
