import * as actionTypes from "./actionTypes";

export const createContact = (contact: Contact) => {
  return {
    type: actionTypes.CREATE_NEW_CONTACT,
    contact: contact,
  };
};
