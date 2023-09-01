import { useEffect } from "react";
import axios from "axios";
import useLocalStorage from "./Hooks/UseLocalStorage";
import WeatherUI from "./Components/WeatherUI";

const App = () => {
  const [countryList, setCountryList] = useLocalStorage("ct_list", []);

  useEffect(() => {
    axios.get("/country_code_list.json").then((response) => {
      setCountryList(response.data);
    });
  }, []);

  return (
    <>
      <WeatherUI />
    </>
  );
};

export default App;
