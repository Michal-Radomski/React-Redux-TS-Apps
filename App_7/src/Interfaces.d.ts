type State = ReturnType<typeof store.getState>;

type Dispatch = typeof store.dispatch;

interface Props {
  name?: string;
  payload?: string;
  contact?: string;
}

type MyProps = Props | State;

interface Contact {
  contact?: string;
  payload?: string;
  name?: string;
}

type Contacts = Contact[];

type Action = {type: string; payload: string};

type ID = {
  id: number;
};

interface OwnProps {
  prop?: any;
}

type Function = (name: string) => void;

interface CustomWindow extends Window {
  store?: any;
}
