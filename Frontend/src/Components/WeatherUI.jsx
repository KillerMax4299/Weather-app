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
    setList(list.filter((e) => e.city != val));
  }
  async function handleUpdate(e) {
    const index = citylist.indexOf(e);
    const arr = list;
    await axios
      .post("https://shy-puce-toad-tux.cyclic.cloud/getWeather", {
        value: e,
      })
      .then((response) => {
        arr[index] = response.data;
        // console.log("updated");
      });
    setList(arr);
  }

  async function RefreshAll() {
    for (const city of citylist) {
      await handleUpdate(city);
    }
    console.log("everything refreshed");
  }

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

  useEffect(() => {
    console.log("data updated")
      
  }, [list]);

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
        {list.length > 1 ? (
          <button
            className="border-2 rounded-md px-2 mt-1 mx-4 border-blue-500 text-white bg-blue-600 active:opacity-80"
            onClick={RefreshAll}
          >
            Refresh all
          </button>
        ) : (
          <></>
        )}
        {list.length == 1 ? (
          <button
            className="border-2 rounded-md px-2 mt-1 mx-4 border-blue-500 text-white bg-blue-600 active:opacity-80"
            onClick={RefreshAll}
          >
            Refresh
          </button>
        ) : (
          <></>
        )}
        <Citylist
          list={list}
          handleremove={handleremove}
          handleUpdate={handleUpdate}
        />
      </div>
    </>
  );
};

export default WeatherUI;
