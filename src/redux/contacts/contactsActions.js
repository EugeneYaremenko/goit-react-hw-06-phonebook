import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
/* import actionsTypes from './contactsActionsTypes'; */

/* const addContact = (name, number) => ({
  type: actionsTypes.ADD,
  payload: {
    contact: { id: uuidv4(), name, number },
  },
}); */

/* const removeContact = contactId => ({
  type: actionsTypes.REMOVE,
  payload: {
    contactId,
  },
}); */

/* const changeFilter = filter => ({
  type: actionsTypes.CHANGE_FILTER,
  payload: {
    filter,
  },
}); */

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    contact: { id: uuidv4(), name, number },
  },
}));
  
const removeContact = createAction('contacts/remove');
const changeFilter = createAction('contacts/change');

export default { addContact, removeContact, changeFilter };
