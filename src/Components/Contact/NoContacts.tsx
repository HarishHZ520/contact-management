import React from 'react';
import { RxCrossCircled } from 'react-icons/rx';

const NoContacts = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center border bg-red-200 p-2 gap-2 mt-4">
      <div className="flex justify-center items-center">
        <RxCrossCircled size={'50px'} />
      </div>
      <div className="text-center flex flex-col items-center">
        <p>No Contacts Found</p>
        <p>Please add contact from</p>
        <p>Create Contact Button</p>
      </div>
    </div>
  );
};

export default NoContacts;
