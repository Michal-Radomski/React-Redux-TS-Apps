import axios from "axios";

// Actions Types
export const FETCH_DATA_GLOBAL = "FETCH_DATA_GLOBAL";
export const SELECT_COUNTRY = "SELECT_COUNTRY";
export const FETCH_DATA_GLOBAL_COUNTRY = "FETCH_DATA_GLOBAL_COUNTRY";
export const SETTING_RECOVERIES_STATE = "SETTING_RECOVERIES_STATE";

const url: string = "https://covid19.mathdro.id/api";

// Action creator FetchData() - initial data fetching
export const fetchDataGlobal = () => {
  // console.log("url:", url);
  return async function (dispatch: Dispatch) {
    await axios
      .get(url)
      .then((response) => {
        let responseData = response.data;
        // console.log("responseData:", responseData);
        dispatch({
          type: "FETCH_DATA_GLOBAL",
          payload: {
            confirmed: responseData.confirmed,
            recovered: responseData.recovered,
            deaths: responseData.deaths,
            lastUpdate: responseData.lastUpdate,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Action creator fetchDataGlobalCountry - fetching data for a country
export const fetchDataGlobalCountry = (country: string) => {
  return async function (dispatch: Dispatch) {
    // console.log("country-from action:", country);
    let changeableUrl: string = `${url}/countries/${country}`;
    if (!country) {
      changeableUrl = url;
    }
    // console.log("changeableUrl:", changeableUrl);
    await fetch(changeableUrl)
      .then((response) => response.json())
      .then((response) => {
        // console.log("response-from action:", response);
        dispatch({
          type: "FETCH_DATA_GLOBAL_COUNTRY",
          payload: {
            confirmed: response.confirmed,
            recovered: response.recovered,
            deaths: response.deaths,
            lastUpdate: response.lastUpdate,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setRecoveredValue = (noData: string) => {
  return {
    type: "SETTING_RECOVERIES_STATE",
    payload: noData,
  };
};
