import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container flex flex-col justify-center items-center m-auto h-screen w-full leading-loose bg-red-200">
      <h1 className="text-red-500 text-4xl md:text-7xl font-bold mb-4 md:mb-8">
        An error occurred!
      </h1>
      <p className="text-gray-700 text-sm md:text-base mb-4">
        Could not find this page!...
      </p>
      <p className="text-gray-700 text-sm md:text-base mb-8">
        Please check the URL or contact the owner.
      </p>
      <span>
        <button className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded">
          <Link to="/">Return to Home</Link>
        </button>
      </span>
    </div>
  );
};

export default ErrorPage;
