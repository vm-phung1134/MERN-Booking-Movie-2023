import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../../redux/actions/authActions";
import AdminForm from "../admin/adminForm";
import ChangePwForm from "../admin/changePwForm";

function NavBars() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const adminName = localStorage.getItem("user");
  const [size, setSize] = useState(null);
  const handleOpen = useCallback((value) => {
    setSize(value);
  }, []);
  const [sizePw, setSizePw] = useState(null);
  const handleOpenPw = useCallback((value) => {
    setSizePw(value);
  }, []);
  const handleLogout = async () => {
    await dispatch(authLogout());
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
  };
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/");
    }
  }, [isAuthenticated, navigate, user]);

  return (
    <div className="flex justify-end border-b border-gray-400 px-5 py-1">
      <div className="flex flex-row items-center justify-end">
        <div className="mr-1">
          <div className="px-3">
            <i className="fas fa-globe"></i> English
          </div>
        </div>
        <div className="mr-1">
          <div className="px-3">
            <Link to="/admin/calendar">
              <button>
                <i className="fas fa-calendar-day"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className="mr-5">
          <div className="relative p-3">
            <i className="fas fa-bell"></i>
            <span className="absolute top-0 text-sm right-0 px-[6px] rounded-full text-white bg-red-700">
              3
            </span>
          </div>
        </div>
        <Menu>
          <MenuHandler>
            <Avatar
              size="sm"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="avatar"
              className="cursor-pointer"
            />
          </MenuHandler>
          <MenuList className="text-black">
            <MenuItem>
              Hi, <span className="capitalize font-medium">{adminName}</span>
            </MenuItem>
            <MenuItem onClick={() => handleOpen("lg")}>
              Thông tin admin
            </MenuItem>
            <MenuItem onClick={() => handleOpenPw("sm")}>Đổi mật khẩu</MenuItem>
            <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
          </MenuList>
        </Menu>
        <Dialog
          open={size === "lg"}
          size={size || "lg"}
          handler={handleOpen}
          style={{ borderRadius: "0px" }}
        >
          <DialogHeader>
            <h2 className="text-sm lg:text-[17px] text-[#c40404] font-bold">
              THÔNG TIN ADMINISTATOR
            </h2>
          </DialogHeader>
          <DialogBody divider>
            <div className="mb-5 w-full">
              <AdminForm handleOpen={handleOpen} />
            </div>
          </DialogBody>
        </Dialog>
        <Dialog
          open={sizePw === "sm"}
          size={sizePw || "sm"}
          handler={handleOpenPw}
          style={{ borderRadius: "0px" }}
        >
          <DialogHeader>
            <h2 className="text-sm lg:text-[17px] text-[#c40404] font-bold">
              THAY ĐỔI PASSWORD ADMINISTATOR
            </h2>
          </DialogHeader>
          <DialogBody divider>
            <div className="mb-5 w-full">
              <ChangePwForm handleOpenPw={handleOpenPw} />
            </div>
          </DialogBody>
        </Dialog>
      </div>
    </div>
  );
}

export default NavBars;
