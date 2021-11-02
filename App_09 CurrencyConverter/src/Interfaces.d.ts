// Interfaces and Types for all Components

type ProcessEnv = string | any;

type Dispatch = typeof store.dispatch;
type Fetch = typeof store.fetch;
type RootState = ReturnType<typeof store.getState>;

interface State_1 {
  firstCurrency2: string;
  secondCurrency2: string;
  rate2: number;
}
interface State_2 {
  first_Currency: string;
  second_Currency: string;
  rateExchange: number;
}

type State = State_1 | State_2;

type Action = {
  type: string;
  payload: string | number;
};

type Function = (arg0: string) => string;
interface Props {
  Currencies?: State;
  currencies: Currencies;
  getRates: Fetch;
  setCurrency1: Function;
  setCurrency2: Function;
}

interface State_4 {
  firstCurrency4_G: string;
  secondCurrency4_G: string;
  rate4_G: number;
}

interface State_5 {
  firstCurrency5: string;
  secondCurrency5: string;
  rate5: number;
}
