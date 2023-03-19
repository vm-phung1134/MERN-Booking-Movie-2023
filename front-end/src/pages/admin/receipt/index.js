/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import NavBars from "../components/navBars";
import SideBars from "../components/sideBars";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState, memo } from "react";
import {
  deleteTicket,
  getAllReservation,
} from "../../../redux/actions/reservationActions";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ManageReceipt() {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservations);
  const [size, setSize] = useState(null);
  const [id, setId] = useState("");
  const [isSearching, setIsSearching] = useState("");
  const [searchReceipt, setSearchReceipt] = useState([]);
  const handleOpen = useCallback((value, id) => {
    setSize(value);
    setId(id);
  }, []);
  const handleDeleteUser = (id) => {
    dispatch(deleteTicket(id));
    setSize(null); //DISMISS MODAL
    setSearchReceipt(reservations.filter((item) => item._id !== id)); //AFTER DELETE SAVE INTO NEW RESERVATION
    toast.success("Đã xóa hóa đơn người dùng khỏi hệ thống!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  const handleFilter = (e) => {
    setIsSearching(e.target.value);
    setSearchReceipt(
      reservations.filter((entry) =>
        Object.values(entry).some(
          (val) =>
            typeof val === "string" &&
            val.toLowerCase().includes(isSearching.toLowerCase())
        )
      )
    );
  };

  useEffect(() => {
    dispatch(getAllReservation());
  }, []);
  useEffect(() => {
    setSearchReceipt(reservations);
  }, [reservations]);
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
            <h1 className="font-bold text-[35px] uppercase">QUẢN LÝ HÓA ĐƠN</h1>

            <div className="flex justify-start mt-5">
              <div className="rounded-lg shadow-2xl text-center mr-2 p-5">
                <h1>SỐ HÓA ĐƠN TRÊN HỆ THỐNG</h1>
                <p className="text-[35px] py-4 font-bold">
                  {searchReceipt.length}
                </p>
              </div>
            </div>
            <div className="flex  mt-5 justify-between">
              <h2 className="py-2 font-medium">Danh sách hóa đơn khách hàng</h2>
              <input
                type="text"
                onChange={handleFilter}
                className="px-2 border focus:outline-none text-sm border-gray-700 text-black placeholder:text-gray-400"
                placeholder="Tìm kiếm hóa đơn"
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
                            Mã hóa đơn
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Tên khách hàng
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Ngày đặt vé
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Số tiền <p className="text-[9px] lowercase capitalize"> Nghìn đồng</p>
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Trạng thái
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
                        {searchReceipt
                          .slice()
                          .reverse()
                          .map((receipt, index) => (
                            <>
                              <tr key={index}>
                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                  {receipt._id}
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  {receipt.author.name}
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  {receipt.createdAt}
                                </td>
                                <td className="px-4 py-4 text-sm text-center capitalize whitespace-nowrap">
                                {(receipt.total*1000).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                </td>
                                <td className="px-4 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  Đã thanh toán
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  <Link to={`update-receipt/${receipt._id}`}>
                                    <button className="px-2 text-blue-600">
                                      Chi tiết
                                    </button>
                                  </Link>

                                  <button
                                    onClick={() => handleOpen("sm", receipt._id)}
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
            XOÁ HOÁ ĐƠN
          </h2>
        </DialogHeader>
        <DialogBody divider>
          <div className="mb-5 w-full">
            <p className="my-2 text-[#000000]">
              Bạn có chắc là muốn xóa hóa đơn này không?
            </p>
          </div>
        </DialogBody>
        <DialogFooter>
          <button
            className="px-6 my-5 py-2 text-sm text-white bg-[#c40404]"
            onClick={() => handleDeleteUser(id)}
          >
            Tiếp tục
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default memo(ManageReceipt);
