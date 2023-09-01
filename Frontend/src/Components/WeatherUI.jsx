import axios from "axios";
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import Searchres from "./Searchres";
import useDebounce from "../Hooks/Usedebounce";
import Citylist from "./Citylist";
import useLocalStorage from "../Hooks/UseLocalStorage";

// ! https://shy-puce-toad-tux.cyclic.cloud/getWeather
// ! http://localhost:3000/getWeather

const WeatherUI = () => {
  const [search_val, setSearch_val] = useState("");
  const debouncedValue = useDebounce(search_val, 300);
  const [list, setList] = useLocalStorage("list", []);
  const [citylist, setCitylist] = useLocalStorage("citylist", []);
  const [data, setData] = useState(null);

  function handleremove(val) {
    setCitylist(citylist.filter((e) => e != val));
    setList(list.filter((e)=> e.city != val));
  }
  function handleUpdate() {}

  useEffect(() => {
    if (search_val != "") {
      axios
        .post("https://shy-puce-toad-tux.cyclic.cloud/getWeather", {
          value: search_val.trim(),
        })
        .then(({ data }) => {
          if (data.cod == 200) setData(data);
          else setData(null);
        });
    }
  }, [debouncedValue]);

  return (
    <>
      <Searchres
        data={data}
        setData={setData}
        setList={setList}
        setSearch_val={setSearch_val}
        list={list}
        citylist={citylist}
        setCitylist={setCitylist}
      />
      <div className="flex flex-col items-center justify-center relative p-8">
        <Searchbar
          search_val={search_val}
          setSearch_val={setSearch_val}
          setData={setData}
        />
        <Citylist list={list} handleremove={handleremove} />
      </div>
    </>
  );
};

export default WeatherUI;
