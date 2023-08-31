import { useEffect, useState } from "react";
import city_component from "./city_component";

const Citylist = ({ list }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {list.map((e) => (
        <city_component data={e} />
      ))}
    </div>
  );
};

export default Citylist;
