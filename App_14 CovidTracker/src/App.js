import React from "react";
import {connect} from "react-redux";

import styles from "./App.module.scss";

// import Cards from "./components/Cards/Cards"
// import Chart from "./components/Chart/Chart"
// import CountryPicker from "./components/CountryPicker/CountryPicker"
// - Instead of above import

import {Cards, Chart, CountryPicker} from "./components/index";
// import {fetchData} from "./api/index"; //+ No Redux Version
import {fetchDataGlobal, fetchDataGlobalForCountry} from "./redux/actions";
import covidImage from "./images/image.png";

class App extends React.Component {
  state = {data: {}, recoveredValue: undefined, selectedCountry: ""};

  async componentDidMount() {
    // - Redux Version
    // console.log("this.props:", this.props);
    this.props.fetchDataGlobal();

    // + No Redux Version
    // const fetchedData = await fetchData();
    // console.log(fetchedData.recovered.value);
    // const valueRecovered = fetchedData.recovered.value !== 0 ? fetchedData.recovered.value : "No Data";
    // console.log(valueRecovered);
    // this.setState({data: fetchedData, recoveredValue: valueRecovered});
  }

  handleCountryChange = async (country) => {
    // + No Redux Version
    // const fetchedDataCountry = await fetchData(country);
    // console.log(country);
    // console.log(fetchedDataCountry);
    // this.setState({data: fetchedDataCountry, selectedCountry: country});
    // console.log(this.state);

    // - Redux Version
    const fetchedDataCountry = await fetchDataGlobal(country);
    console.log(country);
    console.log(fetchedDataCountry);
    this.props.fetchDataGlobalForCountry(country);
    fetchDataGlobalForCountry(country);
  };

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="COVID-19" />
        <Cards data={this.state.data} recoveredValue={this.state.recoveredValue} country={this.state.selectedCountry} />
        <Chart data={this.state.data} country={this.state.selectedCountry} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}

const mapStateToProps = (props) => ({
  data: {
    confirmed: props.data.confirmed,
    recovered: props.data.recovered,
    deaths: props.data.deaths,
    lastUpdate: props.data.lastUpdate,
  },
  recoveredValue: undefined,
  selectedCountry: "",
});

export default connect(mapStateToProps, {fetchDataGlobal})(App);
