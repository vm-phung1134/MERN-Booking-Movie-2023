import { Link } from "react-router-dom";

function SideBars() {
  return (
    <div className="px-3 fixed top-0">
      <div>
        <h1 className="text-center py-7 font-bold text-[30px]">React Flix</h1>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">TRANG CHỦ</h2>
        <div className="flex flex-col items-start">
          <Link className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full"to="/admin/dashboard">
            <button >
              <i className="fas fa-chart-line"></i>&emsp;Dashboard
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">PHIM</h2>
        <div className="flex flex-col items-start">
          <Link className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full" to="/admin/movie">
            {" "}
            <button>
              <i className="fas fa-film"></i>&emsp; Quản lý phim
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">RẠP CHIẾU</h2>
        <div className="flex flex-col items-start">
          <Link to="/admin/cinema" className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
           <button >
            <i className="fas fa-house-laptop"></i>&ensp;Quản lý rạp chiếu
          </button>
          </Link>
          <Link to="/admin/food-ticket" className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
           <button >
            <i className="fas fa-house-laptop"></i>&ensp;Gói combo & Vé
          </button>
          </Link>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">SUẤT CHIẾU</h2>
        <div className="flex flex-col items-start">
          <Link to="/admin/showtime">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <i className="fas fa-solid fa-business-time"></i>&ensp;Quản lý suất
            chiếu
          </button>
          </Link>
          
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">BlOG & SỰ KIỆN</h2>
        <div className="flex flex-col items-start">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <i className="fas fa-blog"></i>&emsp;Blog điện ảnh
          </button>
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <i className="fas fa-calendar-days"></i>&emsp;Sự kiện
          </button>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">NGƯỜI DÙNG</h2>
        <div className="flex flex-col items-start">
          <Link to="/admin/users">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <i className="fas fa-users"></i>&ensp;Quản lý tài khoản
          </button>
          </Link>
          <Link to="/admin/receipts">
            <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <i className="fas fa-solid fa-file-invoice"></i>&emsp;Quản lý hóa
            đơn
          </button>
          </Link>
          
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <i className="fas fa-solid fa-comments"></i>&ensp;Phản hồi
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBars;
