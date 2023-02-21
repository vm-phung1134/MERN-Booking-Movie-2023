import NavBars from "../components/navBars";
import SideBars from "../components/sideBars";
import { getAllMovie } from "../../../redux/actions/movieActions";
import { getAllMovieSoon } from "../../../redux/actions/movieSoonActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ManageMovie() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const movieSoons = useSelector((state) => state.movieSoons.movieSoons);
  useEffect(() => {
    dispatch(getAllMovie());
    dispatch(getAllMovieSoon());
  }, [dispatch]);
  return (
    <div>
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-2 border-r max-h-max border-gray-500 text-[15px]">
            <SideBars />
          </div>
          <div className="col-span-8">
            <NavBars />
            <div className="m-5">
              <h1 className="font-bold text-[35px] uppercase">Quản lý phim</h1>
              <div className="flex justify-start mt-5">
                <div className="rounded-lg shadow-2xl text-center mr-2 p-3">
                  <h1>PHIM ĐANG CHIẾU</h1>
                  <p className="text-[35px] py-4 font-bold">{movies.length}</p>
                  <Link to="add-movie-now">
                    <button className="p-2 text-green-500">
                      <i className="fas fa-plus"></i>&ensp;Thêm mới
                    </button>
                  </Link>
                </div>
                <div className="rounded-lg shadow-2xl text-center ml-2 p-3">
                  <h1>PHIM SẮP CHIẾU</h1>
                  <p className="text-[35px] py-4 font-bold">
                    {movieSoons.length}
                  </p>
                  <Link to="add-movie-soon">
                    <button className="p-2 text-green-500">
                      <i className="fas fa-plus"></i>&ensp;Thêm mới
                    </button>
                  </Link>
                </div>
              </div>
              {/* PHIM ĐANG CHIẾU */}
              <div className="mt-5 px-2 py-4 rounded-lg shadow-xl">
                <h2 className="py-3">Danh sách phim đang chiếu</h2>
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
                                Mã phim
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center uppercase "
                              >
                                Tên phim
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center uppercase "
                              >
                                Thời lượng
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center uppercase "
                              >
                                Ngày khởi chiếu
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
                                Thiết lập
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {movies.reverse().map((movie, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                  {movie._id}
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  {movie.name}
                                </td>
                                <td className="px-8 py-4 text-sm text-center whitespace-nowrap">
                                  {movie.duration}{" "}
                                  <span className="text-[12px] font-thin">
                                    ph
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  {movie.released}
                                </td>
                                <td className="px-4 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  {movie.type}
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  <Link to={`update-movie-now/${movie._id}`}>
                                    <button className="px-2 text-blue-600">
                                      Cập nhật
                                    </button>
                                  </Link>
                                  <button className="px-2 text-red-500">
                                    Xóa
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* PHIM SẮP CHIẾU */}
              <div className="mt-5 px-2 py-4 rounded-lg shadow-xl">
                <h2 className="py-3">Danh sách phim sắp chiếu</h2>
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
                                Mã phim
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center uppercase "
                              >
                                Tên phim
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center uppercase "
                              >
                                Thời lượng
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center uppercase "
                              >
                                Ngày khởi chiếu
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
                                Thiết lập
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {movieSoons.map((movie, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                  {movie._id}
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  {movie.name}
                                </td>
                                <td className="px-8 py-4 text-sm text-center whitespace-nowrap">
                                  {movie.duration}{" "}
                                  <span className="text-[12px] font-thin">
                                    ph
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  {movie.released}
                                </td>
                                <td className="px-4 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  {movie.type}
                                </td>
                                <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                  <Link to={`update-movie-soon/${movie._id}`}>
                                    <button className="px-2 text-blue-600">
                                      Cập nhật
                                    </button>
                                  </Link>

                                  <button className="px-2 text-red-500">
                                    Xóa
                                  </button>
                                </td>
                              </tr>
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
        </div>
      </div>
    </div>
  );
}

export default ManageMovie;
