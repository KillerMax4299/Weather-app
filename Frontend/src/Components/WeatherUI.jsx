import axios from "axios";
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import Searchres from "./Searchres";
import { useDebounce, useLocalStorage } from "@uidotdev/usehooks";
import Citylist from "./Citylist";
import { MdRefresh } from "react-icons/md";

// ! https://shy-puce-toad-tux.cyclic.cloud/getWeather
// ! http://localhost:3000/getWeather

const WeatherUI = () => {
  const [search_val, setSearch_val] = useState("");
  const debouncedValue = useDebounce(search_val, 300);
  const [list, setList] = useLocalStorage("list", []);
  const [citylist, setCitylist] = useLocalStorage("citylist", []);
  const [data, setData] = useState(null);

  function formatCurrentDate() {
    return new Date().toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "numeric",
      // second: "numeric",
      minute: "2-digit",
      hour12: !0,
    });
  }

  function handleremove(val) {
    setCitylist(citylist.filter((e) => e != val));
    setList(list.filter((e) => e.city != val));
  }
  async function handleUpdate(e) {
    // console.log(e)
    const index = citylist.indexOf(e);
    const arr = list;
    await axios
      .post("https://shy-puce-toad-tux.cyclic.cloud/getWeather", {
        value: e,
      })
      .then(({ data }) => {
        const { ISO, city, main, weather } = data;
        const updatedData = {
          ISO: ISO,
          city: city,
          main: main,
          weather: weather,
          time: formatCurrentDate(),
        };
        arr[index] = updatedData;
        // console.log("updated");
      });
    setList(arr);
    // console.log(arr)
  }

  async function RefreshAll() {
    for (const city of citylist) {
      await handleUpdate(city);
    }
    // console.log("everything refreshed");
  }

  useEffect(() => {
    if (search_val != "") {
      axios
        .post("https://shy-puce-toad-tux.cyclic.cloud/getWeather", {
          value: search_val.trim(),
        })
        .then(({ data }) => {
          if (data.cod == 200) {
            const { ISO, city, main, weather } = data;
            const updatedData = {
              ISO: ISO,
              city: city,
              main: main,
              weather: weather,
              time: formatCurrentDate(),
            };
            setData(updatedData);
          } else setData(null);
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
      <div className="flex flex-col items-center justify-center relative p-4 md:p-8">
        <Searchbar
          search_val={search_val}
          setSearch_val={setSearch_val}
          setData={setData}
        />
        {list.length > 1 ? (
          <button
            className="flex items-center border rounded-2xl hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300 px-2 mt-1 mx-4 border-zinc-200 text-zinc-400 hover:text-zinc-600 bg-white active:opacity-80 font-semibold"
            onClick={() => {
              RefreshAll();
            }}
          >
            <MdRefresh /> Refresh all
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
