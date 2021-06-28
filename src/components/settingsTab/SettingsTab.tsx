import React from "react";

import { Box, Switch } from "@material-ui/core";
import { isDarkTheme } from "../../Theme";

import { TextAndSwitchRed } from "../common/TextAndSwitch";

interface SettingsTabProps {
  readonly toggleTheme: () => void;
}

const SettingsTab = (props: SettingsTabProps): JSX.Element => (
  <Box marginY={2} marginX={1} height="100vh">
    <TextAndSwitchRed
      label="Dark Theme:"
      checked={isDarkTheme()}
      onClick={props.toggleTheme}
    />
  </Box>
);

export default SettingsTab;
