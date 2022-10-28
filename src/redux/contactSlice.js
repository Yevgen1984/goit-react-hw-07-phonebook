import { createSlice } from '@reduxjs/toolkit';
import { phoneContacts } from '../data/phoneContacts';
import { nanoid } from 'nanoid';

const phoneContactsSlice = createSlice({
  name: 'phoneContacts',
  initialState: { phoneContacts: phoneContacts },
  reducers: {
    addPhoneContact: (state, { payload }) => {
      if (state.phoneContacts.some(name => name.name === payload.name)) {
        alert(`${payload.name} is already in contacts!`);
        return;
      }
      state.phoneContacts.push({ id: nanoid(), ...payload });
    },
    deletePhoneContact: (state, { payload }) => {
      state.phoneContacts = state.phoneContacts.filter(
        phoneContact => phoneContact.id !== payload
      );
    },
  },
});

export const { addPhoneContact, deletePhoneContact } =
  phoneContactsSlice.actions;

export default phoneContactsSlice.reducer;
