import React from "react";

import { Grid, Card, CardActionArea, CardHeader } from "@material-ui/core";

import TextAndSwitch from "../../common/TextAndSwitch";

interface ReadyToShootsProps {
  readonly limeReady: boolean;
  readonly armReady: boolean;
  readonly wheelsReady: boolean;
}

const ReadyToShoots = (props: ReadyToShootsProps): JSX.Element => {
  return (
    <CardActionArea style={{ height: "100%", borderRadius: 15 }}>
      <Card variant="outlined" style={{ height: "100%" }}>
        <CardHeader title="Ready to shoot" />

        <Grid container item alignItems="center" justify="center">
          <Grid item>
            <TextAndSwitch label="Lime:" checked={props.limeReady} />
            <TextAndSwitch label="Arm:" checked={props.armReady} />
            <TextAndSwitch label="Wheels:" checked={props.wheelsReady} />
          </Grid>
        </Grid>
      </Card>
    </CardActionArea>
  );
};

export default ReadyToShoots;
