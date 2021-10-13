interface State {
  name: string;
  payload?: string;
}

interface Props {
  name: string;
  payload?: string;
}

interface Contact {
  contact: string;
  payload?: string;
}

type Action = {type: string; payload: string};
