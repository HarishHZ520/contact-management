import React from 'react';
import Aside from './Components/Aside';
import Header from './Components/Header';
import { Outlet } from 'react-router';

const MasterRoot = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container container-height mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2 border border-blue-500 shadow-lg flex flex-col">
        <div className="border border-blue-500 bg-blue-500 p-4 text-center text-white">
          <Header />
        </div>
        <div className="flex flex-1">
          <div className="w-1/3 border border-gray-500">
            <Aside />
          </div>
          <div className="flex flex-col flex-1 items-center justify-start grow gap-10 sm:p-5 p-2 bg-gray-200">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterRoot;
