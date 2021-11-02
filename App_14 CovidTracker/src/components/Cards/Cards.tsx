import React from "react";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import {useSelector, useDispatch} from "react-redux";

import styles from "./Cards.module.scss";
import {setRecoveredValue} from "../../redux/actions";

//+ No Redux Version
// const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}, recoveredValue, country}) => {
//   // console.log(confirmed, recovered, deaths, lastUpdate);
//   if (!confirmed || !recovered || !lastUpdate | !deaths | !recoveredValue) {
//     return "Loading...";
//   }
//   // console.log(country);

//- Redux Version
const Cards = (): JSX.Element => {
  const globalState: State = useSelector((state: RootState) => state.data);
  // console.log("globalState-Cards:", globalState);

  const dispatch = useDispatch();
  const globalStateRecoveredValue = globalState.data.recovered.value;
  // console.log("globalStateRecoveredValue:", globalStateRecoveredValue);

  React.useEffect(() => {
    if (globalStateRecoveredValue === 0 || !globalStateRecoveredValue) {
      setTimeout(function () {
        dispatch(setRecoveredValue("No Data"));
      }, 100);
    }
  }, [dispatch, globalStateRecoveredValue]);

  if (
    !globalState.data.confirmed ||
    !globalState.data.recovered ||
    !globalState.data.lastUpdate ||
    !globalState.data.deaths
  ) {
    return <React.Fragment>"Loading...";</React.Fragment>;
  }

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
