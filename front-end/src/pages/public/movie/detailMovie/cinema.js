/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShowTime } from "../../../../redux/actions/showTimeActions";
import { Link, useParams } from "react-router-dom";

function Cinema({ cinema }) {
  const dispatch = useDispatch();
  const movieId = useParams();
  const showtimes = useSelector((state) => state.showtimes.showtimes);
  useEffect(() => {
    dispatch(getAllShowTime());
  }, []);
  return (
    <>
      <div className="text-white">
        <h5 className="bg-[#E50914] text-[13px] md:text-sm lg:text-[16px] px-4 py-2 w-[45%] md:w-[37%] lg:w-[30%]">{cinema.name}</h5>
        <div className="border-2 h-32 items-center border-gray-600 px-3 lg:px-5 grid grid-cols-4">
          <p className="text-[13px] lg:text-[16px] md:text-sm">2D - Phụ Đề</p>
          <div className="col-span-3">
            {showtimes.map((showtime) =>
              showtime.movieId === movieId.id &&
              showtime.cinemaId === cinema._id
              ?
              (
                <div key={showtime._id} className="flex justify-between items-center">
                  <p className="lg:mx-5 mx-1 md:text-sm text-[13px] lg:text-[16px]">Ngày {showtime.startDate}</p>
                  <div>
                    {showtime.startTime.map((time) => (
                      <Link to="/booking" key={time.time}>
                      <button
                        className="px-2 text-[13px] md:text-sm lg:text-[16px] py-1 my-2 mx-2 border-2 border-gray-600"
                      >
                        {time.time}
                      </button>
                      </Link>
                      
                    ))}
                  </div>
                </div>
              ) : (
                <div key={showtime._id}>

                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Cinema);
