import { Link } from "react-router-dom";
import Logo from "../../public/login/mylogo.png";

function SideBars() {
  return (
    <div className="px-3 w-[20%] fixed top-0">
      <div className="flex justify-center p-8">
        <img className="lg:h-8 lg:w-[150px] h-5 w-[100px]" src={Logo} alt="Workflow" />
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">TRANG CHỦ</h2>
        <div className="flex flex-col items-start">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/dashboard">
              <i className="fas fa-chart-line"></i>&emsp;Dashboard
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">PHIM</h2>
        <div className="flex flex-col items-start">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/movie">
              <i className="fas fa-film"></i>&emsp; Quản lý phim
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">RẠP CHIẾU</h2>
        <div className="flex flex-col items-start">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/cinema">
              <i className="fas fa-house-laptop"></i>&ensp;Quản lý rạp chiếu
            </Link>
          </button>
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/food-ticket">
              <i className="fas fa-house-laptop"></i>&ensp;Gói combo & Vé
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">SUẤT CHIẾU</h2>
        <div className="flex flex-col items-start">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/showtime">
              <i className="fas fa-solid fa-business-time"></i>&ensp;Quản lý
              suất chiếu
            </Link>
          </button>
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
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/users">
              <i className="fas fa-users"></i>&ensp;Quản lý tài khoản
            </Link>
          </button>
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/receipts">
              <i className="fas fa-solid fa-file-invoice"></i>&emsp;Quản lý hóa
              đơn
            </Link>
          </button>
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/feedback">
              <i className="fas fa-solid fa-comments"></i>&ensp;Phản hồi
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBars;
