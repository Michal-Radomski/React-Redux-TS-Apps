import axios from "axios";
import moment from "moment";

const API_KEY = process.env.REACT_APP_Financial_Modeling_Prep_API_KEY;

export const getData =
  ({time, number}) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "AWAITING_BITCOIN",
      });

      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/historical-chart/${time}/BTCUSD?apikey=${API_KEY}`
      );
      // console.log("response.data:", response.data);
      const labels = [];
      const data = [];
      for (let i = 0; i < response.data.length; i++) {
        data.unshift(response.data[i].close);
        labels.unshift(moment(response.data[i].date).format("HH:mm"));

        if (i === number - 1) {
          break;
        }
      }

      dispatch({
        type: "SUCCESS_BITCOIN",
        payload: {
          data,
          labels,
        },
      });
    } catch (error) {
      dispatch({
        type: "REJECTED_BITCOIN",
      });
      console.log("error", error);
    } finally {
      console.log("Job done");
    }
  };
