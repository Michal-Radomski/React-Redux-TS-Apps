import React from "react";

import styles from "./App.module.scss";

// import Cards from "./components/Cards/Cards"
// import Chart from "./components/Chart/Chart"
// import CountryPicker from "./components/CountryPicker/CountryPicker"
// - Instead of above import

import {Cards, Chart, CountryPicker} from "./components/index";
import {fetchData} from "./api/index";

class App extends React.Component {
  state = {data: {}, recoveredValue: undefined, selectedCountry: ""};

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData.recovered.value);
    const valueRecovered = fetchedData.recovered.value !== 0 ? fetchedData.recovered.value : "No Data";
    // console.log(valueRecovered);
    this.setState({data: fetchedData, recoveredValue: valueRecovered});
  }

  handleCountryChange = async (country) => {
    const fetchedDataCountry = await fetchData(country);
    // console.log(country);
    // console.log(fetchedData);
    this.setState({data: fetchedDataCountry, selectedCountry: country});
    // console.log(this.state);
  };

  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} recoveredValue={this.state.recoveredValue} country={this.state.selectedCountry} />
        <Chart data={this.state.data} country={this.state.selectedCountry} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}

export default App;
