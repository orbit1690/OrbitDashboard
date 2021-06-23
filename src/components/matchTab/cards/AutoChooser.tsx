import React, { useState } from "react";

import {
  Select,
  Grid,
  MenuItem,
  Card,
  CardHeader,
  CardActionArea,
  Box,
} from "@material-ui/core";

// TODO come up with real names
enum Autonomous {
  Right,
  Left,
}

const AutoChooser = (): JSX.Element => {
  const [auto, setAuto] = useState(Autonomous.Left);

  return (
    <Card variant="outlined" style={{ height: "100%" }}>
      <CardActionArea>
        <CardHeader title="Autonomous" />
      </CardActionArea>

      <Box padding={1}>
        <Grid container alignItems="center" justify="center">
          <Select
            value={auto}
            variant="outlined"
            onChange={(event: any): void => setAuto(event.target.value)}
          >
            <MenuItem value={Autonomous.Right}>Right</MenuItem>
            <MenuItem value={Autonomous.Left}>Left</MenuItem>
          </Select>
        </Grid>
      </Box>
    </Card>
  );
};

export default AutoChooser;
