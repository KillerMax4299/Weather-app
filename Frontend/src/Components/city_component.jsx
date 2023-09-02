import { useEffect, useState } from "react";
import useLocalStorage from "../Hooks/UseLocalStorage";
import { MdRefresh, MdDelete } from "react-icons/md";

const city_component = ({ citylist, handleremove, handleUpdate }) => {
  const { ISO, city, main, weather, time } = citylist;
  const [count, setCount] = useLocalStorage("ct_list", []);
  const { description, icon } = weather;
  const country = count.filter((e) => e.code === ISO);

  const { temp, feels_like, temp_min, temp_max, humidity } = main;

  return (
    <div className="relative border h-32 px-4 py-2 border-zinc-200 rounded-lg w-full bg-white mt-[4px] ">
      {`${city}, ${ISO} `}
      <b>{Math.round(temp)}°C</b>
      <button
        className=" text-2xl hover:bg-red-200 p-1 rounded-full active:opacity-80 text-zinc-400 hover:text-red-500 transition-colors duration-200"
        onClick={() => {
          handleremove(city);
        }}
      >
        <MdDelete />
      </button>{" "}
      <button
        className="text-2xl hover:bg-zinc-200 p-1  rounded-full active:opacity-80 text-zinc-400 hover:text-zinc-600 transition-colors duration-200"
        onClick={() => {
          handleUpdate(city);
        }}
      >
        <MdRefresh />
      </button>
      <br />
      Feels Like
      <b>{" " + Math.round(feels_like)}°C</b> | Humidity {humidity}%
      <br />
      <span className="font-bold text-red-500">
        {Math.round(temp_max)}°C
      </span>{" "}
      <span className="font-bold text-blue-500">{Math.round(temp_min)}°C</span>
      <br />
      <span
        className="absolute top-0 right-3">
        <img 
          src={`/icons/${icon}.png`}
          alt=""
        />
        <p className="text-center -translate-y-3">{description }</p>
      </span>
      <b>{time}</b>
    </div>
  );
};

export default city_component;

// Math.round(city.main.temp) + "°C"
