import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
//import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import CreateEvent from "./createEvent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useCallback} from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function CalendarEvent() {
  const evt = JSON.parse(localStorage.getItem('eventDay')) || "";
  const [arrEvt, setArrEvt] = useState(evt)
  const [size, setSize] = useState(null);
  const [id, setId] = useState("");
  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  const handleDelete = () => {
    arrEvt.splice(arrEvt.findIndex(function(i){
      return i.id === id;
  }), 1);
   setSize(null)
  }
  const handleOpen = useCallback((e) => {
    setSize("sm");
    setId(e.id);
  }, []);
  const initialValues = {
    name: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: ""
  };
  const submitForm = async (values, { resetForm }) => {
    setArrEvt(prev => [...prev, {
      id: Math.floor(Math.random() * 1000),
      allDay: false,
      title: values.name,
      start: new Date(`${values.startDate}, ${values.startTime}`),
      end: new Date(`${values.endDate}, ${values.endTime}`),
    }])
    
    resetForm({});
    toast.success("Đã thêm sự kiện vào lịch biểu !", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  localStorage.setItem('eventDay', JSON.stringify(arrEvt));
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    return errors;
  };
  
  return (
    <>
      <div className="grid grid-cols-10">
        <div className="col-span-2 border-r max-h-max border-gray-500 text-[15px]">
          <SideBars />
        </div>
        <div className="col-span-8">
          <NavBars />
          <div className="m-5">
            <h1 className="font-bold text-[35px] uppercase">
                LỊCH BIỂU
            </h1>
            <CreateEvent ToastContainer={ToastContainer} validate={validate} submitForm={submitForm}  initialValues={initialValues}  arrEvt={arrEvt}/>
          </div>
          <Calendar
            className="text-sm"
            localizer={localizer}
            events={arrEvt}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={handleOpen}
            style={{ minHeight: 500, margin: "20px" }}
          />
        </div>
        <Dialog
              open={size === "sm"}
              size={size || "sm"}
              handler={handleOpen}
              style={{ borderRadius: "0px" }}
            >
              <DialogHeader>
                <div className="flex justify-between w-full">
                  <h2 className="text-sm lg:text-[17px] text-[#c40404] font-bold">
                  THÔNG BÁO
                  </h2>
                  <button onClick={() =>  setSize(null)} className="text-[17px]">X</button>
                </div>
              </DialogHeader>
              <DialogBody divider>
                <div className="mb-5 w-full">
                  <p className="my-2 text-[#000000]">
                    Bạn có chắc là muốn xóa ghi chú này không?
                  </p>
                </div>
              </DialogBody>
              <DialogFooter>
                <button
                  className="px-6 my-5 py-2 text-sm text-white bg-[#c40404]"
                  onClick={() => handleDelete(id)}
                >
                  Hủy
                </button>
              </DialogFooter>
            </Dialog>
      </div>
    </>
  );
}

export default CalendarEvent;
