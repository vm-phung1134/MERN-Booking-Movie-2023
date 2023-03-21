/* eslint-disable react-hooks/exhaustive-deps */
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
import Data from "../components/TranslationEnglish/Data.json";

function BlogAndEvent() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const events = useSelector((state) => state.events.events);
  const [loadingPage, setLoadingPage] = useState(false);
  const [content, setContent] = useState("");
  const language = useSelector((state) => state.language.language);

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
      <div className="bg-black max-h-full">
        <HeaderPublic />
        {loadingPage === true ? (
          <SpinnerLoading />
        ) : (
          <div>
            <div className="lg:px-16 px-5 py-10 lg:py-20 text-white max-h-full">
              <Breadcrumbs className="bg-transparen p-0 mb-3">
                <Link to="/home" className="text-gray-400">
                  {content === "" ? "Trang chủ" : content.blog.linkHome}
                </Link>
                <Link className="text-gray-200">
                  {content === ""
                    ? "Góc điện ảnh & Sự kiện"
                    : content.blog.link}
                </Link>
              </Breadcrumbs>
              <div className="text-white max-h-full w-full">
                <button
                  disabled
                  className="text-white uppercase text-[15px] pr-6 py-[15px] mb-5  border-b-[3px] border-[#E50914]"
                >
                  {content === "" ? "blog điện ảnh" : content.blog.blog}
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
              <button
                disabled
                className="text-white uppercase text-[15px] pr-6 py-[15px] mb-5  border-b-[3px] border-[#E50914]"
              >
                {content === "" ? "sự kiện" : content.blog.event}
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
            <div className="lg:px-16 p-5 text-white max-h-full w-full">
              <button className="text-white py-[17px]  text-[15px] border-b-[3px] mb-10 border-[#E50914]">
                REACT FLIX
              </button>
              <p className="text-gray-400 text-sm lg:text-[15px] text-justify">
                &ensp;React Flix là một trong những công ty một mình tao đầu
                tiên về điện ảnh được thành lập từ năm 2023, đã khẳng định
                thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu
                thích nhất. Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng
                triệu lượt người đến xem, React Flix còn hấp dẫn khán giả bởi
                không khí thân thiện cũng như chất lượng dịch vụ hàng đầu. Đến
                website react flix, khách hàng sẽ dễ dàng tham khảo các phim hay
                nhất, phim mới nhất đang chiếu hoặc sắp chiếu luôn được cập nhật
                thường xuyên. Lịch chiếu tại tất cả hệ thống rạp chiếu phim của
                React Flix cũng được cập nhật đầy đủ hàng ngày hàng giờ trên
                trang chủ.
                <br></br>
                &ensp;Từ vũ trụ điện ảnh Marvel, người hâm mộ sẽ có cuộc tái ngộ
                với Người Nhện qua Spider-Man: No Way Home hoặc Doctor Strange
                2. Ngoài ra 007: No Time To Die, Turning Red, Minions: The Rise
                Of Gru..., là những tác phẩm hứa hẹn sẽ gây bùng nổ phòng vé
                trong thời gian tới. Giờ đây đặt vé tại React Flix càng thêm dễ
                dàng chỉ với vài thao tác vô cùng đơn giản. Để mua vé, hãy vào
                tab Mua vé. Quý khách có thể chọn Mua vé theo phim, theo rạp,
                hoặc theo ngày. Sau đó, tiến hành mua vé theo các bước hướng
                dẫn. Chỉ trong vài phút, quý khách sẽ nhận được tin nhắn và
                email phản hồi Đặt vé thành công của React Flix. Quý khách có
                thể dùng tin nhắn lấy vé tại quầy vé của React Flix hoặc quét mã
                QR để một bước vào rạp mà không cần tốn thêm bất kỳ công đoạn
                nào nữa.<br></br>&ensp; Nếu bạn đã chọn được phim hay để xem,
                hãy đặt vé cực nhanh bằng box Mua Vé Nhanh ngay từ Trang Chủ.
                Chỉ cần một phút, tin nhắn và email phản hồi của Galaxy Cinema
                sẽ gửi ngay vào điện thoại và hộp mail của bạn. Nếu chưa quyết
                định sẽ xem phim mới nào, hãy tham khảo các bộ phim hay trong
                mục Phim Đang Chiếu cũng như Phim Sắp Chiếu tại rạp chiếu phim
                bằng cách vào mục Bình Luận Phim ở Góc Điện Ảnh để đọc những bài
                bình luận chân thật nhất, tham khảo và cân nhắc. Sau đó, chỉ
                việc đặt vé bằng box Mua Vé Nhanh ngay ở đầu trang để chọn được
                suất chiếu và chỗ ngồi vừa ý nhất. React Flix luôn có những
                chương trình khuyến mãi, ưu đãi, quà tặng vô cùng hấp dẫn như
                giảm giá vé, tặng vé xem phim miễn phí, tặng Combo, tặng quà
                phim… dành cho các khách hàng.
              </p>
            </div>
            <div className="py-10"></div>
            <FooterPublic />
          </div>
        )}
      </div>
      
    </>
  );
}

export default BlogAndEvent;
