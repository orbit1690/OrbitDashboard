import React from "react";

import { Card, CardActionArea, CardHeader } from "@material-ui/core";

export interface TileProps {
  readonly title: string;
  readonly children?: JSX.Element | JSX.Element[];
}

const Tile = (props: TileProps): JSX.Element => {
  return (
    <Card variant="outlined" style={{ height: "100%" }}>
      <CardActionArea>
        <CardHeader title={props.title} />
      </CardActionArea>
      {props.children}
    </Card>
  );
};

export default Tile;
