/* eslint-disable react-hooks/exhaustive-deps */
import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import SendFeedback from "./sendFeedback";
import { useEffect, memo, useState, useCallback } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { getAllFeedBack } from "../../../redux/actions/feedBackActions";
import { useDispatch, useSelector } from "react-redux";

function FeedBack() {
  const dispatch = useDispatch();
  const [size, setSize] = useState(null);
  const [id, setId] = useState("");
  const { feedbacks } = useSelector((state) => state.feedBacks);
  const handleOpen = useCallback((value, id) => {
    setSize(value);
    setId(id);
  }, []);
  useEffect(() => {
    dispatch(getAllFeedBack());
  }, []);
  return (
    <>
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-2 border-r max-h-max border-gray-500 text-[15px]">
            <SideBars />
          </div>
          <div className="col-span-8">
            <NavBars />
            <div className="m-5">
              <h1 className="font-bold text-[35px] uppercase">
                Phản hồi người dùng
              </h1>
              <SendFeedback dispatch={dispatch} />
              <h1 className="font-medium text-sm my-5">
                Danh sách phản hồi từ người dùng
              </h1>
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
                              Mã FeedBack
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-xs font-bold text-left uppercase "
                            >
                              Ngày gửi
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-xs font-bold text-center uppercase "
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-xs font-bold text-center uppercase "
                            >
                              Tên người dùng
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
                          {feedbacks.map((feedback, index) => (
                            <>
                              <tr key={index}>
                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                  {feedback._id}
                                </td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                  {feedback.createdAt}
                                </td>
                                <td className="px-6 py-4 text-sm text-center lowercase whitespace-nowrap">
                                  {feedback.email}
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  {feedback.userName}
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  <button
                                    onClick={() =>
                                      handleOpen("sm", feedback._id)
                                    }
                                    className="px-2 text-blue-600"
                                  >
                                    Xem nội dung
                                  </button>
                                  <button className="px-2 text-red-500">
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
              NỘI DUNG TỪ KHÁCH HÀNG
            </h2>
          </DialogHeader>
          <DialogBody divider>
            {feedbacks.map((fb) =>
              fb._id === id ? <p className="text-sm text-black">{fb.content}</p> : <></>
            )}
          </DialogBody>
          <DialogFooter>
            <button className="px-6 my-5 py-2 text-sm text-white bg-[#c40404]">
              Tiếp tục
            </button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}

export default memo(FeedBack);
