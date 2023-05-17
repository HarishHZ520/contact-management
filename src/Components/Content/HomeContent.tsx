import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ContactsList from '../Contact/ContactsList';
import NoContacts from '../Contact/NoContacts';

const HomeContent = () => {
  const contacts = useSelector((state: any) => state.Contacts.contacts);

  return (
    <>
      <Link
        to={'/create-contact'}
        className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded"
      >
        Create Contact
      </Link>
      <div className="flex sm:flex-row flex-col w-full h-80 sm:overflow-y-hidden overflow-y-scroll sm:justify-evenly items-center gap-5">
        {contacts.length === 0 ? <NoContacts /> : <ContactsList />}
      </div>
    </>
  );
};

export default HomeContent;
