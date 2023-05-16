import React from 'react';
import CreateContactForm from './CreateContactForm';

const CreateContact = () => {
  return (
    <>
      <h1>Create Contact Screen</h1>
      <div className="border border-gray-500 w-11/12 h-3/5 p-2 bg-white">
        <CreateContactForm />
      </div>
    </>
  );
};

export default CreateContact;
