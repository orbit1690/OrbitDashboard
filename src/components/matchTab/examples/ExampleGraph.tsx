import React, { useEffect } from "react";
import { Card } from "@material-ui/core";

import LineChart from "../../LineChart/LineChart";
import { useCounterVector, useFeedback } from "../../utils/Hooks";
import Vector from "../../utils/Vector";

const ExampleGraph = (): JSX.Element => {
  const createVector = useCounterVector();
  const [data, addData] = useFeedback<Vector>(20);

  useEffect((): void => {
    setInterval((): void => {
      addData(createVector(Math.random()));
    }, 20);
  }, []);

  return (
    <Card>
      <LineChart datasets={[{ title: "data", data }]} title="Example Graph" />
    </Card>
  );
};

export default ExampleGraph;
