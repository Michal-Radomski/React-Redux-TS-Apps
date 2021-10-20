import * as actionTypes from "../actions/actionTypes";

export const contactReducer = (state = [], action: Action | any) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:
      return [...state, Object.assign({}, action.contact)];
    case actionTypes.REMOVE_CONTACT:
      return state.filter((_data, i) => i !== action.id);
    default:
      return state;
  }
};
