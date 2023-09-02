import WeatherUI from "./Components/WeatherUI";
import { useNetworkState } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

const App = () => {
  const { online } = useNetworkState();
  const [status, setStatus] = useState(online);

  useEffect(() => {
    setStatus(online);
  }, [online]);

  return (
    <>
      {!status ? (
        <div className="w-full bg-red-600 h-6 text-center font-bold text-white">
          You are offline
        </div>
      ) : (
        <></>
      )}
      <WeatherUI />
    </>
  );
};

export default App;
