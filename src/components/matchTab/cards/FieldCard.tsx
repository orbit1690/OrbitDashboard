import React from "react";

import { Card, CardActionArea, CardHeader } from "@material-ui/core";

import Vector from "../../../utils/Vector";

import ExampleField from "../examples/ExampleField";

const FieldCard = (props: { widthXs: number }): JSX.Element => (
  <Card variant="outlined">
    <CardActionArea>
      <CardHeader title="Robot Pose" />
    </CardActionArea>
    <CardActionArea
      onClick={(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ): void => {
        const rect: DOMRect = event.currentTarget.getBoundingClientRect();

        const x: number = event.clientX - rect.left;
        const y: number = rect.height - (event.clientY - rect.top);

        const fieldWidth: number = (5 / 12) * window.innerWidth - 8;
        const fieldHeight: number = (8.21 / 15.98) * fieldWidth;

        const xMeter: number = (x * 15.98) / fieldWidth;
        const yMeter: number = (y * 8.21) / fieldHeight;

        console.log(new Vector(xMeter, yMeter)); // TODO send click position to robot
      }}
    >
      {/* TODO use real field */}
      <ExampleField widthXs={props.widthXs} />
    </CardActionArea>
  </Card>
);

export default FieldCard;
