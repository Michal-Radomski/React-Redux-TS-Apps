import React from "react";
import PropTypes from "prop-types";
import Plot from "react-plotly.js";

const LineChart = (props) => {
  // console.log("LineChart props:", props);
  return (
    <React.Fragment>
      <Plot
        data={[
          {
            x: props.financialItem.financialChartXValues,
            y: props.financialItem.financialChartCloseValues,
            type: "scatter",
            mode: "lines+markers",
            marker: {color: props.color},
          },
        ]}
        layout={{width: 720, height: 440, title: props.financialItemName}}
        options={{displaylogo: "false"}}
      />
    </React.Fragment>
  );
};

LineChart.propTypes = {
  financialItem: PropTypes.object.isRequired,
  financialItemName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default LineChart;
