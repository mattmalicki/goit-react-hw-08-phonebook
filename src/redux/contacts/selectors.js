import { createSelector } from '@reduxjs/toolkit';

import { selectFilterName, selectFilterFav } from 'redux/filters/selectors';

export const selectContacts = state => state.contacts.item;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterFav, selectFilterName],
  (contacts, filterFav, filterName) => {
    let visibleContacts;
    switch (filterFav) {
      case 'all':
        visibleContacts = contacts.filter(obj =>
          obj.name.toLowerCase().includes(filterName)
        );
        break;
      case 'favourite':
        visibleContacts = contacts
          .filter(obj => obj.favourite)
          .filter(obj => obj.name.toLowerCase().includes(filterName));
        break;
      case 'nofavourtie':
        visibleContacts = contacts
          .filter(obj => !obj.favourite)
          .filter(obj => obj.name.toLowerCase().includes(filterName));
        break;
      default:
        console.log('Error with selectVisibleContacts');
        break;
    }
    return {
      items: visibleContacts,
      inPhonebook: contacts.length,
    };
  }
);
