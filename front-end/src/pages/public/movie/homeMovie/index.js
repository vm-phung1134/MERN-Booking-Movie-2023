/* eslint-disable react-hooks/exhaustive-deps */
import HeaderPublic from "../../components/headerPublic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SpinnerLoading from "../../components/spinnerLoading";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { getAllMovie } from "../../../../redux/actions/movieActions";
import { getAllMovieSoon } from "../../../../redux/actions/movieSoonActions";
import FooterPublic from "../../components/footerPublic";
import Data from "../../components/TranslationEnglish/Data.json";

function HomeMovie() {
  const dispatch = useDispatch();
  const [loadingPage, setLoadingPage] = useState(false);
  const {movies} = useSelector((state) => state.movies);
  const {movieSoons} = useSelector((state) => state.movieSoons);
  const [isActive, setIsActive] = useState("1");
  const [content, setContent] = useState("");
  const language = useSelector((state) => state.language.language);
  const handleClickActive = (e) => {
    setIsActive(e.target.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllMovie());
      await dispatch(getAllMovieSoon());
      setLoadingPage(false);
    }, 1300);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  useEffect(() => {
    if (language === "English") {
      setContent(Data.english);
    } else {
      setContent("");
    }
  }, [language]);
  return (
    <>
      <div className="bg-black min-h-screen max-h-full">
        <HeaderPublic />
        {loadingPage === true ? (
          <SpinnerLoading />
        ) : (
          <div>
            <div className="md:my-16 md:mx-16 my-10 mx-5">
              <Breadcrumbs className="bg-transparen p-0 my-5">
                <Link to="/home" className="text-gray-400">
                  {
                    content === ""? "Trang chủ": content.movie.linkHome
                  }
                </Link>
                <Link to="/movie" className="text-gray-400">
                {
                    content === ""? "Phim điện ảnh": content.movie.linkMovie
                  }
                </Link>
                <Link className="text-gray-200">{
                    content === ""? "Phim đang chiếu": content.movie.titleMovieNow
                  }</Link>
              </Breadcrumbs>
              <div>
                <button
                  style={{ background: isActive === "1" ? "#E50914" : "" }}
                  value="1"
                  onClick={handleClickActive}
                  className="py-2 px-4 text-sm  uppercase text-white rounded-md ease-in-out duration-500"
                >
                  {
                    content === ""? "phim đang chiếu": content.movie.titleMovieNow
                  }
                </button>
                <button
                  value="2"
                  style={{ background: isActive === "2" ? "#E50914" : "" }}
                  onClick={handleClickActive}
                  className="py-2 px-4 text-sm uppercase text-white rounded-md ease-in-out duration-500"
                >
                  {
                    content === ""? "phim sắp chiếu": content.movie.titleMovieSoon
                  }
                </button>
              </div>
              <div>
                {isActive === "1" ? (
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-10 gap-3">
                      {movies.slice().reverse().map((movie, index) => (
                        <div key={movie._id}>
                          {index < 15 && (
                            <div className="">
                              <div className="relative">
                                <img
                                  className="w-[370px] h-[270px] md:h-[370px] lg:h-[470px] bg-cover"
                                  src={movie.poster}
                                  alt=""
                                ></img>
                                <Link to={`/movie-now/${movie._id}`}>
                                  <div className="absolute opacity-0 hover:opacity-100 transition duration-500 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                                    <Link to="/booking">
                                      <button
                                        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                            border md:text-sm text-[12px] border-white py-[7px] px-[15px] md:py-[13px] md:px-[25px] hover:bg-[#E50914] hover:border-none"
                                      >
                                        MUA VÉ
                                      </button>
                                    </Link>
                                  </div>
                                </Link>
                              </div>
                              <div className="text-[15px]">
                                <p className="text-white truncate uppercase">
                                  {movie.name}
                                </p>
                                <p className="text-gray-500 truncate uppercase">
                                  {movie.namevn}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center my-5">
                      <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                        <div className="buttons">
                          <button className="btn">
                            <span></span>
                            <p
                              data-start="good luck!"
                              data-text="Let's go!"
                              data-title="Xem thêm"
                            ></p>
                          </button>
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-10 gap-3">
                      {movieSoons.slice().reverse().map((movie, index) => (
                        <div key={movie._id}>
                          {index < 15 && (
                            <div className="">
                              <div className="relative">
                                <img
                                  className="w-[370px] h-[270px] md:h-[370px] lg:h-[470px] bg-cover"
                                  src={movie.poster}
                                  alt=""
                                ></img>
                                <Link to={`/movie-soon/${movie._id}`}>
                                  <div className="absolute opacity-0 hover:opacity-100 transition duration-500 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                                    <Link to="/booking">
                                      <button
                                        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                            border md:text-sm text-[12px] border-white py-[7px] px-[15px] md:py-[13px] md:px-[25px] hover:bg-[#E50914] hover:border-none"
                                      >
                                        MUA VÉ
                                      </button>
                                    </Link>
                                  </div>
                                </Link>
                              </div>
                              <div className="text-[15px]">
                                <p className="text-white truncate uppercase">
                                  {movie.name}
                                </p>
                                <p className="text-gray-500 truncate uppercase">
                                  {movie.namevn}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center my-5">
                      <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                        <div className="buttons">
                          <button className="btn">
                            <span></span>
                            <p
                              data-start="good luck!"
                              data-text="Let's go!"
                              data-title="Xem thêm"
                            ></p>
                          </button>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <FooterPublic />
          </div>
        )}
        <div className="py-20"></div>
      </div>
    </>
  );
}

export default HomeMovie;
