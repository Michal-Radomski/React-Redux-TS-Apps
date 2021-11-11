import React from "react";

import Leaflet from "./Leaflet";
import NavBar from "./Navbar";
import "./App.scss";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <NavBar />
      <Leaflet />
    </React.Fragment>
  );
};

export default App;
