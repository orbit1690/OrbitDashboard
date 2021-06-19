import React from "react";

import AppBar from "./components/common/AppBar";

import MatchTab from "./components/matchTab/MatchTab";

const App = (): JSX.Element => {
  return (
    <>
      <AppBar />
      <MatchTab />
    </>
  );
};

export default App;
