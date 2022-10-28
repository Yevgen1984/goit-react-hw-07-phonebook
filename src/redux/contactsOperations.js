import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://635a918b38725a1746ca3a6e.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
