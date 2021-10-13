import * as actionTypes from "../actions/actionTypes";

export const contactReducer = (state = [], action: Action | any) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:
      return [...state, Object.assign({}, action.contact)];
    default:
      return state;
  }
};
