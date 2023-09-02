import { useEffect, useState } from "react";
import City_component from "./city_component";

const Citylist = ({ list, handleremove, handleUpdate }) => {
  // console.log(list.length);

  if (list.length > 0)
    return (
      <div
        className="xl:w-1/4 lg:w-1/3 w-full md:w-1/2 h-full flex flex-col justify-center items-center
    transition-all duration-300"
      >
        {list.map((city) => (
          <City_component
            citylist={city}
            handleremove={handleremove}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>
    );
  else
    return (
      <div className="xl:w-1/4 lg:w-1/3 w-full md:w-1/2 h-full flex flex-col justify-center items-center">
        <div className="flex h-32 items-center text-2xl text-zinc-400">
          <span>No Cities Added</span>
        </div>
      </div>
    );
};

export default Citylist;
