import React from 'react';
import { useSelector } from 'react-redux';
import CreateContactForm from './CreateContactForm';
import { useParams } from 'react-router';

const EditContact = () => {
  const { firstName } = useParams();

  const contact = useSelector((state: any) =>
    state.Contacts.contacts.find(
      (contact: any) => contact.firstName === firstName
    )
  );

  console.log(contact.firstName);

  return (
    <>
      <h1>Edit Contact Screen</h1>
      <div className="border border-gray-500 w-11/12 h-3/5 p-2 bg-white">
        <CreateContactForm
          efirstName={contact.firstName}
          elastName={contact.lastName}
          estatus={contact.status}
          editMode={true}
        />
      </div>
    </>
  );
};

export default EditContact;
