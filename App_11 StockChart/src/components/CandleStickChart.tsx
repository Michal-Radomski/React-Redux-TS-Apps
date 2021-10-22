import React from "react";
import PropTypes from "prop-types";
import Plot from "react-plotly.js";

const CandleStickChart: CandleStickChart = ({financialItem, financialItemName}): JSX.Element => {
  // console.log("financialItem:", financialItem);
  // console.log("financialItemName:", financialItemName);
  return (
    <React.Fragment>
      <Plot
        data={[
          {
            x: financialItem.financialChartXValues,
            close: financialItem.financialChartCloseValues,
            decreasing: {line: {color: "red"}},
            high: financialItem.financialChartHighValues,
            increasing: {line: {color: "green"}},
            line: {color: "rgba(31,119,180,1)"},
            low: financialItem.financialChartLowValues,
            open: financialItem.financialChartOpenValues,
            type: "candlestick",
          },
        ]}
        layout={{
          width: 720,
          height: 440,
          title: financialItemName,
          dragmode: "zoom",
          showlegend: false,
          xaxis: {
            rangeslider: {
              visible: false,
            },
          },
          yaxis: {
            autorange: true,
          },
        }}
        // options={{displaylogo: "false"}}
      />
    </React.Fragment>
  );
};

CandleStickChart.propTypes = {
  financialItem: PropTypes.object.isRequired,
  financialItemName: PropTypes.string.isRequired,
};

export default CandleStickChart;
