/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import NavBars from "../components/navBars";
import SideBars from "../components/sideBars";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState, memo } from "react";
import { getAllEvent, deleteEvent } from "../../../redux/actions/eventActions";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ManageEvent() {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events);
  const [size, setSize] = useState(null);
  const [id, setId] = useState("");
  const [isSearching, setIsSearching] = useState("");
  const [searchEvent, setSearchEvent] = useState([]);
  const handleOpen = useCallback((value, id) => {
    setSize(value);
    setId(id);
  }, []);
  const handleDeleteEvent = (id) => {
    dispatch(deleteEvent(id));
    setSize(null); //DISMISS MODAL
    setSearchEvent(events.filter((item) => item._id !== id)); //AFTER DELETE SAVE INTO NEW RESERVATION
    toast.success("Đã xóa Event thành công!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  const handleFilter = (e) => {
    setIsSearching(e.target.value);
    setSearchEvent(
      events.filter((entry) =>
        Object.values(entry).some(
          (val) =>
            typeof val === "string" &&
            val.toLowerCase().includes(isSearching.toLowerCase())
        )
      )
    );
  };

  useEffect(() => {
    dispatch(getAllEvent());
  }, []);
  useEffect(() => {
    setSearchEvent(events);
  }, [events]);
  return (
    <>
      <div className="grid grid-cols-10">
        <div className="col-span-2 border-r max-h-max border-gray-500 text-[15px]">
          <SideBars />
        </div>
        <div className="col-span-8">
          <NavBars />
          <ToastContainer toastStyle={{ color: "black" }} />
          <div className="m-5">
            <h1 className="font-bold text-[35px] uppercase">
              QUẢN LÝ SỰ KIỆN
            </h1>

            <div className="flex justify-start mt-5">
              <div className="rounded-lg shadow-2xl text-center mr-2 p-5">
                <h1>SỐ SỰ KIỆN TRÊN HỆ THỐNG</h1>
                <p className="text-[35px] py-4 font-bold">
                  {searchEvent.length}
                </p>
              </div>
            </div>
            <div className="my-5">
              <Link to="create-event">
                <button className="bg-[#cf1111] text-[13px] text-white py-2 px-6 rounded-md">
                  Thêm sự kiện
                </button>
              </Link>
            </div>
            <div className="flex  mt-5 justify-between">
              <h2 className="py-2 font-medium">Danh sách sự kiện</h2>
              <input
                type="text"
                onChange={handleFilter}
                className="px-2 border w-[40%] focus:outline-none text-sm border-gray-700 text-black placeholder:text-gray-400"
                placeholder="Tìm kiếm sự kiện"
              />
            </div>
            <div className="mt-3 shadow-2xl">
              <div className="overflow-x-auto">
                <div className="w-full inline-block align-middle">
                  <div className="overflow-auto rounded-xl">
                    <table className="min-w-full text-black">
                      <thead className="bg-[#206cb391]">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left uppercase "
                          >
                            Mã sự kiện
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Tên sự kiện
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Ngày bắt đầu
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Ngày kết thúc
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Thiết lập
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {searchEvent
                          .slice()
                          .reverse()
                          .map((event, index) => (
                            <>
                              <tr key={index}>
                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                  {event._id}
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  {event.name}
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  {event.dateStart}
                                </td>
                                <td className="px-4 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  {event.dateEnd}
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  <Link to={`update-event/${event._id}`}>
                                    <button className="px-2 text-blue-600">
                                      Chi tiết
                                    </button>
                                  </Link>

                                  <button
                                    onClick={() => handleOpen("sm", event._id)}
                                    className="px-2 text-red-500"
                                  >
                                    Xóa
                                  </button>
                                </td>
                              </tr>
                            </>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={size === "sm"}
        size={size || "sm"}
        handler={handleOpen}
        style={{ borderRadius: "0px" }}
      >
        <DialogHeader>
          <h2 className="text-sm lg:text-[17px] text-[#c40404] font-bold">
            XOÁ BLOG PHIM
          </h2>
        </DialogHeader>
        <DialogBody divider>
          <div className="mb-5 w-full">
            <p className="my-2 text-[#000000]">
              Bạn có chắc là muốn xóa event này không?
            </p>
          </div>
        </DialogBody>
        <DialogFooter>
          <button
            className="px-6 my-5 py-2 text-sm text-white bg-[#c40404]"
            onClick={() => handleDeleteEvent(id)}
          >
            Tiếp tục
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default memo(ManageEvent);
