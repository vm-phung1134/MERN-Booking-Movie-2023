import { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderPublic from "../components/headerPublic";
import { getAllMovie } from "../../../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import SpinnerLoading from "../components/spinnerLoading";
import FooterPublic from "../components/footerPublic";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Breadcrumbs,
} from "@material-tailwind/react";
import SupportForm from "./SupportForm";
import Data from "../components/TranslationEnglish/Data.json";

function Support() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const [isActive, setIsActive] = useState("1");
  const [content, setContent] = useState("");
  const language = useSelector((state) => state.language.language);
  const [loadingPage, setLoadingPage] = useState(false);
  const handleClickActive = (e) => {
    setIsActive(e.target.value);
  };
  const [openAccordion, setOpenAccordion] = useState(1);

  const handleOpenAccordion = (value) => {
    setOpenAccordion(openAccordion === value ? 0 : value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllMovie());
      setLoadingPage(false);
    }, 1300);
    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch]);
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
            <div className="lg:m-16 my-10 mx-5 grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 mr-3">
                <Breadcrumbs className="bg-transparen p-0 my-5">
                  <Link to="/home" className="text-gray-400">
                    {content === "" ? "Trang chủ" : content.support.linkHome}
                  </Link>
                  <Link className="text-gray-400">
                    {content === ""
                      ? "Hỗ trợ lấy ý kiến"
                      : content.support.linkSp}
                  </Link>
                  <Link className="text-gray-200">
                    {content === "" ? "Góp ý" : content.support.feedback}
                  </Link>
                </Breadcrumbs>
                <div>
                  <button
                    style={{ background: isActive === "1" ? "#E50914" : "" }}
                    value="1"
                    onClick={handleClickActive}
                    className="py-2 px-4 text-sm uppercase text-white rounded-md ease-in-out duration-500"
                  >
                    {content === "" ? "góp ý" : content.support.feedback}
                  </button>
                  <button
                    value="2"
                    style={{ background: isActive === "2" ? "#E50914" : "" }}
                    onClick={handleClickActive}
                    className="py-2 px-4 text-sm uppercase text-white rounded-md ease-in-out duration-500"
                  >
                    {content === "" ? "giải đáp" : content.support.answer}
                  </button>
                </div>
                {isActive === "1" && <SupportForm />}

                {isActive === "2" && (
                  <div className="my-5">
                    <Accordion open={openAccordion === 1}>
                      <AccordionHeader
                        className="text-gray-400  text-sm lg:text-[16px]"
                        onClick={() => handleOpenAccordion(1)}
                      >
                        Tôi có thể dùng tài khoản thành viên để mua vé nhóm
                        không ?
                      </AccordionHeader>
                      <AccordionBody className="text-gray-500">
                        Bạn có thể cung cấp mã barcode trên mobile app/thẻ thành
                        viên trong quá trình giao dịch mua vé nhóm để được tích
                        điểm bạn nhé, tuy nhiên mỗi tài khoản chỉ áp dụng giá vé
                        thành viên tối đa 8 vé/ngày bạn nhé.
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={openAccordion === 2}>
                      <AccordionHeader
                        className="text-gray-400  text-sm lg:text-[16px]"
                        onClick={() => handleOpenAccordion(2)}
                      >
                        Quy trình đặt vé của hệ thống như thế nào ?
                      </AccordionHeader>
                      <AccordionBody className="text-gray-500">
                        <span className="text-red-500">Bước 1: </span>
                        <p>
                          Bạn truy cập vào Website/App của Galaxy, đăng nhập tài
                          khoản thành viên trước khi mua vé để hệ thống tích
                          điểm vào tài khoản thành viên của bạn.
                        </p>
                        <br></br>
                        <span className="text-red-500">Bước 2: </span>
                        <p>
                          Bạn vào mục Mua vé đối với Website/chọn Phim đang
                          chiếu đối với App, bạn chọn Rạp - chọn Phim - chọn
                          Suất chiếu - chọn Số lượng ghế tối đa 8 ghế cho một
                          giao dịch/Combo bắp nước - chọn Ghế - tiến hành thanh
                          toán.
                        </p>
                        <br></br>
                        <span className="text-red-500">Bước 3: </span>
                        <p>
                          Tại bước thanh toán, bạn điền vào các thông tin đã
                          được cấp trước đó để test hệ thống. Sau đó bạn có thể
                          tiến hành thanh toán bằng nhiều hình thức.
                        </p>{" "}
                        <br></br>
                        <span className="text-red-500">Bước 4: </span>
                        <p>
                          Sau 5 phút bạn sẽ được đưa đến trang túi vé của bạn.
                          Tại có thể check lại thông tin và nhớ chụp mã QR để
                          lấy vé tại quầy.
                        </p>
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={openAccordion === 3}>
                      <AccordionHeader
                        className="text-gray-400  text-sm lg:text-[16px]"
                        onClick={() => handleOpenAccordion(3)}
                      >
                        Làm sao để góp ý hay thiếu nại với hệ thống ?
                      </AccordionHeader>
                      <AccordionBody className="text-gray-500">
                        <p>
                          Bạn có thể vào mục hỗ trợ tại webite bằng cách điền
                          vào các thông tin cá nhân và lỗi hay góp ý của bạn.
                          Sau đó nhấn gửi để hệ thống ghi nhận hoặc bạn có liên
                          hệ thông qua Email của hệ thống và hot line của trang.
                        </p>
                      </AccordionBody>
                    </Accordion>
                  </div>
                )}
              </div>
              <div>
                <button className="my-5 uppercase lg:mt-0 lg:ml-8 text-white text-sm lg:text-[15px] py-[10px] border-b-[3px] border-[#E50914]">
                  {content === ""
                    ? "phim đang chiếu"
                    : content.movie.titleMovieNow}
                </button>
                <div className="grid grid-cols-1 ml-0 lg:ml-8 mb-5">
                  {movies.map((movie, index) => (
                    <div key={movie._id}>
                      {index < 4 && (
                        <div className="">
                          <div className="relative">
                            <img
                              className="w-[370px] bg-cover"
                              src={movie.image}
                              alt=""
                            ></img>
                            <Link to={`/movie-now/${movie._id}`}>
                              <div className="absolute max-w-[370px] opacity-0 hover:opacity-100 transition duration-500 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                                <Link to="/booking">
                                  <button
                                    className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                            border text-sm border-white py-[13px] px-[20px] hover:bg-[#E50914] hover:border-none"
                                  >
                                    MUA VÉ
                                  </button>
                                </Link>
                              </div>
                            </Link>
                          </div>
                          <div className="text-[15px] my-2">
                            <p className="text-white uppercase">{movie.name}</p>
                            <p className="text-gray-500 uppercase">
                              {movie.namevn}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex justify-center ml-2 lg:ml-8 pt-5">
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
              </div>
            </div>
            <div className="pb-20"></div>
            <FooterPublic />
          </div>
        )}
      </div>
    </>
  );
}

export default memo(Support);
