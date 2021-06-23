import React from "react";

import { Grid, Box } from "@material-ui/core";

import FirstRow from "./layout/FirstRow";
import SecondRow from "./layout/SecondRow";

const MatchTab = (): JSX.Element => {
  return (
    <Box marginY={1} width={1}>
      <Grid container direction="column" justify="space-around" spacing={2}>
        <FirstRow />
        <SecondRow />
      </Grid>
    </Box>
  );
};

export default MatchTab;
