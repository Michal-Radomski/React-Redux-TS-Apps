type State = ReturnType<typeof store.getState>;

type Dispatch = typeof store.dispatch;

interface Props {
  name?: string;
  payload?: string;
  contact?: string;
}

interface Contact {
  contact?: string;
  payload?: string;
  name?: string;
}

type Contacts = Contact[];

type Action = {type: string; payload: string};

type ID = {
  id: any;
};

interface OwnProps {
  prop?: any;
}
