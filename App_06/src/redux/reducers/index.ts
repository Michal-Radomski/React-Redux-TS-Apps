import {ActionType} from "../actionTypes/index";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const commentReducer = (state = initialState, action: Action | any): State => {
  switch (action.type) {
    case ActionType.GET_POST_COMMENTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };
    case ActionType.GET_POST_COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducer;
