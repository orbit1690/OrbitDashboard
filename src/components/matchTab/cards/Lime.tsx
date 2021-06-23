import React from "react";

import { Card, CardHeader, CardActionArea } from "@material-ui/core";
import LimeImg from "../../../assets/limelight.jpg";

const Lime = (): JSX.Element => (
  <Card variant="outlined">
    <CardActionArea>
      <CardHeader title="Lime" />
    </CardActionArea>

    <CardActionArea>
      <img src={LimeImg} width="100%" />
    </CardActionArea>
  </Card>
);

export default Lime;
