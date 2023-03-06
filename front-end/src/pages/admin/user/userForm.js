import { memo } from "react";

function UserForm({
  values,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  ToastContainer,
  errors,
}) {
  return (
    <>
      <form className="px-10 py-3" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label className="text-sm mt-2 font-medium text-black" htmlFor="name">
            Tên người dùng
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
            htmlFor="password"
          >
            Mật khẩu
          </label>
          <input
            type="text"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
          />
        </div>
        <div className="mb-3 ">
          <label
            className="text-sm mt-2 font-medium text-black"
            htmlFor="phone"
          >
            Số điện thoại
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="mb-3">
            <label
              className="text-sm mt-2 font-medium text-black"
              htmlFor="gender"
            >
              Giới tính
            </label>
            <select
              id="gender"
              name="gender"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-select appearance-none
                              block
                              w-full
                              px-4
                              py-3
                              mt-3
                              text-sm 
                              text-black
                              bg-transparent bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-black bg-white focus:outline-none"
              aria-label="Default select example"
            >
              <option value="" disabled>
                Chọn giới tính
              </option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>
          <div className="mb-3">
            <label
              className="text-sm mt-2 font-medium text-black"
              htmlFor="position"
            >
              Chức vụ
            </label>
            <select
              id="position"
              name="position"
              value={values.position}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-select appearance-none
                              block
                              w-full
                              px-4
                              py-3
                              mt-3
                              text-sm 
                              text-black
                              bg-transparent bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-black bg-white focus:outline-none"
              aria-label="Default select example"
            >
              <option value="" disabled>
                Chọn chức vụ
              </option>
              <option value="Nhân Viên">Nhân viên</option>
              <option value="Khách Hàng">Khách hàng</option>
              <option value="Admin">Quản trị viên</option>
            </select>
          </div>
        </div>
        <div className="mb-3 ">
          <label
            className="text-sm mt-2 font-medium text-black"
            htmlFor="cardId"
          >
            Số CMND
          </label>
          <input
            type="text"
            name="cardId"
            id="cardId"
            value={values.cardId}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
          />
        </div>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-[#cf1111] text-[13px] text-white py-2 px-6 rounded-md"
          >
            KHỞI TẠO
          </button>
          <ToastContainer toastStyle={{ color: "black" }} />
        </div>
      </form>
    </>
  );
}

export default memo(UserForm);
