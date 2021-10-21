type ProcessEnv = string | any;

type Dispatch = typeof store.dispatch;
type Fetch = typeof store.fetch;
type RootState = ReturnType<typeof store.getState>;

type labels = string[] | any;
type data = number[];

interface State {
  errors?: JSX.Element;
  bitcoin?: any;
  loading: boolean;
  data: {
    labels: labels;
    datasets: [
      {
        label: "BTC";
        data: data;
        backgroundColor: "rgba(238,175,0, 0.4)";
        borderColor: "rgba(238,175,0, 0.5)";
        pointBorderColor: "rgba(238,175,0, 0.7)";
      }
    ];
  };
}

interface Action {
  type: string;
  payload?: boolean | labels | data;
}
