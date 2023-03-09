/* eslint-disable react-hooks/exhaustive-deps */
import NavBars from "../components/navBars";
import SideBars from "../components/sideBars";
import {
  deleteOneMovie,
  getAllMovie,
} from "../../../redux/actions/movieActions";
import {
  getAllMovieSoon,
  deleteOneMovieSoon,
} from "../../../redux/actions/movieSoonActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState, memo } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function ManageMovie() {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [idSoon, setIdSoon] = useState("");
  const [size, setSize] = useState(null);
  const [sizeSoon, setSizeSoon] = useState(null); 
  const [newMovieSoons, setNewMovieSoons] = useState([]);
  const [isSearching, setIsSearching] = useState("");
  const [searchCurrentMovie, setSearchCurrentMovie] = useState([]); // SEARCH FILTER
  const movies = useSelector((state) => state.movies.movies)
  const movieSoons = useSelector((state) => state.movieSoons.movieSoons)
  const handleDeleteMovie = () => {
    dispatch(deleteOneMovie(id));
    setSize(null); //DISMISS MODAL
    setSearchCurrentMovie(movies.filter((item) => item._id !== id)); //AFTER DELETE SAVE INTO NEW RESERVATION
    toast.success("Đã xóa 1 phim đang chiếu!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  const handleDeleteMovieSoon = () => {
    dispatch(deleteOneMovieSoon(idSoon));
    setSizeSoon(null); //DISMISS MODAL
    setNewMovieSoons(movieSoons.filter((item) => item._id !== idSoon)); //AFTER DELETE SAVE INTO NEW RESERVATION
    toast.success("Đã xóa 1 phim sắp chiếu!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  const handleOpen = useCallback((value, id) => {
    setSize(value);
    setId(id);
  }, []);
  const handleOpenSoon = useCallback((value, id) => {
    setSizeSoon(value);
    setIdSoon(id);
  }, []);
  const handleFilter = (e) => {
    setIsSearching(e.target.value);
    setSearchCurrentMovie(
      movies.filter((entry) =>
        Object.values(entry).some(
          (val) =>
            typeof val === "string" &&
            val.toLowerCase().includes(isSearching.toLowerCase())
        )
      )
    );
  }
  useEffect(() => {
    dispatch(getAllMovie());
    dispatch(getAllMovieSoon());
  }, []);
  useEffect(() => {
    setNewMovieSoons(movieSoons);
    setSearchCurrentMovie(movies);
  }, [movies, movieSoons]);
  return (
    <div>
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-2 border-r max-h-max border-gray-500 text-[15px]">
            <SideBars />
          </div>
          <div className="col-span-8">
            <NavBars />
            <ToastContainer toastStyle={{ color: "black" }} />
            <div className="m-5">
              <h1 className="font-bold text-[35px] uppercase">Quản lý phim</h1>
              <div className="flex justify-start mt-5">
                <div className="rounded-lg shadow-2xl text-center mr-2 p-3">
                  <h1>PHIM ĐANG CHIẾU</h1>
                  <p className="text-[35px] py-4 font-bold">
                    {searchCurrentMovie.length}
                  </p>
                  <Link to="add-movie-now">
                    <button className="p-2 text-green-500">
                      <i className="fas fa-plus"></i>&ensp;Thêm mới
                    </button>
                  </Link>
                </div>
                <div className="rounded-lg shadow-2xl text-center ml-2 p-3">
                  <h1>PHIM SẮP CHIẾU</h1>
                  <p className="text-[35px] py-4 font-bold">
                    {newMovieSoons.length}
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
                <div className="flex justify-between">
                  <h2 className="py-2 font-medium">Danh sách phim đang chiếu</h2>
                  <input type="text" onChange={handleFilter} className="px-2 border focus:outline-none text-sm border-gray-700 text-black placeholder:text-gray-400" placeholder="Tìm kiếm phim"/>
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
                            {searchCurrentMovie
                              .slice()
                              .reverse()
                              .map((movie, index) => (
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

                                    <button
                                      onClick={() =>
                                        handleOpen("sm", movie._id)
                                      }
                                      className="px-2 text-red-500"
                                    >
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
              <Dialog
                open={size === "sm"}
                size={size || "sm"}
                handler={handleOpen}
                style={{ borderRadius: "0px" }}
              >
                <DialogHeader>
                  <h2 className="text-sm lg:text-[17px] text-[#c40404] font-bold">
                    XOÁ 1 BỘ PHIM ĐANG CHIẾU
                  </h2>
                </DialogHeader>
                <DialogBody divider>
                  <div className="mb-5 w-full">
                    <p className="my-2 text-[#000000]">
                      Bạn có chắc là muốn xóa phim không?
                    </p>
                  </div>
                </DialogBody>
                <DialogFooter>
                  <button
                    className="px-6 my-5 py-2 text-sm text-white bg-[#c40404]"
                    onClick={() => handleDeleteMovie(id)}
                  >
                    Tiếp tục
                  </button>
                </DialogFooter>
              </Dialog>
              {/* PHIM SẮP CHIẾU */}
              <div className="mt-5 px-2 py-4 rounded-lg shadow-xl">
                <h2 className="py-3 font-medium">Danh sách phim sắp chiếu</h2>
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
                            {newMovieSoons
                              .slice()
                              .reverse()
                              .map((movie, index) => (
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

                                    <button
                                      onClick={() =>
                                        handleOpenSoon("sm", movie._id)
                                      }
                                      className="px-2 text-red-500"
                                    >
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
            <Dialog
              open={sizeSoon === "sm"}
              size={sizeSoon || "sm"}
              handler={handleOpenSoon}
              style={{ borderRadius: "0px" }}
            >
              <DialogHeader>
                <h2 className="text-sm lg:text-[17px] text-[#c40404] font-bold">
                  XOÁ 1 BỘ PHIM SẮP CHIẾU
                </h2>
              </DialogHeader>
              <DialogBody divider>
                <div className="mb-5 w-full">
                  <p className="my-2 text-[#000000]">
                    Bạn có chắc là muốn xóa phim không?
                  </p>
                </div>
              </DialogBody>
              <DialogFooter>
                <button
                  className="px-6 my-5 py-2 text-sm text-white bg-[#c40404]"
                  onClick={() => handleDeleteMovieSoon(id)}
                >
                  Tiếp tục
                </button>
              </DialogFooter>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ManageMovie);
