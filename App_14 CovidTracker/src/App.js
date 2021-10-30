import React from "react";

import styles from "./App.module.scss";

// import Cards from "./components/Cards/Cards"
// import Chart from "./components/Chart/Chart"
// import CountryPicker from "./components/CountryPicker/CountryPicker"
// - Instead of above import

import {Cards, Chart, CountryPicker} from "./components/index";
import {fetchDataTest} from "./api/index";

class App extends React.Component {
  state = {data: {}, recoveredValue: undefined};

  async componentDidMount() {
    const fetchedData = await fetchDataTest();
    // console.log(fetchedData.recovered.value);
    const valueRecovered = fetchedData.recovered.value !== 0 ? fetchedData.recovered.value : "No Data";
    // console.log(valueRecovered);
    this.setState({data: fetchedData, recoveredValue: valueRecovered});
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} recoveredValue={this.state.recoveredValue} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
