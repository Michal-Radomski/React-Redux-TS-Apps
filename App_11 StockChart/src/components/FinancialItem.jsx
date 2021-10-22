import React from "react";
// Components imports
import LineChart from "./LineChart";
import CandleStickChart from "./CandleStickChart";
// Material UI imports
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import financialItemStyle from "./financialItemStyle";
// Redux imports
import {connect} from "react-redux";
import PropTypes from "prop-types";
import getFinancialItem from "../actions/financialItem";

const FinancialItem = (props) => {
  // console.log("props:", props);
  const classes = financialItemStyle();
  const [typeOfChart, setTypeOfChart] = React.useState("line");
  const firstUpdate = React.useRef(true);

  React.useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      getFinancialItem("TSLA");
      return;
    }
  }, []);

  const handleChartChange = (event) => {
    setTypeOfChart(event.target.value);
  };

  const displayTheRightPlot = () => {
    // console.log(props.financialItem);
    switch (typeOfChart) {
      case "line":
        return (
          <LineChart color="green" financialItem={props.financialItem} financialItemName={props.financialItem.symbol} />
        );
      case "candlestick":
        return <CandleStickChart financialItem={props.financialItem} financialItemName={props.financialItem.symbol} />;
      default:
        return (
          <LineChart color="green" financialItem={props.financialItem} financialItemName={props.financialItem.symbol} />
        );
    }
  };

  return (
    <div className="financial-item-big-wrapper">
      <div>{props.financialItem ? displayTheRightPlot() : null}</div>
      <div>
        {props.financialItem ? (
          <FormControl className={classes.formControl} id="stock-type-of-chart-form-control">
            <InputLabel shrink id="type-of-chart-select-label">
              Type of Chart
            </InputLabel>
            <Select
              labelId="type-of-chart-select-label"
              id="type-of-chart-select"
              value={typeOfChart}
              onChange={handleChartChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value={"line"}>
                <em>Line</em>
              </MenuItem>
              <MenuItem value={"candlestick"}>CandleStick</MenuItem>
            </Select>
          </FormControl>
        ) : null}
      </div>
    </div>
  );
};

// FinancialItem.propTypes = {
//   financialItem: PropTypes.object.isRequired,
//   getFinancialItem: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  financialItem: state.financialItem,
});

export default connect(mapStateToProps, {getFinancialItem})(FinancialItem);
