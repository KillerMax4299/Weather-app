import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import Searchres from "./Searchres";
import useDebounce from "../Hooks/Usedebounce";

// ! shy-puce-toad-tux.cyclic.cloud

const WeatherUI = () => {
  const [search_val, setSearch_val] = useState("");
  const debouncedValue = useDebounce(search_val, 500);
  const [list, setList] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (search_val != "") {
      axios
        .post("https://shy-puce-toad-tux.cyclic.cloud/getWeather", {
          value: search_val,
        })
        .then(({ data }) => {
          if (data.cod == 200) setData(data);
          else if (data.cod == 404) setData(null);
        });
    }
  }, [debouncedValue]);

  return (
    <>
      <div className="flex justify-center relative p-8">
        <Searchbar search_val={search_val} setSearch_val={setSearch_val} />
        <Searchres
          data={data}
          setData={setData}
          setList={setList}
          setSearch_val={setSearch_val}
          list={list}
        />
      </div>
    </>
  );
};

export default WeatherUI;
