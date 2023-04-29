import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import SeatForm from "./addSeatForm"
function ManageSeat() {
  return (
    <>
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-2 border-r h-screen border-gray-500 text-[15px]">
            <SideBars />
          </div>
          <div className="col-span-8">
            <NavBars />
            <div className="m-5">
              <h1 className="font-bold text-[35px] uppercase">
                Quản lý phòng chiếu
              </h1>
              <SeatForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageSeat;
