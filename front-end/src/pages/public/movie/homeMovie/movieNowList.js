import React, { useEffect } from "react";
import Movie from "./movieNow";
import { Link } from "react-router-dom";
import { getAllMovie } from "../../../../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import { memo } from "react";

function MovieNow() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  useEffect(() => {
    dispatch(getAllMovie());
  }, [dispatch]);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-3 gap-3 justify-items-center mt-10"
      >
        {movies.map((movie, index) => (
          <div key={movie._id}>{index < 6 && <Movie movie={movie} />}</div>
        ))}
      </div>
      <div>
        <div className="flex justify-center mt-5">
          <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
            <Link to="/movie">
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
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default memo(MovieNow);
