import axios from "axios";

// Actions Types
export const FETCH_DATA_GLOBAL = "FETCH_DATA_GLOBAL";
export const SELECT_COUNTRY = "SELECT_COUNTRY";

const url = "https://covid19.mathdro.id/api";

// Action creator FetchData()
export const fetchDataGlobal = (country) => {
  let changeableUrl = url;
  if (country) {
    // changeableUrl = `${url}/countries/${country}`;
  }
  // console.log("changeableUrl:", changeableUrl);
  return async function (dispatch) {
    // console.log("dispatch;", dispatch);
    await axios
      .get(changeableUrl)
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
