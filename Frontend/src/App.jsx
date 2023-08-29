import { useState, useEffect } from "react";
import axios from "axios";
import useDebounce from "./Custom hook/Usedebounce";
import useLocalStorage from "./Custom hook/UseLocalStorage";
import WeatherUI from "./Components/WeatherUI";

function App() {
  const [value, setValue] = useState("");
  const [input, setinput] = useState("");
  const [code_list, setCode_list] = useLocalStorage("country_list", []);
  const debounced_val = useDebounce(input, 500);

  useEffect(() => {
    axios.get("/country_code_list.json").then((response) => {
      setCode_list(response.data);
    });
    axios.get("http://localhost:3000/").then((response) => {
      console.log(response.data);
    });
  }, []);

  //useEffect((()=>{const e=code_list.filter((e=>e.code==input.toUpperCase()));e.length>0?setValue(e[0].title):e.length<1&&""!=value&&setValue("")}),[debounced_val]);
  async function data_fetch() {
    if (input.length > 0) {
      const { data, status } = await axios.post(
        "http://localhost:3000/testpost",
        {
          value: debounced_val,
        }
      );
      if (status === 200) {
        setValue(data);
      }
    }
  }
  useEffect(() => {
    data_fetch();
  }, [debounced_val]);

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <input
          className="border-2 rounded-lg border-blue-500"
          type="text"
          // maxLength={2}
          value={input}
          // style={{ textTransform: "uppercase" }}
          onChange={(e) => setinput(e.target.value)}
        />
        <div className="border border-sky-200 ">
          <WeatherUI data={value} code_list={code_list} debounced_val={debounced_val} />
        </div>
      </div>
    </>
  );
}

export default App;
