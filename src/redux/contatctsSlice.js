import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  contactsList: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};
export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContacts: (state, action) => {
      state.contactsList = [...state.contactsList, action.payload];
    },
  },

  deleteContacts: (state, action) => {
    state.contactsList = state.contactsList.filter(
      contact => contact.id !== action.payload
    );
  },
});
export const { addContacts, deleteContacts } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
