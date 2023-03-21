import HeaderPublic from "../components/headerPublic";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import FooterPublic from "../components/footerPublic";
import { useSelector, useDispatch } from "react-redux";
import {
  getOneBlog,
  getAllBlog,
  updateOneBlog,
} from "../../../redux/actions/blogActions";
import { useEffect, useState, memo } from "react";

function BlogDetail() {
  const dispatch = useDispatch();
  const blogId = useParams();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const { blog } = useSelector((state) => state.blog);
  const userName = localStorage.getItem("user");
  const [loadMore, setLoadMore] = useState(5);
  const [comment, setComment] = useState(""); // set value input form
  const [like, setLike] = useState(blog.like);
  const [listComment, setListComment] = useState([]);
  //define new cmt user
  let cmt = {
    userName: userName,
    date: date,
    content: comment,
  };
  const { blogs } = useSelector((state) => state.blogs);
  useEffect(() => {
    blogs.map((bg) => bg._id === blogId.id && setListComment(bg.comments)); // get comment from blogs
  }, [blogId.id, blogs]);

  // Content in user's port
  const handlePostComment = (e) => {
    setComment(e.target.value);
  };

  // Handle Submit comment
  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      updateOneBlog(blogId.id, {
        // lưu comment vào db
        ...blog,
        comments: [cmt, ...listComment],
      })
    );
    setListComment((prev) => [cmt, ...prev]); //hiển thị list comments
    setComment(""); //xóa input comment
  };

  const handleLike = () => {
    dispatch(
      updateOneBlog(blogId.id, {
        ...blog,
        like: blog.like + 1,
      })
    );
    setLike((prev) => prev + 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getOneBlog(blogId.id));
    dispatch(getAllBlog());
  }, [blogId.id, dispatch]);

  useEffect(() => {
    setLike(blog.like);
  }, [blog.like]);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${blog.mainImage})` }}
        className="bg-cover bg-center max-h-full"
      >
        <div className="bg-black/90 h-full w-full">
          <HeaderPublic />
          <div className="md:px-16 px-5 md:py-20 py-16 text-white w-full">
            <div>
              <Breadcrumbs className="bg-transparen p-0 mb-3">
                <Link to="/home" className="text-gray-400">
                  Trang chủ
                </Link>
                <Link to="/blog&event" className="text-gray-400">
                  Góc điện ảnh & Sự kiện
                </Link>
                <Link className="text-white">Blog điện ảnh</Link>
              </Breadcrumbs>
              <h1 className="md:text-[20px] text-[17px] font-medium uppercase">
                {blog.name}
              </h1>
              <div className="leading-7">
                <button
                  onClick={handleLike}
                  className="bg-blue-500 font-thin my-5 mr-1 py-2 px-5 shadow-lg shadow-gray-800 text-sm"
                >
                  <i className="fas fa-heart"></i> Thích {like}
                </button>
                <button className="bg-[#d4491f] font-thin ml-1 my-5 py-2 px-5 shadow-lg shadow-gray-800  text-sm">
                  <i className="fas fa-comment"></i> Đánh giá &#40;{" "}
                  {listComment.length} &#41;
                </button>
                <p className="text-justify text-sm md:text-[15px] font-thin">
                  {blog.mainContent}
                </p>
              </div>
            </div>
            <div className="my-10 mb-3">
              <button
                disabled
                className="text-white text-[15px] pr-6 py-[15px] mb-5  border-b-[3px] border-[#E50914]"
              >
                BÀI VIẾT LIÊN QUAN
              </button>
              {blogs.map((blog) => (
                <Link
                  key={blog._id}
                  className="hover:text-red-500"
                  to={`/blog-detail/${blog._id}`}
                >
                  <p className="text-sm my-2">&#10230; {blog.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-16 px-5 md:py-10 py-5 text-white bg-black w-full">
        <button
          disabled
          className="text-white pb-3 text-[13px] md:text-[15px] md:pr-6 md:py-[15px] mb-3 md:mb-5  border-b-[3px] border-[#E50914]"
        >
          GÓC BÌNH LUẬN
        </button>
        <div>
          <p className="md:text-sm text-[13px]">
            {listComment.length} bình luận
          </p>
        </div>
        <div className="grid md:grid-cols-9 grid-cols-7 lg:grid-cols-11 xl:grid-cols-12 my-6 lg:my-7 gap-x-2 md:gap-x-3 lg:gap-x-3 2xl:gap-x-5">
          <div className="col-span-1">
            <p className="bg-[#E50914] xl:mx-5 md:mx-3 mx-0 text-white px-2 md:px-3 py-3 text-center rounded-full text-[12px] md:text-sm">
              RF
            </p>
          </div>
          <div className="lg:col-span-9 xl:col-span-11 md:col-span-8 col-span-6">
            <form onSubmit={onSubmit}>
              <input
                value={comment}
                onChange={handlePostComment}
                type="text"
                className="border-b w-[80%] md:w-[90%] placeholder:text-[12px] placeholder:md:text-sm  focus:outline-none bg-transparent placeholder:text-gray-300 py-2"
                placeholder="Viết bình luận..."
              />
              <button type="submit" className="lg:px-4 md:px-3 px-2">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {blogs.map((blog) => (
          <div key={blog._id}>
            {blog._id === blogId.id ? (
              <div>
                {listComment.map((bg, index) =>
                  index < loadMore ? (
                    <div key={bg._id}>
                      <div className="grid md:grid-cols-9 grid-cols-7 lg:grid-cols-11 xl:grid-cols-12 my-6 lg:my-7 gap-x-2 md:gap-x-3 lg:gap-x-3 2xl:gap-x-5">
                        <div>
                          <p className="bg-[#E50914] xl:mx-5 md:mx-3 mx-0 text-white px-2 md:px-3 py-3 text-center rounded-full text-[12px] md:text-sm">
                            RF
                          </p>
                        </div>
                        <div className="lg:col-span-9 xl:col-span-11 md:col-span-8 col-span-6">
                          <p className="capitalize font-medium text-[13px] md:text-sm lg:text-[15px]">
                            {bg.userName}{" "}
                            <span className="font-thin text-[12px]">
                              {bg.date}
                            </span>{" "}
                          </p>
                          <p className="py-2 text-[12px] md:text-sm lg:text-[15px]">
                            {bg.content}
                          </p>
                          <button className="mr-2 text-[12px] md:text-sm lg:text-xl">
                            <i className="fas fa-thumbs-up"></i>
                          </button>
                          <button className="ml-2 text-[12px] md:text-sm lg:text-xl">
                            <i className="fas fa-thumbs-down"></i>
                          </button>
                          <button className="ml-4 font-thin text-[12px] md:text-sm lg:text-[15px]">
                            Phản hồi
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
        <div className="flex justify-center lg:my-[8rem] md:my-[6rem] my-[4rem]">
          <button
            onClick={() => setLoadMore(10)}
            className="md:p-3 p-2 text-[13px]  md:text-sm text-white bg-[#ce0000]"
          >
            TÀI THÊM BÌNH LUẬN
          </button>
        </div>
      </div>
      <FooterPublic />
    </>
  );
}

export default memo(BlogDetail);
