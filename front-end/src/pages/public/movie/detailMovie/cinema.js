import { useEffect,memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShowTime } from "../../../../redux/actions/showTimeActions";
import { useParams } from "react-router-dom";

function Cinema({ cinema }) {
  const dispatch = useDispatch();
  const movieId = useParams();
  const showtimes = useSelector((state) => state.showtimes.showtimes);
  useEffect(() => {
    dispatch(getAllShowTime());
  }, [dispatch]);
  return (
    <>
      <div className="text-white">
        <h5 className="bg-[#E50914] text-[13px] lg:text-[16px] px-4 py-2 w-[45%] md:w-[37%] lg:w-[30%]">{cinema.name}</h5>
        <div className="border-2 h-32 items-center border-gray-600 px-5 grid grid-cols-4">
          <p className="text-sm lg:text-[16px]">2D - Phụ Đề</p>
          <div className="col-span-3">
            {showtimes.map((showtime) =>
              showtime.movieId === movieId.id &&
              showtime.cinemaId === cinema._id
              ?
              (
                <div key={showtime._id} className="flex justify-between items-center">
                  <p className="mx-5 text-sm lg:text-[16px]">Ngày chiếu {showtime.startDate}</p>
                  <div>
                    {showtime.startTime.map((time) => (
                      <button
                        key={time.time}
                        className="px-2 text-sm lg:text-[16px] py-1 my-2 mx-2 border-2 border-gray-600"
                      >
                        {time.time}
                      </button>
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
