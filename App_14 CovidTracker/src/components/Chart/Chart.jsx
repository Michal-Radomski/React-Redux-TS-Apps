import React from "react";
import {Line, Bar} from "react-chartjs-2";

import {fetchDailyData} from "../../api";
import styles from "./Chart.module.scss";

const Chart = ({data, country}) => {
  const [dailyData, setDailyData] = React.useState([]);

  // console.log(country);

  React.useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };
    fetchAPI();
  }, []);
  // console.log(dailyData);

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({date}) => date),
          datasets: [
            {
              data: dailyData.map(({confirmed}) => confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.map(({deaths}) => deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  // console.log(data.confirmed);

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", data.recovered.value === 0 ? "Recovered: No Data" : "Recovered", "Deaths"],
        datasets: [
          {
            label: ["Infected", "Recovered", "Deaths"],
            backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
            data: [data.confirmed.value, data.recovered.value, data.deaths.value],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {display: false},
          title: {display: true, text: `Current state in ${country ? country : "the World"}`, position: "top"},
        },
      }}
    />
  ) : null;

  return (
    <React.Fragment>
      <div className={styles.container}>{lineChart}</div>
      <div className={styles.container}>{barChart}</div>
    </React.Fragment>
  );
};

export default Chart;
