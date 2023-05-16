import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactState {
  contacts: Contact[];
}

interface Contact {
  firstName: string;
  lastName: string;
  status: string;
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    saveContact(state, action: PayloadAction<Contact>) {
      const newContact = action.payload;
      state.contacts.push(newContact);
    },

    deleteContact(state, action: PayloadAction<string>) {
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.firstName === action.payload
      );
      if (contactIndex !== -1) {
        state.contacts.splice(contactIndex, 1);
      }
    },

    editContact(state, action: PayloadAction<Contact>) {
      const updatedContact = action.payload;
      const contactIndex = state.contacts.findIndex((contact) => {
        const firstNameMatch =
          contact.firstName.trim().toLowerCase() ===
          updatedContact.firstName.trim().toLowerCase();
        const lastNameMatch =
          contact.lastName.trim().toLowerCase() ===
          updatedContact.lastName.trim().toLowerCase();
        return firstNameMatch && lastNameMatch;
      });

      if (contactIndex !== -1) {
        const existingContact = state.contacts[contactIndex];
        state.contacts[contactIndex] = {
          ...existingContact, // Keep the existing properties of the contact
          firstName: updatedContact.firstName, // Update the firstName property
          lastName: updatedContact.lastName, // Update the lastName property
          status: updatedContact.status, // Update the status property
        };
      }
    },
  },
});
export const { saveContact, deleteContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;
