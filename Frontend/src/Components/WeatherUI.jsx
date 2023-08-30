import React from "react";
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import Searchres from "./Searchres";

const WeatherUI = () => {
  const [search_val, setSearch_val] = useState("");
  const [list, setList] = useState([]);

  

  return (
    <>
      <div className="flex justify-center relative p-8">
        <Searchbar search_val={search_val} setSearch_val={setSearch_val} />
        <Searchres
          res={search_val}
          temp={20}
          setList={setList}
          setSearch_val={setSearch_val}
          list={list}
        />
      </div>
    </>
  );
};

export default WeatherUI;
