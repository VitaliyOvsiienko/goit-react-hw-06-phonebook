import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.contactList;

export const getFilter = state => state.filter.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts
      .filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
);
