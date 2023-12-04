import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ENDPOINT = process.env.REACT_APP_USER_CONTACTS_ENDPOINT;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(ENDPOINT);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(ENDPOINT, {
        ...contact,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`${ENDPOINT}/${contactID}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/changeName',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.patch(`${ENDPOINT}/${contact.id}`, {
        name: contact.name,
        number: contact.number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
