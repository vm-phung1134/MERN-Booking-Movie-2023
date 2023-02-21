import HeaderPublic from "../components/headerPublic";
import { getAllBlog } from "../../../redux/actions/blogActions";
import { getAllEvent } from "../../../redux/actions/eventActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Events from "./events";
import Blogs from "./blogs";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SpinnerLoading from "../components/spinnerLoading";
import FooterPublic from "../components/footerPublic";

function BlogAndEvent() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const events = useSelector((state) => state.events.events);
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllBlog());
      await dispatch(getAllEvent());
      setLoadingPage(false);
    }, 1300);
    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch]);
  return (
    <>
      <div className="bg-black max-h-full">
        <HeaderPublic />
        {loadingPage === true ? (
          <SpinnerLoading />
        ) : (
          <div>
            <div className="lg:px-16 px-5 py-10 lg:py-20 text-white max-h-full">
              <Breadcrumbs className="bg-transparen p-0 mb-3">
                <Link to="/home" className="text-gray-400">
                  Trang chủ
                </Link>
                <Link className="text-gray-200">Góc điện ảnh & Sự kiện</Link>
              </Breadcrumbs>
              <button
                disabled
                className="text-white text-[15px] pr-6 py-[15px] mb-5  border-b-[3px] border-[#E50914]"
              >
                SỰ KIỆN
              </button>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-2 2xl:grid-cols-4 gap-5 lg:gap-4">
                {events.map((event) => (
                  <Events key={event._id} event={event} />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                  <Link>
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
            <div className="lg:px-16 px-5 text-white max-h-full w-full">
              <button
                disabled
                className="text-white text-[15px] pr-6 py-[15px] mb-5  border-b-[3px] border-[#E50914]"
              >
                BlOG ĐIỆN ẢNH
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-4">
                {blogs.map((blog) => (
                  <Blogs key={blog._id} blog={blog} />
                ))}
              </div>
            </div>
            <div className="flex justify-center py-10">
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
            <FooterPublic />
          </div>
        )}
      </div>
    </>
  );
}

export default BlogAndEvent;
