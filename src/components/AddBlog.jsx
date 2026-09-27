import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../slices/BlogSlice";

const AddBlog = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: "", category: "React", author: "", readingTime: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.readingTime) return;
    dispatch(
      addBlog({
        id: Date.now(),
        title: form.title,
        category: form.category,
        author: form.author,
        readingTime: Number(form.readingTime),
        featured: false,
      })
    );
    setForm({ title: "", category: "React", author: "", readingTime: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 mt-4 items-center">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="h-10 px-3 rounded-md bg-white border border-stone-300 outline-none text-sm flex-1 min-w-40"
      />
      <input
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Author"
        className="h-10 px-3 rounded-md bg-white border border-stone-300 outline-none text-sm flex-1 min-w-40"
      />
      <input
        name="readingTime"
        type="number"
        value={form.readingTime}
        onChange={handleChange}
        placeholder="Mins"
        className="h-10 px-3 rounded-md bg-white border border-stone-300 outline-none text-sm w-20"
      />
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="h-10 rounded-md px-3 bg-white border border-stone-300 text-sm outline-none"
      >
        <option value="React">React</option>
        <option value="Redux">Redux</option>
        <option value="Node">Node</option>
      </select>
      <button
        type="submit"
        className="h-10 px-5 rounded-md bg-teal-700 text-white text-sm font-semibold"
      >
        Add Blog
      </button>
    </form>
  );
};

export default AddBlog;
