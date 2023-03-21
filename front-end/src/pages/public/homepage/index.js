/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import HeaderPublic from "../components/headerPublic";
import MovieNow from "../movie/homeMovie/movieNowList";
import MovieSoon from "../movie/homeMovie/movieSoonList";
import { Link } from "react-router-dom";
import { getAllBlog } from "../../../redux/actions/blogActions";
import { getAllEvent } from "../../../redux/actions/eventActions";
import SpinnerLoading from "../components/spinnerLoading";
import { useSelector, useDispatch } from "react-redux";
import FooterPublic from "../components/footerPublic";
import Blogs from "../blog&event/blogs";
import Events from "../blog&event/events";
import slide1 from "./assets/slide_1.webp";
import slide2 from "./assets/slide_2.jpg";
import slide3 from "./assets/slide_3.png";
import Data from "../components/TranslationEnglish/Data.json";

function HomePage() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const events = useSelector((state) => state.events.events);
  const [loadingPage, setLoadingPage] = useState(false);
  const [stateMovie, setStateMovie] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [content, setContent] = useState("");
  const language = useSelector((state) => state.language.language);

  const handleClickMovie = useCallback(() => {
    setStateMovie(!stateMovie);
  }, [stateMovie]);

  const slides = [
    {
      url: `${slide2}`,
      content: {
        h2: "ĐÓN CHỜ SỰ QUAY TRỞ LẠI CỦA MỘT KỶ NGUYÊN MỚI",
        h3: "TRANSFORMERS",
        h4: "CHIẾN BINH CUỐI CÙNG",
        rating: "8.5/10",
        discription:
          "Chiến Binh Cuối Cùng là phần tiếp theo về Robot biến hình ăn khách. 'Chiến Binh Cuối Cùng' phá nát những huyền thoại cốt lõi của loạt phim Transformers, và tái định nghĩa thế nào là anh hùng. Con người và các Transformer đang có chiến tranh, Optimus Prime đã biến mất. Chìa khóa để cứu tương lai của chúng ta đang được chôn vùi trong những bí mật của quá khứ, trong lịch sử ẩn còn được giữ kín của các Transformer trên Trái Đất.",
        btn: "COMING SOON",
      },
    },
    {
      url: `${slide1}`,
      content: {
        h2: "TOP PHIM ĐIỆN ẢNH DOANH THU CAO NHẤT PHÒNG VÉ",
        h3: "TOPGUN - PHI CÔNG SIÊU ĐẲNG MAVERICK",
        rating: "8.7/10",
        discription:
          "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
        btn: "ĐẶT VÉ NGAY",
      },
    },
    {
      url: `${slide3}`,
      content: {
        h2: "MỘT TÁC PHẨM KINH DỊ TỪ NHÀ SẢN XUẤT NEW LINE CINEMA",
        h3: "IT - CHÚ HỀ MA QUÁI",
        rating: "7.7/10",
        discription:
          "Là một trong những bộ phim kinh dị hứa hẹn nhất năm, bộ phim chuyển thể từ tiểu thuyết rùng rợn nhất của Stephen King mang đến những cảnh phim kinh hoàng hơn cùng cái nhìn trực diện về gã hề ác ma Pennywise. Sau 17 năm kể từ lần đầu xuất hiện trong bản chuyển thể phim truyền hình, khán giả mới có dịp khóc thét một lần nữa trước sự trở lại ma mị, tàn bạo và kinh hoàng của Pennywise trên màn ảnh rộng.",
        btn: "ĐẶT VÉ NGAY",
      },
    },
  ];
  // Back Slide
  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);
  // Next Slide
  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      setLoadingPage(false);
      await dispatch(getAllBlog());
      await dispatch(getAllEvent());
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     const isLastSlide = currentIndex === slides.length - 1;
  //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //     setCurrentIndex(newIndex);
  //   }, 5000);
  // })

  return (
    <div>
      {loadingPage === true ? (
        <SpinnerLoading />
      ) : (
        <div>
          <div className="h-screen w-full group">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full h-full bg-center bg-cover duration-500"
            >
              <div className="bg-gradient-to-r from-black/100 h-screen w-full">
                <HeaderPublic />
                <div className="relative lg:mt-28 mt-16">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="absolute z-10 text-white translate-x-[-50%] top-[25%] lg:top-[50%] left-8 md:left-12 lg:left-20 w-[80%] lg:w-[50%]"
                  >
                    <h2 className="lg:text-[15px] text-sm">
                      {slides[currentIndex].content.h2}
                    </h2>
                    <h3 className="lg:text-[40px] md:text-[28px] text-[20px] font-bold my-2">
                      {slides[currentIndex].content.h3}
                    </h3>
                    <h4 className="lg:text-[40px] md:text-[28px] text-[20px] font-bold my-2">
                      {slides[currentIndex].content.h4}
                    </h4>
                    {slides[currentIndex].content.rating !== "" ? (
                      <button className="bg-[#c40404] lg:text-[14px] text-[12px] rounded-full p-2 lg:p-3 mb-2">
                        {slides[currentIndex].content.rating}{" "}
                        <i className="fas fa-star"></i>
                      </button>
                    ) : (
                      <></>
                    )}
                    <p className="lg:block md:text-[13px] lg:text-[16px] font-thin text-[12px] text-justify">
                      {slides[currentIndex].content.discription}
                    </p>
                    <Link to="/booking">
                      <button className="py-2 text-[12px] lg:text-[14px] px-2 lg:px-3 bg-[#c40404] mt-3 md:mt-5">
                        {slides[currentIndex].content.btn} &ensp;
                        <i className="fas fa-chevron-right text-[12px]"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] lg:left-5 left-0 text-xl lg:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <button onClick={prevSlide}>
                <i className="fas fa-chevron-left text-[20px]"></i>
              </button>
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] lg:right-5 right-0 lg:text-xl lg:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <button onClick={nextSlide}>
                <i className="fas fa-chevron-right text-[20px]"></i>
              </button>
            </div>
          </div>
          {/* content */}
          <div className="mx-auto px-2 lg:px-[50px] bg-black">
            <div>
              <div className="flex justify-between">
                <div className="text-white">
                  <button
                    className="md:mx-3 mx-2 text-[13px] lg:text-[15px] py-[20px] uppercase border-[#E50914]"
                    onClick={handleClickMovie}
                    style={{
                      borderBottom:
                        stateMovie === true ? "3px solid #E50914" : "none",
                    }}
                  >
                    {content === ""
                      ? "phim đang chiếu"
                      : content.title.titleMovieNow}
                  </button>
                  <button
                    className="md:mx-3 ml-2 py-[20px] text-[13px] lg:text-[15px] uppercase"
                    onClick={handleClickMovie}
                    style={{
                      borderBottom:
                        stateMovie === false ? "3px solid #E50914" : "none",
                    }}
                  >
                    {content === ""
                      ? "phim sắp chiếu"
                      : content.title.titleMovieSoon}
                  </button>
                </div>
                <div className="py-[5px] text-white">
                  <p className="w-[120px] brightness-200 h-10 bg-[url('https://www.galaxycine.vn/website/images/ic_hotnews.png')]"></p>
                  <Link to="/movie-now/63b93dfd1d4172de899ce6ca">
                    <p className="text-zinc-400 text-[12px] lg:text-[17px]">
                      Avatar: The Way Of Water
                    </p>
                  </Link>
                </div>
              </div>
              {/* RENDER PHIM ĐANG CHIẾU OR PHIM SẮP CHIẾU */}
              {stateMovie === true ? <MovieNow /> : <MovieSoon />}
              <div className="pt-20">
                <button
                  disabled
                  className="text-white py-[17px] uppercase text-[15px] border-b-[3px] border-[#E50914]"
                >
                  {content === "" ? "review phim" : content.title.blogfilm}
                </button>
                <div className="grid lg:grid-cols-2 grid-cols-1 py-10 gap-4">
                  {blogs.map((blog, index) => (
                    index < 6 &&
                    <Blogs key={blog._id} blog={blog} />
                  ))}
                </div>
                <div>
                  <div className="flex justify-center mt-5">
                    <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                      <Link to="/blog&event">
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
              </div>
              {/* sự kiện */}
              <div className="pt-5">
                <button
                  disabled
                  className="text-white py-[17px] uppercase text-[15px] border-b-[3px] mb-10 border-[#E50914]"
                >
                  {content === "" ? "tin khuyến mãi" : content.title.event}
                </button>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
                  {events.map((event) => (
                    <Events key={event._id} event={event} />
                  ))}
                </div>
                <div>
                  <div className="flex justify-center mt-5">
                    <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                      <Link to="/blog&event">
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
              </div>

              {/* về chúng tôi */}
              <div className="py-5">
                <button className="text-white py-[17px]  text-[15px] border-b-[3px] mb-10 border-[#E50914]">
                  REACT FLIX
                </button>
                <p className="text-gray-400 text-sm lg:text-[15px] text-justify">
                  &ensp;React Flix là một trong những công ty một mình tao đầu
                  tiên về điện ảnh được thành lập từ năm 2003, đã khẳng định
                  thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu
                  thích nhất. Ngoài hệ thống rạp chiếu phim hiện đại, thu hút
                  hàng triệu lượt người đến xem, React Flix còn hấp dẫn khán giả
                  bởi không khí thân thiện cũng như chất lượng dịch vụ hàng đầu.
                  Đến website galaxycine.vn, khách hàng sẽ dễ dàng tham khảo các
                  phim hay nhất, phim mới nhất đang chiếu hoặc sắp chiếu luôn
                  được cập nhật thường xuyên. Lịch chiếu tại tất cả hệ thống rạp
                  chiếu phim của React Flix cũng được cập nhật đầy đủ hàng ngày
                  hàng giờ trên trang chủ.
                  <br></br>
                  &ensp;Từ vũ trụ điện ảnh Marvel, người hâm mộ sẽ có cuộc tái
                  ngộ với Người Nhện qua Spider-Man: No Way Home hoặc Doctor
                  Strange 2. Ngoài ra 007: No Time To Die, Turning Red, Minions:
                  The Rise Of Gru..., là những tác phẩm hứa hẹn sẽ gây bùng nổ
                  phòng vé trong thời gian tới. Giờ đây đặt vé tại React Flix
                  càng thêm dễ dàng chỉ với vài thao tác vô cùng đơn giản. Để
                  mua vé, hãy vào tab Mua vé. Quý khách có thể chọn Mua vé theo
                  phim, theo rạp, hoặc theo ngày. Sau đó, tiến hành mua vé theo
                  các bước hướng dẫn. Chỉ trong vài phút, quý khách sẽ nhận được
                  tin nhắn và email phản hồi Đặt vé thành công của React Flix.
                  Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của React
                  Flix hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm
                  bất kỳ công đoạn nào nữa.<br></br>&ensp; Nếu bạn đã chọn được
                  phim hay để xem, hãy đặt vé cực nhanh bằng box Mua Vé Nhanh
                  ngay từ Trang Chủ. Chỉ cần một phút, tin nhắn và email phản
                  hồi của Galaxy Cinema sẽ gửi ngay vào điện thoại và hộp mail
                  của bạn. Nếu chưa quyết định sẽ xem phim mới nào, hãy tham
                  khảo các bộ phim hay trong mục Phim Đang Chiếu cũng như Phim
                  Sắp Chiếu tại rạp chiếu phim bằng cách vào mục Bình Luận Phim
                  ở Góc Điện Ảnh để đọc những bài bình luận chân thật nhất, tham
                  khảo và cân nhắc. Sau đó, chỉ việc đặt vé bằng box Mua Vé
                  Nhanh ngay ở đầu trang để chọn được suất chiếu và chỗ ngồi vừa
                  ý nhất. React Flix luôn có những chương trình khuyến mãi, ưu
                  đãi, quà tặng vô cùng hấp dẫn như giảm giá vé, tặng vé xem
                  phim miễn phí, tặng Combo, tặng quà phim… dành cho các khách
                  hàng.
                </p>
              </div>
            </div>
          </div>
          <FooterPublic />
        </div>
      )}
    </div>
  );
}

export default HomePage;
