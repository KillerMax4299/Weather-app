import { useState, useEffect } from "react";
import { MdSearch, MdClear } from "react-icons/md";
import Searchres from "./Searchres";


const Searchbar = ({ search_val, setSearch_val, setData }) => {
  
  const [class_val, setClass_val] = useState("opacity-0");

  function visibility() {
    search_val.length > 0
      ? setClass_val("opacity-100 cursor-pointer")
      : setClass_val("opacity-0");
  }

  useEffect(() => {
    visibility();
    
  }, [search_val]);

  return (
    <>
      <div className="flex bg-white text-2xl border-2 rounded-xl items-center xl:w-1/4 lg:w-1/3 w-full md:w-1/2 h-12 border-neutral-300 focus-within:border-neutral-400 transition-all duration-300">
        <label
          htmlFor="searchbar"
          className="text-neutral-400 mx-4 text-3xl cursor-pointer"
        >
          <MdSearch />
        </label>
        <input
          className="placeholder:text-neutral-400 w-full outline-0"
          id="searchbar"
          value={search_val}
          placeholder="Search places"
          onChange={(e) => setSearch_val(e.target.value)}
          spellCheck="false"
        />
        <label
          htmlFor="searchbar"
          className={
            "text-neutral-400 mx-4 text-3xl transition-opacity duration-400 hover:text-neutral-600 " +
            class_val
          }
          onClick={() => {
            setSearch_val("");
            setClass_val("opacity-0");
            setData(null)
          }}
        >
          <MdClear />
        </label>
      </div>
    </>
  );
};

export default Searchbar;
