import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './fetchApi';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () => {
  try {
    return fetchContacts();
  } catch (error) {
    console.log(error);
  }
});

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  contacts => {
    try {
      return addContact(contacts);
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => {
    try {
      return deleteContact(id);
    } catch (error) {
      console.log(error);
    }
  }
);