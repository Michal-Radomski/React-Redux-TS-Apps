import * as types from "../constants/ActionTypes";

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message: string, author: string) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
});

export const addUser = (name: string) => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name,
});

export const messageReceived = (message: string, author: string) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author,
});

export const populateUsersList = (users: Users) => ({
  type: types.USERS_LIST,
  users,
});
