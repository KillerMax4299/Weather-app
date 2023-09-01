import { useEffect, useState } from "react";
import useLocalStorage from "../Hooks/UseLocalStorage";

const city_component = ({ citylist, handleremove, handleUpdate }) => {
  const { ISO, city, main, weather, time } = citylist;
  const [count, setCount] = useLocalStorage("ct_list", []);

  return (
    <div className="border h-28 px-4 py-2 border-zinc-200 rounded-lg w-full bg-white mt-[4px] ">
      {`${city}`}{" "}
      <button
        className="border-2 rounded-md px-2 mx-4 border-red-500 text-white bg-red-600 active:opacity-80"
        onClick={() => {
          handleremove(city);
        }}
      >
        remove
      </button>{" "}
      <button
        className="border-2 rounded-md px-2 mx-4 border-neutral-500 text-white bg-neutral-600 active:opacity-80"
        onClick={() => {
          handleUpdate(city);
        }}
      >
        refresh
      </button>
      <br />
      {time}
    </div>
  );
};

export default city_component;

// Math.round(city.main.temp) + "°C"
