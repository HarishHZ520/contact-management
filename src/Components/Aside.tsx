import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <div className="flex flex-col items-center text-1xl">
      <Link
        to={'contacts'}
        className="border border-gray-500 p-2 w-full hover:bg-blue-200"
      >
        Contacts
      </Link>
      <Link
        to={'charts-maps'}
        className="border border-gray-500 p-2 w-full hover:bg-blue-200"
      >
        Charts and Maps
      </Link>
    </div>
  );
};

export default Aside;
