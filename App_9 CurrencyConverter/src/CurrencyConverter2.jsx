import React from "react";

class CurrencyConverter2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCurrency: "",
      secondCurrency: "",
      rate: "",
    };
  }

  handleSubmit = (event) => {
    // console.log(this.state);
    event.preventDefault();
    this.props.dispatch({
      type: "SET_CURRENCIES",
      payload: this.state,
    });

    this.setState({
      firstCurrency: "",
      secondCurrency: "",
      rate: "",
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
            onChange={(event) => this.setState({firstCurrency: event.target.value.toUpperCase()})}
            value={this.state.firstCurrency}
          />
          <input
            type="text"
            name="secondCurrency"
            onChange={(event) => this.setState({secondCurrency: event.target.value.toUpperCase()})}
            value={this.state.secondCurrency}
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

export default CurrencyConverter2;
