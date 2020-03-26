import { GET_CONTACTS, GET_CONTACT } from "../constants/actionTypes";

const initialState = {
  contacts: [],
  contact: null
};

export const reducerContact = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    default:
      return state;
  }
};
