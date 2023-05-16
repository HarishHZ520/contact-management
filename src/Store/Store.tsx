import { configureStore } from '@reduxjs/toolkit';
import ContactSlice from './Slices/ContactSlice';

const store = configureStore({
  reducer: { Contacts: ContactSlice },
});

export default store;
