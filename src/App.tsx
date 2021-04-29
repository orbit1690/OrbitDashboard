import { ipcRenderer } from "electron";
import React, { useEffect, useState } from "react";
import LineChart from "./LineChart/LineChart";
import { useCounter, useFeedback } from "./utils/Hooks";
import Vector from "./utils/Vector";

const App = (): JSX.Element => {
  const [data, addData] = useFeedback<Vector>(100);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((prevCounter) => {
        addData(new Vector(prevCounter, Math.random()));
        return prevCounter + 1;
      });
    }, 100);
  }, []);

  return (
    <>
      <LineChart
        datasets={[
          {
            data: data,
            title: "My Data",
          },
        ]}
        title="Line Chart Test"
        xTitle="X Axis"
        yTitle="Y Axis"
      />
    </>
  );
};

export default App;
