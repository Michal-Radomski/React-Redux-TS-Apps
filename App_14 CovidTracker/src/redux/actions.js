import axios from "axios";

// Actions Types
export const FETCH_DATA_GLOBAL = "FETCH_DATA_GLOBAL";
export const SELECT_COUNTRY = "SELECT_COUNTRY";
export const FETCH_DATA_GLOBAL_COUNTRY = "FETCH_DATA_GLOBAL_COUNTRY";

const url = "https://covid19.mathdro.id/api";

// Action creator FetchData() - initial data fetching
export const fetchDataGlobal = () => {
  // console.log("url:", url);
  return async function (dispatch) {
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
export const fetchDataGlobalCountry = (country) => {
  return async function (dispatch) {
    // console.log("country-from action:", country);
    let changeableUrl = `${url}/countries/${country}`;
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
