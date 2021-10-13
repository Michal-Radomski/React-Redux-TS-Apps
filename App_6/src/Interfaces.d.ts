interface Comment {
  postId: number;
  id: number;
  name: string;
  body: string;
}

interface State {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}

interface actionPending {
  type: ActionType.GET_POST_COMMENTS_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_POST_COMMENTS_SUCCESS;
  payload: Comment[];
}

interface actionFail {
  type: ActionType.GET_POST_COMMENTS_FAIL;
  payload: string;
}

type Action = actionPending | actionSuccess | actionFail;

type RootState = ReturnType<typeof reducers>;
