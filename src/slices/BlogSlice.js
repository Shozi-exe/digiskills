import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogs = createAsyncThunk("blogslice/fetchBlogs", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return [
    { id: 1, title: "React Hooks", category: "React", author: "Ali Khan", readingTime: 6, featured: true },
    { id: 2, title: "Redux Toolkit", category: "Redux", author: "Sara Ahmed", readingTime: 8, featured: false },
    { id: 3, title: "Blog UI in React", category: "React", author: "Hamza Malik", readingTime: 5, featured: false },
    { id: 4, title: "Node.js & Express", category: "Node", author: "Ayesha Noor", readingTime: 7, featured: true },
  ];
});

const BlogsSlice = createSlice({
  name: "blogslice",
  initialState: {
    blogs: [
      { id: 1, title: "React Hooks", category: "React", author: "Ali Khan", readingTime: 6, featured: true },
      { id: 2, title: "Redux Toolkit", category: "Redux", author: "Sara Ahmed", readingTime: 8, featured: false },
      { id: 3, title: "Blog UI in React", category: "React", author: "Hamza Malik", readingTime: 5, featured: false },
      { id: 4, title: "Node.js & Express", category: "Node", author: "Ayesha Noor", readingTime: 7, featured: true },
    ],
    searchText: "",
    category: "All",
    loading: false,
    error: null,
  },
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    deleteblog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    toggleFeatured: (state, action) => {
      const blog = state.blogs.find((blog) => blog.id === action.payload);
      if (blog) blog.featured = !blog.featured;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBlog, deleteblog, toggleFeatured, setSearchText, setCategory } = BlogsSlice.actions;
export default BlogsSlice.reducer;