import { Radio } from "@material-tailwind/react";
import { useCallback, memo} from "react";

function Session({ showtime, setValueShowTime}) {
  const handleShowTime = useCallback(
    (e, time, id) => {
      setValueShowTime({ id: e.target.value, timeVl: time, startTimeId: id }); // Get showtime
    },
    [setValueShowTime]
  );

  return (
    <>
      <div className="text-white">
        <h5 className="bg-[#E50914] text-sm lg:text-[15px] px-4 py-2 w-[50%] lg:w-[40%]">
          Ngày Chiếu - {showtime.startDate}
        </h5>
        <div className="border-2 max-h-max items-center border-gray-600 px-5 grid grid-cols-3">
          <p className="uppercase text-[12px] lg:text-[15px]">PHỤ ĐỀ - {showtime.typeMovie}</p>
          <div className="col-span-2 my-2 text-white">
            {showtime.startTime.map((time) => (
              <Radio
                
                onChange={(e) => handleShowTime(e, time.time, time._id)}
                value={showtime._id}
                labelProps={{ style: { color: "white" } }}
                key={time._id}
                id={time.time}
                name="type"
                label={
                  <div className="border mx-2 border-gray-500 text-center py-1 px-3">
                    <p className="text-[11px] uppercase">{time.nameScreen}</p>
                    <p className="py-1 font-medium text-sm lg:text-[15px]">{time.time}</p>
                    <p className="text-[11px] text-gray-500">
                      Số ghế còn trống: 167 
                    </p>
                  </div>
                }
                hidden
              ></Radio>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default memo(Session);
