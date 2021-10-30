import React from "react";
import {Line, Bar} from "react-chartjs-2";

import {fetchDailyData} from "../../api";
import styles from "./Chart.module.scss";

const Chart = () => {
  const [dailyData, setDailyData] = React.useState([]);
  React.useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };

    fetchAPI();
    // console.log(dailyData);
  }, []);

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

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
