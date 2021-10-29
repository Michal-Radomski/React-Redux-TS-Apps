import React from "react";

import styles from "./App.module.scss";

// import Cards from "./components/Cards/Cards"
// import Chart from "./components/Chart/Chart"
// import CountryPicker from "./components/CountryPicker/CountryPicker"
// - Instead of above import
import {Cards, Chart, CountryPicker} from "./components/index";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
