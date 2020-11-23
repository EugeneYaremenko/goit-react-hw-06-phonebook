import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
/* import contactsActionsTypes from './contactsActionsTypes'; */
import contactsActions from './contactsActions';

/* const items = (state = [], { type, payload }) => {
  switch (type) {
    case contactsActions.addContact.type:
      return [...state, payload.contact];

    case contactsActions.removeContact.type:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
}; */

/* const filter = (state = '', { type, payload }) => {
  switch (type) {
    case contactsActions.changeFilter.type:
      return payload;

    default:
      return state;
  }
}; */

const onAddContact = (state, action) => {
  return [...state, action.payload.contact];
};
const onRemoveContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.addContact]: onAddContact,
  [contactsActions.removeContact]: onRemoveContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
