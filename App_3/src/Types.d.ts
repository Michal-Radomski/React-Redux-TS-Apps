interface State {
  type: string;
  payload: string;
}

type Action = {
  type: string;
  payload: State;
};

type DispatchType = (args: State | any) => State;
