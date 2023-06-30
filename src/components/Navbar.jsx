import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import notification from '../images/notification.svg';

const Navbar = ({settingstab}) => {
  const [activePage, setActivePage] = useState('');
  const [issettings, setissettings] = useState(false);
  const [settingsTab, setSettingsTab] =useState('')

  useEffect(() => {
    setActivePage(window.location.pathname);
    setissettings(window.location.pathname === '/settings');
  }, []);

  const getPageTitle = () => {
    switch (activePage) {
      case '/':
        return '';
      case '/settings':
        return 'Settings';
      case '/compare':
        return 'Compare Products';
      case '/competitive_sets':
        return 'Competitive Sets';
      default:
        return 'Unknown Page';
    }
  };
  const activeSettingsTab = (tabname) => {
    setSettingsTab(tabname);
    settingstab = settingsTab;
    return tabname;
  };
  return (
    <div className='p-5 justify-between flex flex-col border-b w-full'>
      <div className='p-5 justify-between flex w-full'>
        <p className='text-[2em] font-medium ml-8 md:ml-0'>{getPageTitle()}</p>
        <Image src={notification} alt='n' />
      </div>
<div className="flex">

      {
        issettings? <div className='flex justify-between'>
          <p>Manage Teams</p>
          <p>My Account</p>
          <p>Billng</p>
        </div>: ''
      }
      </div>
    </div>
  );
};

export default Navbar;
