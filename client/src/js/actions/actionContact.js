import axios from "axios";
import { GET_CONTACTS, GET_CONTACT } from "../constants/actionTypes";

//Get All
export const getContacts = () => dispatch => {
  axios
    .get("/api/contacts")
    .then(res => dispatch({ type: GET_CONTACTS, payload: res.data }))
    .catch(err => console.log(err));
};

//getContactById
export const getContact = id => dispatch => {
  axios
    .get(`/api/contacts/contact/${id}`)
    .then(res => dispatch({ type: GET_CONTACT, payload: res.data }))
    .catch(err => console.error(err));
};
//Add Contact
export const addContact = newcontact => dispatch => {
  axios
    .post("/api/contacts", newcontact)
    .then(res => dispatch(getContacts()))
    .catch(err => console.log(err));
};

// Delete Contact
export const deleteContact = id => dispatch => {
  axios
    .delete(`/api/contacts/contact/${id}`)
    .then(res => dispatch(getContacts()))
    .catch(err => console.log(err));
};

//Edit Contact
export const editContact = (id, updateContact) => dispatch => {
  axios
    .put(`/api/contacts/contact/${id}`, updateContact)
    .then(res => dispatch(getContact(id)))
    .catch(err => console.log(err));
};
