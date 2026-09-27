import { React, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setCategory } from "../slices/BlogSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.blogreducer.searchText);
  const category = useSelector((state) => state.blogreducer.category);
  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (
    <div className="h-11 bg-white flex items-center px-4 mt-4 rounded-md border border-stone-300 gap-3">
      <input
        ref={inputFocus}
        type="text"
        value={searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
        placeholder="Search for Blog"
        className="h-full w-full outline-none bg-transparent text-sm"
      />
      <select
        value={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        className="h-8 rounded-md px-2 bg-stone-100 text-sm outline-none border border-stone-200"
      >
        <option value="All">All</option>
        <option value="React">React</option>
        <option value="Redux">Redux</option>
        <option value="Node">Node</option>
      </select>
      <Search size={18} className="shrink-0 text-stone-400" />
    </div>
  );
};

export default SearchBar;
