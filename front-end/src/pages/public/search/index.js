/* eslint-disable react-hooks/exhaustive-deps */
import HeaderPublic from "../components/headerPublic";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../../../redux/actions/movieActions";
import { getAllMovieSoon } from "../../../redux/actions/movieSoonActions";
import { Link } from "react-router-dom";
import FooterPublic from "../components/footerPublic";
import Data from "../components/TranslationEnglish/Data.json";

function SearchPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const movieSoons = useSelector((state) => state.movieSoons.movieSoons);
  const [isActive, setIsActive] = useState("1");
  const [isSearching, setIsSearching] = useState("");
  const [searchCurrentMovie, setSearchCurrentMovie] = useState([]);
  const [searchSoonMovie, setSearchSoonMovie] = useState([]);
  const [content, setContent] = useState("");
  const language = useSelector((state) => state.language.language);
  const handleClickActive = (e) => {
    setIsActive(e.target.value);
  };
  const handleSearch = (e) => {
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
    setSearchSoonMovie(
      movieSoons.filter((entry) =>
        Object.values(entry).some(
          (val) =>
            typeof val === "string" &&
            val.toLowerCase().includes(isSearching.toLowerCase())
        )
      )
    );
  };
  useEffect(() => {
    dispatch(getAllMovie());
    dispatch(getAllMovieSoon());
    if (language === "English") {
      setContent(Data.english);
    } else {
      setContent("");
    }
  }, [language]);
  useEffect(() => {
    setSearchCurrentMovie(movies);
    setSearchSoonMovie(movieSoons);
  }, [movieSoons, movies]);
  return (
    <>
      <div className="bg-black min-h-screen max-h-full w-full">
        <HeaderPublic />
        <div className="pt-20 pb-10">
          <div className="flex justify-center">
            <button
              style={{ background: isActive === "1" ? "#E50914" : "" }}
              value="1"
              onClick={handleClickActive}
              className="py-2 px-4 text-[13px] uppercase lg:text-sm  text-white rounded-md ease-in-out duration-500"
            >
              {content === "" ? "phim đang chiếu" : content.title.titleMovieNow}
            </button>
            <button
              value="2"
              style={{ background: isActive === "2" ? "#E50914" : "" }}
              onClick={handleClickActive}
              className="py-2 px-4 text-[13px] uppercase lg:text-sm text-white rounded-md ease-in-out duration-500"
            >
              {content === "" ? "phim sắp chiếu" : content.title.titleMovieSoon}
            </button>
            <button
              value="3"
              style={{ background: isActive === "3" ? "#E50914" : "" }}
              onClick={handleClickActive}
              className="py-2 px-4 text-[13px] uppercase lg:text-sm text-white rounded-md ease-in-out duration-500"
            >
              {content === "" ? "diễn viên" : content.support.actor}
            </button>
          </div>
        </div>
        <div className="md:px-10 lg:px-20 px-5">
          <input
            type="text"
            onChange={handleSearch}
            placeholder={content === ""
            ? "Tìm kiếm React Flix"
            : content.title.search
        }
            className=" placeholder:text-gray-600 focus:outline-none focus:border-2 focus:border-green-700 text-white border px-5 border-gray-700 w-full py-4 bg-transparent"
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          {isActive === "1" && (
            <div className="grid-cols-2 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-10 md:mx-10 lg:mx-20">
              {searchCurrentMovie.slice().reverse().map((movie) => (
                <div key={movie._id}>
                  <div className="">
                    <div className="relative">
                      <img
                        className="w-[370px] h-[350px] md:h-[400px] lg:h-[450px] bg-cover"
                        src={movie.poster}
                        alt=""
                      ></img>
                      <Link to={`/movie-now/${movie._id}`}>
                        <div className="absolute opacity-0 hover:opacity-100 transition duration-500 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                          <Link to="/booking">
                            <button
                              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                          border text-[12px] border-white py-[7px] px-[15px] md:py-[13px] md:px-[25px] hover:bg-[#c40404] hover:border-none"
                            >
                              MUA VÉ
                            </button>
                          </Link>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          {isActive === "2" && (
            <div className="grid-cols-2 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-10 md:mx-10 lg:mx-20">
              {searchSoonMovie.slice().reverse().map((movie) => (
                <div key={movie._id}>
                  <div className="">
                    <div className="relative">
                      <img
                        className="w-[370px] h-[350px] md:h-[400px] lg:h-[450px] bg-cover"
                        src={movie.poster}
                        alt=""
                      ></img>
                      <Link to={`/movie-soon/${movie._id}`}>
                        <div className="absolute opacity-0 hover:opacity-100 transition duration-500 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                          <Link to="/booking">
                            <button
                              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                          border text-[12px] border-white py-[7px] px-[15px] md:py-[13px] md:px-[25px] hover:bg-[#c40404] hover:border-none"
                            >
                              MUA VÉ
                            </button>
                          </Link>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="py-20"></div>
      </div>
      <FooterPublic />
    </>
  );
}

export default SearchPage;
