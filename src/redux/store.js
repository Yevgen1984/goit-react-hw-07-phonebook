import { configureStore } from '@reduxjs/toolkit';

import сontactsSlice from './contactSlice';

// import { filterReducer } from './contactsFilterSlice';


export const store = configureStore({
  reducer: {
  //   filter: filterReducer,
  contacts: сontactsSlice,
  },
});
