import { useEffect, useState } from "react";

const Searchres = ({ data, setData, setList, setSearch_val, list }) => {
  const [hidden, setHidden] = useState("hidden");
  const [res, setRes] = useState("");
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    if (data != null) {
      setRes(data.city);
      setTemp(Math.trunc(data.main.temp));
    } else { 
      setRes("")
    }
  }, [data]);

  useEffect(() => {
    if (res.length > 0) setHidden("");
    else setHidden("hidden");
  }, [res]);

  return (
    <div
      className={
        hidden +
        " capitalize absolute z-10 text-2xl px-8 md:px-4 lg:px-3 xl:px-2 rounded-xl mt-14 items-center xl:w-1/4 lg:w-1/3 w-full md:w-1/2 h-24 transition-all duration-300"
      }
    >
      <div className="w-full border rounded-md bg-white border-neutral-100 h-14 shadow-md px-6 flex items-center">
        <div
          onClick={() => {
            setList([...list, res]);
            setSearch_val("");
            setData(null)
          }}
          className="flex w-full justify-between text-neutral-400 hover:text-neutral-900 cursor-pointer transition-colors duration-100"
        >
          <span>{res}</span>
          <span>{temp + "°C"}</span>
        </div>
      </div>
    </div>
  );
};

export default Searchres;
