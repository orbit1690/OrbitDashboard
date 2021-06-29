import React from "react";

import { Grid, Box } from "@material-ui/core";

import FirstRow from "./layout/FirstRow";
import SecondRow from "./layout/SecondRow";

const MatchTab = (): JSX.Element => {
  return (
    <Box marginY={2} width={1} height="100vh" marginX={1}>
      <Grid container direction="column">
        <Grid item>
          <FirstRow />
        </Grid>
        <Grid item>
          <SecondRow />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MatchTab;
