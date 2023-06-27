import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import notification from '../images/notification.svg';

const Navbar = () => {
  const [activePage, setActivePage] = useState('');
  const [issettings, setissettings] = useState(false);

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  const getPageTitle = () => {
    switch (activePage) {
      case '/':
        return '';
      case 'settings':
        return 'Settings', setissettings(true);
      case '/compare':
        return 'Compare Products';
      case '/competitive_sets':
        return 'Competitive Sets';
      default:
        return 'Unknown Page';
    }
  };

  return (
    <div className="flex-col flex">
    <div className='p-5 justify-between flex border-b w-full'>
      <p className='text-[2em] font-medium ml-8 md:ml-0'>{getPageTitle()}</p>
      <Image src={notification} alt='n' />
    </div>
    </div>
  );
};

export default Navbar;
