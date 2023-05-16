import React from 'react';
import Aside from './Aside';
import Header from './Header';
import Content from './Content';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2 border border-blue-500 shadow-lg h-96 flex flex-col">
        <div className="border border-blue-500 bg-blue-500 p-4 text-center text-white">
          <Header />
        </div>
        <div className="flex flex-1">
          <div className="w-1/3 border border-gray-500">
            <Aside />
          </div>
          <div className="flex flex-col flex-1 items-center justify-start grow gap-10 mt-10 ">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
