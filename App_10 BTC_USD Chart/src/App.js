import React from "react";
import "./App.scss";
import {Line} from "react-chartjs-2";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "./actions/bitcoinActions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bitcoin);
  const [num, setNum] = React.useState(150);

  // -Unnecessary
  // const data = {
  //   labels: ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
  //   datasets: [
  //     {
  //       label: "BTC",
  //       data: [4000, 5000, 3000, 2000, 2000, 2000],
  //       backgroundColor: "red",
  //       borderColor: "green",
  //       pointBorderColor: "black",
  //     },
  //   ],
  // };

  const fetchData = (time) => {
    //Fetching data from Redux using time
    dispatch(
      getData({
        time: time,
        number: num,
      })
    );
  };

  return (
    <React.Fragment>
      <div className="btns-wrapper">
        <button onClick={() => fetchData("1min")}>1 Min</button>
        <button onClick={() => fetchData("5min")}>5 Min</button>
        <button onClick={() => fetchData("15min")}>15 Min</button>
        <input onChange={(event) => setNum(event.target.value)} />
        {state.loading && <p>Loading...</p>}
        {state.errors && <p>Loading...</p>}
      </div>
      <div className="chart-wrapper">
        <Line data={state.data} />
      </div>
    </React.Fragment>
  );
}

export default App;
