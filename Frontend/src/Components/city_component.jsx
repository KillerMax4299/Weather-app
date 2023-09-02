// import { useEffect, useState } from "react";
import useLocalStorage from "../Hooks/UseLocalStorage";
import { MdRefresh, MdDelete } from "react-icons/md";

const city_component = ({ citylist, handleremove, handleUpdate }) => {
  const { ISO, city, main, weather, time } = citylist;
  // const [count, setCount] = useLocalStorage("ct_list", []);
  const { description, icon } = weather;
  // const country = count.filter((e) => e.code === ISO);

  const { temp, feels_like, temp_min, temp_max, humidity } = main;

  return (
    <div className="relative border h-36 px-4 py-2 border-zinc-200 rounded-lg w-full bg-white mt-[4px] ">
      {`${city}, ${ISO} `}
      <div className="absolute top-8 left-3  text-6xl">{Math.round(temp)}°C</div>
      <div className="absolute font-bold text-red-500 top-9 left-36">
        {Math.round(temp_max)}°C
      </div>
      <div className="absolute font-bold text-blue-500 bottom-12 left-36">
        {Math.round(temp_min)}°C
      </div>
      <div className="absolute bottom-[4px] flex flex-col w-3/5 xl:w-1/2 text-sm h-10">
        <span>Feels Like <span className="font-semibold">
          {Math.round(feels_like)}°C
        </span>
        </span>
        <span> Humidity {humidity}%</span>
      </div>
      <button
        className="absolute bottom-1 right-1 text-2xl hover:bg-red-200 p-1 rounded-full active:opacity-80 text-zinc-400 hover:text-red-500 transition-colors duration-200"
        onClick={() => {
          handleremove(city);
        }}
      >
        <MdDelete />
      </button>{" "}
      <button
        className="absolute top-2 right-1 text-2xl hover:bg-zinc-200 p-1  rounded-full active:opacity-80 text-zinc-400 hover:text-zinc-600 transition-colors duration-200"
        onClick={() => {
          handleUpdate(city);
        }}
      >
        <MdRefresh />
      </button>
      <span className="absolute flex flex-col justify-center items-center -top-2 right-10 text-center">
        <p className="translate-y-4 font-bold">{time}</p>
        <img
          className="h-24 w-24 translate-y-2"
          src={`/icons/${icon}.png`}
          alt=""
        />
        <p className="">{description}</p>
      </span>
    </div>
  );
};

export default city_component;

// Math.round(city.main.temp) + "°C"
