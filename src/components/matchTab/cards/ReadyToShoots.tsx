import React from "react";

import { Grid } from "@material-ui/core";

import { TextAndSwitchGreen } from "../../common/TextAndSwitch";
import ClickableTile from "../../common/ClickableTile";

interface ReadyToShootsProps {
  readonly limeReady: boolean;
  readonly armReady: boolean;
  readonly wheelsReady: boolean;
}

const ReadyToShoots = (props: ReadyToShootsProps): JSX.Element => {
  return (
    <ClickableTile title="Ready to shoot">
      <Grid container item alignItems="center" justify="center">
        <Grid item>
          <TextAndSwitchGreen label="Lime:" checked={props.limeReady} />
          <TextAndSwitchGreen label="Arm:" checked={props.armReady} />
          <TextAndSwitchGreen label="Wheels:" checked={props.wheelsReady} />
        </Grid>
      </Grid>
    </ClickableTile>
  );
};

export default ReadyToShoots;
