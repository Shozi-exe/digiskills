import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteblog } from "../slices/BlogSlice";
import useFilteredBlogs from "../hooks/useFilteredBlogs";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const blogs = useFilteredBlogs();
  const dispatch = useDispatch();
  const [favs, setFavs] = useState([]);

  const handleDelete = useCallback(
    (id) => dispatch(deleteblog(id)),
    [dispatch],
  );

  const handleToggleFav = useCallback((id) => {
    setFavs((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
    );
  }, []);

  return (
    <div className="rounded-lg p-5 mt-5">
      <div className="flex justify-center flex-wrap p-5 gap-5">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            isFav={favs.includes(blog.id)}
            onDelete={handleDelete}
            onToggleFav={handleToggleFav}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
