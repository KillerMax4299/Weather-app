import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import Searchres from "./Searchres";
import useDebounce from "../Hooks/Usedebounce";
import Citylist from "./Citylist";
import useLocalStorage from "../Hooks/UseLocalStorage"

// ! https://shy-puce-toad-tux.cyclic.cloud/getWeather
// ! http://localhost:3000/getWeather

const WeatherUI = () => {
  const [search_val, setSearch_val] = useState("");
  const debouncedValue = useDebounce(search_val, 300);
  const [list, setList] = useLocalStorage("list",[]);
  const [citylist, setCitylist] = useLocalStorage("citylist",[])
  const [data, setData] = useState(null);

  useEffect(() => {
    if (search_val != "") {
      axios
        .post("http://localhost:3000/getWeather", {
          value: search_val,
        })
        .then(({ data }) => {
          if (data.cod == 200) setData(data);
          else setData(null);
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
          citylist={citylist}
          setCitylist={setCitylist}
        />
        <Citylist list={list}/>
      </div>
    </>
  );
};

export default WeatherUI;
