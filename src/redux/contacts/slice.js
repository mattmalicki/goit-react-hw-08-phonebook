import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  fetchContacts,
  deleteContact,
  toggleFavourite,
  changeName,
  changeNumber,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(toggleFavourite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items[index].favourite = !state.items[index].favourite;
      })
      .addCase(changeName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items[index].name = action.payload.name;
      })
      .addCase(changeNumber.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items[index].name = action.payload.number;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state, action) => {
        state.error = 'someone use old function, fix it!';
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
