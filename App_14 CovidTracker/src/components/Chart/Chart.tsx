import React from "react";
import {Line, Bar} from "react-chartjs-2";
import {useSelector} from "react-redux";

import {fetchDailyData} from "../../api"; // fetchDailyData in not in global state
import styles from "./Chart.module.scss";

// - Redux Version */
const Chart = (): JSX.Element => {
  const [dailyData, setDailyData] = React.useState([]);

  React.useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };
    fetchAPI();
  }, []);
  // console.log("dailyData:", dailyData);  // fetched from api/index (no Redux)

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

  const globalState: State = useSelector((state: RootState) => state.data);
  // console.log("globalState-Charts:", globalState);

  const barChart = globalState.data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", globalState.data.recovered.value === 0 ? "Recovered: No Data" : "Recovered", "Deaths"],
        datasets: [
          {
            backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
            data: [globalState.data.confirmed.value, globalState.data.recovered.value, globalState.data.deaths.value],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {display: false},
          title: {
            display: true,
            text: `Current state in ${globalState.selectedCountry ? globalState.selectedCountry : "the World"}`,
            position: "top",
          },
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

// + No Redux Version */
// const Chart = ({data, country}) => {
//   const [dailyData, setDailyData] = React.useState([]);

//   React.useEffect(() => {
//     const fetchAPI = async () => {
//       const dailyData = await fetchDailyData();
//       setDailyData(dailyData);
//     };
//     fetchAPI();
//   }, []);
//   // console.log("dailyData:", dailyData);

//   const lineChart =
//     dailyData.length !== 0 ? (
//       <Line
//         data={{
//           labels: dailyData.map(({date}) => date),
//           datasets: [
//             {
//               data: dailyData.map(({confirmed}) => confirmed),
//               label: "Infected",
//               borderColor: "#3333ff",
//               fill: true,
//             },
//             {
//               data: dailyData.map(({deaths}) => deaths),
//               label: "Deaths",
//               borderColor: "red",
//               backgroundColor: "rgba(255,0,0,0.5)",
//               fill: true,
//             },
//           ],
//         }}
//       />
//     ) : null;

//   const barChart = data.confirmed ? (
//     <Bar
//       data={{
//         labels: ["Infected", data.recovered.value === 0 ? "Recovered: No Data" : "Recovered", "Deaths"],
//         datasets: [
//           {
//             label: ["Infected", "Recovered", "Deaths"],
//             backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
//             data: [data.confirmed.value, data.recovered.value, data.deaths.value],
//           },
//         ],
//       }}
//       options={{
//         plugins: {
//           legend: {display: false},
//           title: {display: true, text: `Current state in ${country ? country : "the World"}`, position: "top"},
//         },
//       }}
//     />
//   ) : null;

//   return (
//     <React.Fragment>
//       <div className={styles.container}>{lineChart}</div>
//       <div className={styles.container}>{barChart}</div>
//     </React.Fragment>
//   );
// };

// export default Chart;
