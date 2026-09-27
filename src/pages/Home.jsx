import React from "react";
import BlogList from "../components/BlogList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import AddBlog from "../components/AddBlog";

const Home = () => {
  return (
    <div className="p-4">
      <Header />
      <SearchBar />
      <AddBlog />
      <BlogList />
    </div>
  );
};

export default Home;
