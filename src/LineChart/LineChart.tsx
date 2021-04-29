import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts"; // See decs.d.ts for more info about this library
import Vector from "../utils/Vector";
import { useToggleArray } from "../utils/Hooks";

interface LineChartDataset {
  readonly data: Vector[];
  readonly title: string;
}

interface LineChartProps {
  readonly title: string;
  readonly xTitle?: string;
  readonly yTitle?: string;
  readonly datasets: LineChartDataset[];
}

const chartOptions: {} = {
  animationEnabled: true,
  zoomEnabled: true,
  theme: "dark2",
};

const LineChart = (props: LineChartProps): JSX.Element => {
  const [visible, toggleVisibility] = useToggleArray(
    props.datasets.length,
    true
  );

  const title: {} = { text: props.title };

  const data: {}[] = props.datasets.map(
    (dataset: LineChartDataset, index: number): {
    } => ({
      type: "line",
      dataPoints: dataset.data,
      showInLegend: true,
      visible: visible[index],
      name: dataset.title,
    })
  );

  const itemclick = (event: { dataSeriesIndex: number }): void =>
    toggleVisibility(event.dataSeriesIndex);

  const legend: {} = { cursor: "pointer", itemclick };

  const axisX = { title: props.xTitle };
  const axisY = {
    title: props.yTitle,
    includeZero: false,
  };

  return (
    <CanvasJSChart
      options={{ ...chartOptions, data, title, legend, axisX, axisY }}
    />
  );
};

export default LineChart;
