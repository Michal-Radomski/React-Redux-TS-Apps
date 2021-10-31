import axios from "axios";

// Actions Types
export const FETCH_DATA_GLOBAL = "FETCH_DATA_GLOBAL";
export const FETCH_DATA_FOR_COUNTRY = "FETCH_DATA_FOR_COUNTRY";

const url = "https://covid19.mathdro.id/api";

// Action creator fetchDataGlobal()
export const fetchDataGlobal = () => {
  return async function (dispatch) {
    await axios
      .get(url)
      .then((response) => {
        let responseData = response.data;
        console.log("responseData:", responseData);
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

// Action creator fetchDataGlobalForCountry()
export const fetchDataGlobalForCountry = (country) => {
  const changeableUrl = `${url}/countries/${country}`;
  console.log("changeableUrl:", changeableUrl);
  return async function (dispatch) {
    await axios
      .get(changeableUrl)
      .then((response) => {
        let responseCountryData = response.data;
        console.log("responseCountryData:", responseCountryData);
        dispatch({
          type: "FETCH_DATA_GLOBAL",
          payload: {
            data: {
              confirmed: responseCountryData.confirmed,
              recovered: responseCountryData.recovered,
              deaths: responseCountryData.deaths,
              lastUpdate: responseCountryData.lastUpdate,
            },
            selectedCountry: country,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
