import React from "react";
import {connect} from "react-redux";

import {getRates} from "./redux/action";
class CurrencyConverter2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCurrency2: "",
      secondCurrency2: "",
      rate2: "",
    };
  }

  handleSubmit = (event) => {
    // console.log(this.state);
    event.preventDefault();
    this.props.getRates();

    this.setState({
      firstCurrency2: "",
      secondCurrency2: "",
      rate2: "",
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="divConvert2">
          <h3>Simple Currency Converter2</h3>
        </div>
        <div className="divConvert2">
          <input
            type="text"
            name="firstCurrency"
            onChange={(event) => this.setState({firstCurrency2: event.target.value.toUpperCase()})}
            value={this.state.firstCurrency2}
          />
          <input
            type="text"
            name="secondCurrency"
            onChange={(event) => this.setState({secondCurrency2: event.target.value.toUpperCase()})}
            value={this.state.secondCurrency2}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Convert
          </button>
        </div>
        <div className="divConvert2">1PLN=1PLN</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  firstCurrency2: state.firstCurrency2,
  secondCurrency2: state.secondCurrency2,
});

export default connect(mapStateToProps, {getRates})(CurrencyConverter2);
