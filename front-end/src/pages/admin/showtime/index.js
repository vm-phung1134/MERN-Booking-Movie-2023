import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShowTime } from "../../../redux/actions/showTimeActions";
import { getAllCinema } from "../../../redux/actions/cinemaActions";
function ShowTime() {
  const dispatch = useDispatch();
  const showtimes = useSelector((state) => state.showtimes.showtimes);
  const cinemas = useSelector((state) => state.cinemas.cinemas);
  useEffect(() => {
    dispatch(getAllShowTime());
    dispatch(getAllCinema());
  }, [dispatch]);
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
              Quản lý suất chiếu
            </h1>
            <div className="flex justify-start mt-5">
              <div className="rounded-lg shadow-2xl text-center mr-2 p-5">
                <h1>TỔNG SUẤT CHIẾU TRÊN HỆ THỐNG</h1>
                <p className="text-[35px] py-4 font-bold">{showtimes.length}</p>
                {cinemas.map((cinema) => (
                  <div key={cinema._id}>
                    <p className="text-sm">
                      Số suất chiếu tại <span>{cinema.name}: </span>
                      {
                        showtimes.filter(
                          (showtime) => showtime.cinemaId === cinema._id
                        ).length
                      }
                    </p>
                  </div>
                ))}

                <button className="p-2 text-green-500">
                  <i className="fas fa-plus"></i>&ensp;
                  <Link to="add-showtime">Thêm mới</Link>
                </button>
              </div>
            </div>
            <div className="mt-5 px-2 py-4 rounded-lg shadow-xl">
              {cinemas.map((cinema) => (
                <div key={cinema._id}>
                  <h2 className="py-3 mt-3 font-medium">
                    Danh sách suất chiếu tại <span>{cinema.name}</span>
                  </h2>
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
                                  Mã suất chiếu
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-center uppercase "
                                >
                                  Mã phim
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-center uppercase "
                                >
                                  Thể loại
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-center uppercase "
                                >
                                  Ngày chiếu
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-center uppercase "
                                >
                                  Giờ chiếu
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
                              {showtimes
                                .slice()
                                .reverse()
                                .map((showtime) => (
                                  <>
                                    {showtime.cinemaId === cinema._id ? (
                                      <tr key={showtime._id}>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">
                                          {showtime._id}
                                        </td>
                                        <td className="px-4 py-4 text-sm text-center capitalize whitespace-nowrap">
                                          {showtime.movieId}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                          {showtime.typeMovie}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                          {showtime.startDate}
                                        </td>
                                        <td className="px-8 py-4 text-sm text-center whitespace-nowrap">
                                          {showtime.startTime.map((time) => (
                                            <span key={time._id}>
                                              {time.time}{" "}
                                            </span>
                                          ))}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                          <Link
                                            to={`edit-showtime/${showtime._id}`}
                                          >
                                            <button className="px-2 text-blue-600">
                                              Cập nhật
                                            </button>
                                          </Link>

                                          <button className="px-2 text-red-500">
                                            Xóa
                                          </button>
                                        </td>
                                      </tr>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowTime;
