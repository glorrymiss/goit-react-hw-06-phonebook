// export const statusFilters = Object.freeze({
//   all: 'all',
//   active: 'active',
//   completed: 'completed',
// });
import { createSlice, nanoid } from '@reduxjs/toolkit';

export const Contacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
  },
  deleteContacts(state, action) {
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
  contactsFilter(state, action) {
    return (state = action.payload);
  },
});

// Генератори екшенів
export const { addContacts, deleteContacts, contactsFilter } = Contacts.actions;
// Редюсер слайсу
export const ContactsReducer = Contacts.reducer;
