import { Link } from "react-router-dom";

function Blogs({blog}) {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-2 text-white">
        <Link to={`/blog-detail/${blog._id}`}>
          <img
            className="h-auto"
            src={blog.topImage}
            alt=""
          ></img>
        </Link>
        
        <div className="col-span-2">
        <Link className="hover:text-red-600 ease-linear duration-300" to={`/blog-detail/${blog._id}`}>
          <p className="capitalize">
            {blog.name}
          </p>
        </Link>
          <p className="text-sm">
           <button className="text-[#306beb] py-2 text-sm">
           <i className="fas fa-heart"></i> Lượt thích  {blog.like} 
          </button> 
          &emsp;
          <button className="text-[#e06228] py-2 text-sm">
           <i className="fas fa-comment"></i> Bình luận  {blog.comments.length} 
          </button> 
          </p>
          <p className="text-gray-400 truncate text-[12px]">
           {blog.topContent}
          </p>
        </div>
      </div>
    </>
  );
}

export default Blogs;
