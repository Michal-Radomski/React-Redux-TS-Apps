interface Post {
  id: number;
  title: string;
  postId?: number;
  value?: string;
}

type Posts = Post[];

interface State {
  posts: Posts;
  loginModal: {
    open: boolean;
  };
}

interface Action {
  type: string;
  payload: ConcatArray<Post>;
}

interface CustomWindow extends Window {
  store?: any;
}

type AppDispatch = typeof store.dispatch;

//- Unused Types:
// type Dispatch = (args: State | any) => State;
// type RootState = ReturnType<typeof store.getState>
