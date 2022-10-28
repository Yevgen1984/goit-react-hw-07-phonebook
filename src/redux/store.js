import { configureStore } from '@reduxjs/toolkit';
import phoneContactsSlice from './contactSlice';

import { filterReducer } from './contactsFilterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    // phoneContacts: persistedReducer,
  },
});
