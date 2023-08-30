import { useState, useEffect } from "react";
import axios from "axios";
import useDebounce from "./Hooks/Usedebounce";
import useLocalStorage from "./Hooks/UseLocalStorage";
import WeatherUI from "./Components/WeatherUI";

const App = () => {
  return (
    <>
      <WeatherUI/>
    </>
  );
};


export default App 