import React from "react";

import styles from "./App.module.scss";

// import Cards from "./components/Cards/Cards"
// import Chart from "./components/Chart/Chart"
// import CountryPicker from "./components/CountryPicker/CountryPicker"
// - Instead of above import

import {Cards, Chart, CountryPicker} from "./components/index";
import {fetchDataTest} from "./api/index";

class App extends React.Component {
  state = {data: {}};

  async componentDidMount() {
    const fetchedData = await fetchDataTest();
    // console.log(data);
    this.setState({data: fetchedData});
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards date={this.state.data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
