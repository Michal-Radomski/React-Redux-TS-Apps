import React from "react";
import {connect} from "react-redux";

import {getRates, setCurrency1, setCurrency2} from "./redux/action";

class CurrencyConverter2 extends React.Component {
  constructor(props) {
    super(props);
    // Local State
    this.state = {
      firstCurrency2: "USD",
      secondCurrency2: "USD",
      rate2: "1",
    };
    // console.log("props:", props);
  }

  handleSubmit = (event) => {
    // console.log("this.state:", this.state);
    event.preventDefault();
    this.props.setCurrency1(this.state.firstCurrency2);
    this.props.setCurrency2(this.state.secondCurrency2);
    this.props.getRates(this.state.firstCurrency2, this.state.secondCurrency2);
  };

  render() {
    return (
      <React.Fragment>
        {/* {console.log("this.props.currencies.currencies:", this.props.currencies.currencies)} */}
        <div className="divConvert2">
          <h3>Simple Currency Converter - Redux Store</h3>
        </div>
        <div className="divConvert2">
          <input
            type="text"
            onChange={(event) => this.setState({firstCurrency2: event.target.value.toUpperCase()})}
            value={this.state.firstCurrency2}
          />
          <input
            type="text"
            onChange={(event) => this.setState({secondCurrency2: event.target.value.toUpperCase()})}
            value={this.state.secondCurrency2}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Convert
          </button>
        </div>
        <div className="divConvert2">
          1{this.props.currencies.currencies.firstCurrency2}={this.props.currencies.currencies.rate2}
          {this.props.currencies.currencies.secondCurrency2}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state,
});

export default connect(mapStateToProps, {getRates, setCurrency1, setCurrency2})(CurrencyConverter2);
