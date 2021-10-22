type ProcessEnv = string | any;

type Dispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

interface CandleStickChart {
  ({financialItem, financialItemName}: {financialItem: any; financialItemName: any}): JSX.Element;
  propTypes: {
    financialItem: PropTypes.Validator<object>;
    financialItemName: PropTypes.Validator<string>;
  };
}

interface LineChart {
  (props: {
    financialItem: {
      financialChartXValues: any;
      financialChartCloseValues: any;
    };
    color: any;
    financialItemName: any;
  }): JSX.Element;
  propTypes: {
    financialItem: PropTypes.Validator<object>;
    financialItemName: PropTypes.Validator<string>;
    color: PropTypes.Validator<string>;
  };
}

interface FinancialItem {
  financialChartXValues: any;
  financialChartCloseValues: any;
}

interface State {
  financialItem: {
    financialItem: {
      symbol: string;
      financialChartXValues: string[];
      financialChartCloseValues: string[] | number[];
      financialChartOpenValues: string[] | number[];
      financialChartHighValues: string[] | number[];
      financialChartLowValues: string[] | number[];
    };
  };
}

interface Action {
  type: string;
  payload: State;
}
