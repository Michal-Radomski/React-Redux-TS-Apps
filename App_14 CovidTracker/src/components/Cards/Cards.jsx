import React from "react";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import {useSelector, useDispatch} from "react-redux";

import styles from "./Cards.module.scss";
import {setRecoveredValue} from "../../redux/actions";
import store from "../../redux/store";

//+ No Redux Version
// const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}, recoveredValue, country}) => {
//   // console.log(confirmed, recovered, deaths, lastUpdate);
//   if (!confirmed || !recovered || !lastUpdate | !deaths | !recoveredValue) {
//     return "Loading...";
//   }
//   // console.log(country);

//- Redux Version
const Cards = () => {
  const globalState = useSelector((state) => state.data);
  console.log("globalState-Cards:", globalState);

  const dispatch = useDispatch();
  const xxx = store.getState().data.data.recovered.value;
  console.log("xxx:", xxx);
  React.useEffect(() => {
    console.log("store.getState():", store.getState());
    // if (!store.getState().data.data.recovered) {
    //   return null;
    // }

    if (xxx === 0 || undefined) {
      store.dispatch(setRecoveredValue("No Data"));
      setTimeout(function () {
        dispatch(setRecoveredValue("Data"));
      }, 3000);
    }
  }, [dispatch, xxx]);

  if (
    !globalState.data.confirmed ||
    !globalState.data.recovered ||
    !globalState.data.lastUpdate ||
    !globalState.data.deaths
  ) {
    return "Loading...";
  }

  // const settingUpRecoveredValue = globalState.data.recovered.value;
  // console.log("settingUpRecoveredValue1:", settingUpRecoveredValue);

  // if (settingUpRecoveredValue === 0) {
  //   console.log("settingUpRecoveredValue2:", settingUpRecoveredValue);
  //   setRecoveredValue();
  //   // dispatch({
  //   //   type: "SETTING_RECOVERIES_STATE",
  //   //   payload: "No data",
  //   // });
  // }
  // console.log("settingUpRecoveredValue3:", settingUpRecoveredValue);
  // console.log("globalState.recoveredValue-4", globalState.recoveredValue);
  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        {globalState.selectedCountry ? globalState.selectedCountry : "Globally"}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={globalState.data.confirmed.value} duration={2.0} separator=" " />
            </Typography>
            <Typography color="textSecondary">{new Date(globalState.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              {globalState.recoveredValue}
              {/* <CountUp start={0} end={recovered.value} duration={2.5} separator=" " /> */}
            </Typography>
            <Typography color="textSecondary">{new Date(globalState.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of recoveries cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Death
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={globalState.data.deaths.value} duration={2.5} separator=" " />
            </Typography>
            <Typography color="textSecondary">{new Date(globalState.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
