import React from "react";
import { useState, useEffect } from "react";

const WeatherUI = ({ data, code_list, debounce_val }) => {
  const [country, setCountry] = useState("");

  const { city, ISO, main, weather } = data;

  // const {description , icon} = weather

  useEffect(() => {
    const e = code_list.filter((e) => e.code == ISO);
    e.length > 0
      ? setCountry(e[0].title)
      : e.length < 1 && "" != value && setCountry("");
  }, [data]);
  return (
    <>
      <h1 className="font-semibold text-2xl uppercase">
        {city},{country}
      </h1>
      <img src={`/icons/${icon}.png`} alt="" />
      {/* {description} */}
      
    </>
  );
};

export default WeatherUI;
