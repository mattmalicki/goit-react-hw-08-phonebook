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
        favourite: false,
        createdAt: Date.now(),
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

export const toggleFavourite = createAsyncThunk(
  'contacts/toggleFavourite',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.put(`${ENDPOINT}/${contact.id}`, {
        favourite: !contact.favourite,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
