import HeaderPublic from "../components/headerPublic";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import FooterPublic from "../components/footerPublic"
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
  const [newBlog, setnewBlog] = useState([]); // get comment from blogs
  let cmt = {
    //define new cmt user
    userName: userName,
    date: date,
    content: comment,
  };

  const blogs = useSelector((state) => state.blogs.blogs);
  useEffect(() => {
    blogs.map((blog) => blog._id === blogId.id && setnewBlog(blog.comments));
  }, [blogId.id, blogs]);

  const handlePostComment = (e) => {
    setComment(e.target.value);
  };
  const values = {
    ...blog,
    comments: [cmt, ...newBlog],
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateOneBlog(blogId.id, values));
    setnewBlog((prev) => [cmt, ...prev]); //set lại array render
    setComment(""); //xóa input text
  };

  useEffect(() => {
    dispatch(getOneBlog(blogId.id));
    dispatch(getAllBlog());
  }, [blogId.id, dispatch]);
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
                <button className="bg-blue-500 my-5 text-[12px] md:text-[15px] mr-1 py-1 px-3 text-sm">
                  <i className="fas fa-thumbs-up"></i> Thích {blog.like}
                </button>
                <button className="bg-[#d4491f] text-[12px] md:text-[15px]  ml-1 my-5 py-1 px-3 text-sm">
                  ĐÁNH GIÁ
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
          className="text-white text-[15px] pr-6 py-[15px] mb-5  border-b-[3px] border-[#E50914]"
        >
          GÓC BÌNH LUẬN BÀI VIẾT
        </button>
        <div>
          <p className="text-sm">{newBlog.length} bình luận</p>
        </div>
        <div className="grid grid-cols-12 mt-5 gap-x-5">
          <div>
            <p className="bg-[#E50914] mx-5 text-white p-3 text-center rounded-full text-sm">
              RF
            </p>
          </div>
          <div className="col-span-11">
            <form onSubmit={onSubmit}>
              <input
                value={comment}
                onChange={handlePostComment}
                type="text"
                className="border-b w-[90%] focus:outline-none bg-transparent placeholder:text-gray-300 py-2"
                placeholder="Viết bình luận..."
              />
              <button type="submit" className="px-4">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {blogs.map((blog) => (
          <div key={blog._id}>
            {blog._id === blogId.id ? (
              <div>
                {newBlog.map(
                  (bg, index) =>
                    index < loadMore ? (
                      <div key={bg._id}>
                        <div className="grid text-sm my-16 grid-cols-12 gap-x-5">
                          <div>
                            <p className="bg-[#E50914] mx-5 text-white p-3 text-center rounded-full text-sm">
                              RF
                            </p>
                          </div>
                          <div className="col-span-11">
                            <p className="capitalize font-medium">
                              {bg.userName}{" "}
                              <span className="font-thin text-[12px]">
                                {bg.date}
                              </span>{" "}
                            </p>
                            <p className="py-2">{bg.content}</p>
                            <button className="mr-2 text-xl">
                              <i className="fas fa-thumbs-up"></i>
                            </button>
                            <button className="ml-2 text-xl">
                              <i className="fas fa-thumbs-down"></i>
                            </button>
                            <button className="ml-4">Phản hồi</button>
                          </div>
                        </div>
                      </div>
                    ) : (<div></div>)
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
        <div className="flex justify-center my-5">
          <button
            onClick={() => setLoadMore(10)}
            className="p-3 text-sm text-white bg-[#ce0000]"
          >
            TÀI THÊM BÌNH LUẬN
          </button>
        </div>
      </div>
      <FooterPublic/>
    </>
  );
}

export default memo(BlogDetail);
