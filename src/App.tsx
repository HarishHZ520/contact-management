import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MasterRoot from './MasterRoot';
import ErrorPage from './ErrorPage';
import CreateContact from './Components/Contact/CreateContact';
import HomeContent from './Components/Content/HomeContent';
import EditContact from './Components/Contact/EditContact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MasterRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeContent />,
      },
      {
        path: '/create-contact',
        element: <CreateContact />,
      },
      {
        path: '/edit-contact/:firstName',
        element: <EditContact />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="w-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
