import React from "react";
import { Star, Trash2 } from "lucide-react";

const BlogCard = React.memo(({ blog, isFav, onDelete, onToggleFav }) => {
  return (
    <div className="min-w-60 min-h-65 text-stone-600 font-semibold flex flex-col text-md bg-white rounded-md p-5 gap-2 border border-stone-200">
      <h1 className="text-lg bg-teal-50 font-bold text-center my-3 text-teal-800 py-1 rounded">
        "{blog.title}"
      </h1>
      <h3>
        <span className="font-bold">Category : </span>
        {blog.category}
      </h3>
      <p>
        <span className="font-bold">Author : </span>
        {blog.author}
      </p>
      <p>
        <span className="font-bold">Reading Time : </span>
        {blog.readingTime} mins
      </p>
      <p>
        <span className="font-bold">Featured Status : </span>
        <span className={blog.featured ? "text-teal-700" : "text-stone-400"}>
          {blog.featured ? "Yes" : "No"}
        </span>
      </p>
      <div className="flex gap-4 scale-75 justify-end">
        <Star
          className={isFav ? "text-yellow-500 fill-yellow-500" : "text-yellow-500"}
          onClick={() => onToggleFav(blog.id)}
        />
        <Trash2
          className="text-red-400"
          onClick={() => onDelete(blog.id)}
        />
      </div>
    </div>
  );
});

export default BlogCard;
