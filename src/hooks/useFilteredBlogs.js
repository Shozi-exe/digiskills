import { useMemo } from "react";
import { useSelector } from "react-redux";

const useFilteredBlogs = () => {
  const blogs = useSelector((state) => state.blogreducer.blogs);
  const searchText = useSelector((state) => state.blogreducer.searchText);
  const category = useSelector((state) => state.blogreducer.category);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory = category === "All" || blog.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchText, category]);

  return filteredBlogs;
};

export default useFilteredBlogs;
