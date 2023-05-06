import { configureStore } from '@reduxjs/toolkit';
import { ContactsReducer } from './contacts';

export const store = configureStore({
  reducer: ContactsReducer,
});
