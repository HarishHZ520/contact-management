import React from 'react';
import { NavLink } from 'react-router-dom';

const Aside = () => {
  return (
    <nav className="flex flex-col items-center text-1xl">
      <NavLink
        to={'/'}
        className="border border-gray-500 p-2 w-full hover:bg-blue-200"
      >
        Contacts
      </NavLink>
      <NavLink
        to={'charts'}
        className="border border-gray-500 p-2 w-full hover:bg-blue-200"
      >
        Charts
      </NavLink>
      <NavLink to={'maps'} className="border border-gray-500 p-2 w-full hover:bg-blue-200">
        Maps
      </NavLink>
    </nav>
  );
};

export default Aside;
