import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import Logo from "../login/mylogo.png";
import { authLogout } from "../../../redux/actions/authActions";
function HeaderPublic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const userName = localStorage.getItem("user");

  const handleLogout = () => {
    dispatch(authLogout());
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
  };
  const { user, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/");
    }
  }, [dispatch, isAuthenticated, navigate, user]);
  return (
    <div>
      <nav className="bg-transparent">
        <div className="max-w-7xl mx-auto px-3 md:px-4 sm:px-6 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  to="/home"
                >
                  <img className="lg:h-8 lg:w-[150px] h-5 w-[100px]" src={Logo} alt="Workflow" />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-3">
                  <Link
                    to="/booking"
                    className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    MUA VÉ
                  </Link>
                  <Link
                    to="/movie"
                    className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    PHIM
                  </Link>
                  <Link
                    to="/cinema"
                    className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    RẠP CHIẾU
                  </Link>
                  <Link
                    to="/blog&event"
                    className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    GÓC ĐIỆN ẢNH & SỰ KIỆN
                  </Link>
                  <Link
                    to="/support"
                    className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    HỖ TRỢ
                  </Link>
                  <Link
                    to="/search"
                    className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    TÌM KIẾM
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button className="text-white text-[11px] md:text-[12px]">
                <i className="fas fa-globe"></i>
                &ensp;VN
              </button>
              <Menu>
                <MenuHandler>
                  <Button className="text-white ml-0 md:ml-3 py-2 bg-transparent hover:bg-none font-[400] shadow-none text-[14px] capitalize">
                    {userName} &ensp;
                    <i className="fas fa-chevron-down text-[12px]"></i>
                  </Button>
                </MenuHandler>
                <MenuList className="text-black">
                  <MenuItem>
                    <Link to="/account">Thông tin cá nhân</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/user-tickets">Vé đã đặt</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/account">Đổi mật khẩu</Link>
                  </MenuItem>
                  <MenuItem
                    className="border-t border-bg-gray-700"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className="mr-0 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="z-50">
        <Transition
          show={isOpen}
          className="bg-black"
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/booking"
                  className="hover:bg-gray-700 text-white block px-3 py-[2px] rounded-md text-sm font-medium"
                >
                  MUA VÉ
                </Link>

                <Link
                   to="/movie"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-sm font-medium"
                >
                  PHIM
                </Link>

                <Link
                to="/cinema"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-sm font-medium"
                >
                  RẠP CHIẾU
                </Link>

                <Link
                  to="/blog&event"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-sm font-medium"
                >
                  GÓC ĐIỆN ẢNH & SỰ KIỆN
                </Link>

                <Link
                  to="/support"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-sm font-medium"
                >
                  HỖ TRỢ
                </Link>
                <Link
                  to="/search"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-sm font-medium"
                >
                  TÌM KIẾM
                </Link>
              </div>
            </div>
          )}
        </Transition>
        </div>
      </nav>
    </div>
  );
}

export default memo(HeaderPublic);
