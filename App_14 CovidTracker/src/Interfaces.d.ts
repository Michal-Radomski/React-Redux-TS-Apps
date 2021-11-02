// Interfaces and Types

type Dispatch = typeof store.dispatch;
type Fetch = typeof store.fetch;
type RootState = ReturnType<typeof store.getState>;

interface Action {
  type: string;
  payload: Data | string;
}

interface Data {
  confirmed: {
    value: number;
  };
  recovered: {
    value?: number;
  };
  deaths: {
    value: number;
  };
  lastUpdate?: string;
}

interface State {
  data: Data;
  recoveredValue: string;
  selectedCountry: string;
}

interface ModifiedData {
  confirmed: {total: number};
  deaths: {total: number};
  recovered?: {total: number};
  date: string;
  reportDate: string;
}
