import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getPageTitle = () => {
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    let pageTitle = 'Contact Page';

    if (lastSegment === 'charts') {
      return (pageTitle = 'Charts');
    } else if (lastSegment === 'maps') {
      return (pageTitle = 'Maps');
    } else {
      return pageTitle;
    }
  };
  return <h1 className="text-1xl md:text-2xl lg:text-3xl">{getPageTitle()}</h1>;
};

export default Header;
