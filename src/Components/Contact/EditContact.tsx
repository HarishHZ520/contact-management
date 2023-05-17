import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateContactForm from './CreateContactForm';
import { useParams } from 'react-router';
import { editContact } from '../../Store/Slices/ContactSlice';

const EditContact = () => {
  const { firstName } = useParams();
  const dispatch = useDispatch();

  const contact = useSelector((state: any) =>
    state.Contacts.contacts.find(
      (contact: any) => contact.firstName === firstName
    )
  );

  const handleEditContact = (updatedContact: any) => {
    console.log(updatedContact);
    // dispatch the updatedContact instead of contact
    dispatch(editContact(updatedContact));
  };

  return (
    <>
      <h1>Edit Contact Screen</h1>
      <div className="border border-gray-500 w-11/12 h-3/5 p-2 bg-white">
        <CreateContactForm
          efirstName={contact.firstName}
          elastName={contact.lastName}
          estatus={contact.status}
          editMode={true}
          onEditContact={handleEditContact} // pass the handler function
        />
      </div>
    </>
  );
};

export default EditContact;
