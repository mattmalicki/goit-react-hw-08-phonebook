import { createSelector } from '@reduxjs/toolkit';

import { selectFilterName } from 'redux/filters/selectors';

export const selectContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filterName) => {
    return {
      items: contacts.filter(obj =>
        obj.name.toLowerCase().includes(filterName)
      ),
      inPhonebook: contacts.length,
    };
  }
);
