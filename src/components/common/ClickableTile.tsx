import React from "react";
import { Card, CardActionArea, useTheme } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { TileProps } from "./Tile";
import { isDarkTheme } from "../../Theme";

const ClickableTile = (props: TileProps): JSX.Element => {
  const { ripple } = useTheme().palette;

  return (
    <CardActionArea
      style={{
        height: "100%",
        borderRadius: 15,
        color: isDarkTheme() ? ripple.dark : ripple.light,
      }}
    >
      <Card variant="outlined" style={{ height: "100%" }}>
        <CardHeader title={props.title} />
        {props.children}
      </Card>
    </CardActionArea>
  );
};

export default ClickableTile;
