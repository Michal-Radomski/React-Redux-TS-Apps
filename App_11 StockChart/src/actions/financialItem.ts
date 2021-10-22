import {GET_FINANCIAL_ITEM} from "./types";

const getFinancialItem = (symbol: string) => async (dispatch: Dispatch) => {
  const API_KEY: ProcessEnv = process.env.REACT_APP_AV_API_KEY;
  // console.log("API_KEY:", API_KEY);

  let finItemSymbol = symbol;
  let financialChartXValuesFunction: string[] = [];
  let financialChartCloseValuesFunction: number[] = [];
  let financialChartOpenValuesFunction: number[] = [];
  let financialChartHighValuesFunction: number[] = [];
  let financialChartLowValuesFunction: number[] = [];

  // console.log("finItemSymbol:", finItemSymbol);

  try {
    await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${finItemSymbol}&outputsize=compact&apikey=${API_KEY}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log("data:", data);

        for (let key in data["Time Series (Daily)"]) {
          financialChartXValuesFunction.push(key);
          financialChartCloseValuesFunction.push(data["Time Series (Daily)"][key]["4. close"]);
          financialChartOpenValuesFunction.push(data["Time Series (Daily)"][key]["1. open"]);
          financialChartHighValuesFunction.push(data["Time Series (Daily)"][key]["2. high"]);
          financialChartLowValuesFunction.push(data["Time Series (Daily)"][key]["3. low"]);
        }
      });

    const financialItem = {
      symbol: finItemSymbol,
      financialChartXValues: financialChartXValuesFunction,
      financialChartCloseValues: financialChartCloseValuesFunction,
      financialChartOpenValues: financialChartOpenValuesFunction,
      financialChartHighValues: financialChartHighValuesFunction,
      financialChartLowValues: financialChartLowValuesFunction,
    };

    dispatch({
      type: GET_FINANCIAL_ITEM,
      payload: financialItem,
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Job completed");
  }
};

export default getFinancialItem;
