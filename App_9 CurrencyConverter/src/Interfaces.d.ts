// Interfaces and Types for all Components

type ProcessEnv = string | any;

// interface CustomWindow extends Window {
//   store?: any;
// }

type Dispatch = typeof store.dispatch;
type Fetch = typeof store.fetch;
// type RootState = ReturnType<typeof store.getState>

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
