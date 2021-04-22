import React, { useState, useEffect } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

interface LineChartProps {
  title?: string;
  xTitle?: string;
  yTitle?: string;
  maxDataPoints?: number;
}

type DataPoint = { x: number; y: number };

const LineChart = (props: LineChartProps): JSX.Element => {
  const [data, setData] = useState<DataPoint[]>([{ x: 0, y: 0 }]);

  useEffect((): void => {
    setInterval((): void => {
      setData((prev: DataPoint[]): DataPoint[] => [
        ...prev,
        {
          x: prev[prev.length - 1].x + 1,
          y: prev[prev.length - 1].y + Math.round((Math.random() - 0.5) * 2),
        },
      ]);
    }, 20);
  }, []);

  const options: {} = {
    title: {
      text: "Dynamic Line Chart",
    },
    data: [
      {
        type: "line",
        dataPoints: data,
      },
    ],
  };

  return (
    <h1>
      <CanvasJSChart options={options} />
    </h1>
  );
};

export default LineChart;
