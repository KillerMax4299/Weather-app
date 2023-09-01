import { useEffect, useState } from 'react'
import useLocalStorage from '../Hooks/UseLocalStorage';

const city_component = ({ citylist, handleremove }) => {
  const { ISO, city, main, weather } = citylist;
  const [count, setCount] = useLocalStorage("ct_list", []);

  // const [{title}] = count

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
      </button>
    </div>
  );
};

export default city_component



// Math.round(city.main.temp) + "°C"