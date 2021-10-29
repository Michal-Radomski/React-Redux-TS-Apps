// Interfaces and Types

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

interface User {
  id: number;
  name: string;
}

type Users = User[];

interface Action {
  message?: string;
  type: any;
  name: any;
  id: any;
  users: Users;
  author?: string;
}

interface IMessage {
  id: number;
  message: string;
  author: string;
}

type IMessages = IMessage[];

interface Params {
  username: string;
  socket: {send: (arg0: string) => void};
}
