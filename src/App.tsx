import React, { useState } from "react";

import AppBar from "./components/common/AppBar";

import MatchTab from "./components/matchTab/MatchTab";
import SettingsTab from "./components/settingsTab/SettingsTab";

import { ThemeProvider, Grid } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

import { lightTheme, darkTheme } from "./Theme";

import { Tab } from "./components/common/Menu";
import { useToggle } from "./utils/Hooks";
import Test from "./components/matchTab/layout/Test";

const App = (): JSX.Element => {
  const [tab, setTab] = useState(Tab.Match);

  const [isDarkTheme, toggleTheme] = useToggle();

  const Content = (): JSX.Element => {
    switch (tab) {
      case Tab.Match:
        return <Test />;
      case Tab.Settings:
        return <SettingsTab toggleTheme={toggleTheme} />;
    }
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppBar setTab={setTab} />
      <Grid
        container
        style={{
          position: "fixed",
          left: 0,
          top: 69 /* 69 is the height of the AppBar */,
          backgroundColor: isDarkTheme ? grey[900] : "",
        }}
      >
        <Content />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
