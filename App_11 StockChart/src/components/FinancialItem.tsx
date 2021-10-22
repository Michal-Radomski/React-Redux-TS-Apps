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

const FinancialItem = (props: RootState): JSX.Element => {
  const {
    financialItem: {financialItem},
    getFinancialItem,
  } = props;

  // console.log("{financialItem: {financialItem}, getFinancialItem}", {financialItem: {financialItem}, getFinancialItem});
  // console.log("financialItem:", financialItem);

  const classes = financialItemStyle();
  const [typeOfChart, setTypeOfChart] = React.useState<string>("line");
  const firstUpdate = React.useRef(true);

  React.useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      getFinancialItem("TSLA");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChartChange = (event: React.ChangeEvent<HTMLSelectElement> | any) => {
    setTypeOfChart(event.target.value);
  };

  const displayTheRightPlot = () => {
    switch (typeOfChart) {
      case "line":
        return <LineChart color="green" financialItem={financialItem} financialItemName={financialItem.symbol} />;
      case "candlestick":
        return <CandleStickChart financialItem={financialItem} financialItemName={financialItem.symbol} />;
      default:
        return <LineChart color="green" financialItem={financialItem} financialItemName={financialItem.symbol} />;
    }
  };

  return (
    <div className="financial-item-big-wrapper">
      <div>{financialItem ? displayTheRightPlot() : null}</div>
      <div>
        {financialItem ? (
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

FinancialItem.propTypes = {
  financialItem: PropTypes.object.isRequired,
  getFinancialItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state: State) => ({
  financialItem: state.financialItem,
});

export default connect(mapStateToProps, {getFinancialItem})(FinancialItem);
