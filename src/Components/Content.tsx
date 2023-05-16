import React from 'react';

import { RxCrossCircled } from 'react-icons/rx';

const Content = () => {
  return (
    <>
      <button className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded">
        Create Contact
      </button>
      <div className="flex items-center justify-center border bg-red-200 p-2 gap-2">
        <div>
          <RxCrossCircled size={'50px'} />
        </div>
        <div>
          <p>No Contacts Found</p>
          <p>Please add contact from</p>
          <p>Create Contact Button</p>
        </div>
      </div>
    </>
  );
};

export default Content;
