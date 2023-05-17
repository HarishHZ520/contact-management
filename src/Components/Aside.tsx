import React from 'react';
import { NavLink } from 'react-router-dom';

const Aside = () => {
  const activeLink = 'bg-blue-200';
  const nonActiveLink = '';

  return (
    <nav className="flex flex-col items-center text-1xl">
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          `${
            isActive ? activeLink : nonActiveLink
          } border border-gray-500 p-2 w-full hover:bg-blue-200`
        }
      >
        Contacts
      </NavLink>
      <NavLink
        to={'charts'}
        className={({ isActive }) =>
          `${
            isActive ? activeLink : nonActiveLink
          } border border-gray-500 p-2 w-full hover:bg-blue-200`
        }
      >
        Charts
      </NavLink>
      <NavLink
        to={'maps'}
        className={({ isActive }) =>
          `${
            isActive ? activeLink : nonActiveLink
          } border border-gray-500 p-2 w-full hover:bg-blue-200`
        }
      >
        Maps
      </NavLink>
    </nav>
  );
};

export default Aside;
